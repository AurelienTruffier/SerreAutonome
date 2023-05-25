const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'serre_auto'
});

connection.connect((error) => {
    if(error){
        console.error('Erreur de connexion à la base de données :', error);
    }
    else{
        console.log('Connexion à la base de données réussie');
    }
});

//en-têtes CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//pour envoyer les identifiants de connexion au serveur
app.post('/connection', (req, res) => {
    //récupère les identifiants dans la requête
    let username = req.body.username;
    let password = req.body.password;
    
    const sql = 'SELECT * FROM user WHERE Identifiant = ? AND MotDePasse = ?';
    
    //A CHANGER POUR PREPARER LA REQUETE AVANT DE L'EXECUTER
    connection.query(sql, [username, password], (error, results, fields) => {
        if(error){
            console.error('Erreur de requête SQL :', error);
            res.status(500).end('Erreur serveur');
        }
        else 
        if(results.length === 0){
            res.status(401).end("Nom d'utilisateur ou mdp incorrect");
        }
        else{
            res.end("Connexion réussie");
        }
    });
});

//TEST pour le graphique
app.get('/mesures', (req, res) => {
    const sql= "SELECT Date, Temperature, HumiditeAir, HumiditeSol, Luminosite, NiveauEau FROM Mesure ORDER BY ID DESC";
    connection.query(sql, (error, results) => {
        if(error){
            console.error('Erreur de requête SQL :', error);
            res.status(500).end('Erreur serveur');
        }
        else{
            res.end(JSON.stringify(results));
        }
    })
});

//TEST pour les jauges du tableau de bord
app.get('/lastMesure', (req, res) => {
    const sql= "SELECT m.Date, m.Temperature, m.HumiditeAir, m.HumiditeSol, m.Luminosite, m.NiveauEau FROM Mesure m WHERE m.Date = (SELECT MAX(Date) FROM Mesure);";
    connection.query(sql, (error, results) => {
        if(error){
            console.error('Erreur de requête SQL :', error);
            res.status(500).end('Erreur serveur');
        }
        else{
            res.end(JSON.stringify(results));
        }
    })
});

//TEST pour le niveau de batterie
app.get('/battery', (req, res) => {
    const battery = 92;
    res.end(JSON.stringify(battery));
})

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});