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

//récupère l'username du premier utilisateur (test)
app.get('/username', (req, res) => {
    const sql = 'SELECT Identifiant FROM User';
    connection.query(sql, (error, results, fields) => {
        if(error){
            console.error('Erreur lors de la récupération des données :', error);
            res.status(500).end();
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).end(JSON.stringify(results[0].Identifiant));
    });
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

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});