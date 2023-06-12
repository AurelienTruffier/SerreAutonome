const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.urlencoded({ extended: true }));

const nodemailer = require('nodemailer');

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

//Niveau de la batterie
app.get('/battery', (req, res) => {
    const sql= "SELECT m.ChargeBatterie FROM Mesure m WHERE m.Date = (SELECT MAX(Date) FROM Mesure);";
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

//Différents seuils
app.get('/seuils', (req, res) => {
    const sql= "SELECT * FROM Seuil";
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

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

/*------------------------------------Avertissement par e-mail-------------------------------------- */

const mailDelay = 43200000; // 12h en ms

const seuilAvertissementBatterie = 20; // 20% de batterie 

function getMailList(callback) {
    const sql = "SELECT Email FROM User WHERE Administrateur = 1";
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Erreur de requête SQL:', error);
            callback([]);
        } else {
            const mailList = results.map(result => result["Email"]);
            console.log(mailList);
            callback(mailList);
        }
    });
}

function CheckIfInvalidValues(callback) {
    const sql = "SELECT m.ChargeBatterie, m.NiveauEau FROM Mesure m WHERE m.Date = (SELECT MAX(Date) FROM Mesure)";
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Erreur de requête SQL:', error);
            callback(false);
        } else {
            const chargeBatterie = results[0].ChargeBatterie;
            const niveauEau = results[0].NiveauEau;
            console.log("Charge de batterie:", chargeBatterie);
            console.log("Niveau d'eau:", niveauEau);

            let problem = false
            let problemType = null

            if(chargeBatterie < seuilAvertissementBatterie && niveauEau != 1){
                problem = true;
                problemType = "Both";
            }
            else if(chargeBatterie < seuilAvertissementBatterie){
                problem = true;
                problemType = "BatteryLvl";
            }
            else if (niveauEau != 1){
                problem = true;
                problemType = "WaterLvl"
            }
            callback(problem, problemType);
        }
    });
}

function Send() {
    let transporter = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 587,
        secure: false, // true pour les connexions SSL/TLS sécurisées
        auth: {
            user: 'serre_auto@truffieraurelien.ovh',
            pass: 'monMotDePasse'
        }
    });

    getMailList(mailList => {
        CheckIfInvalidValues((isValid, problemType) => {
            let subject = 'Problème avec la serre !';
            let text = '';
            
            console.log(problemType);

            switch(problemType){
                case "BatteryLvl":
                    subject = 'Problème de charge de batterie !';
                    text = 'Le niveau de batterie est inférieur au seuil recommandé.';
                    break;
                case "WaterLvl":
                    subject = 'Problème de niveau d\'eau !';
                    text = 'Il n\'y a plus d\'eau dans le réservoir.';
                    break;
                case "Both":
                    subject = 'Problème de niveau de batterie et de niveau d\'eau !';
                    text = 'Il n\'y a plus d\'eau dans le réservoir et le niveau de batterie est insuffisant.';
                default:
                    break;
            }

            let mailOptions = {
                from: 'serre_auto@truffieraurelien.ovh',
                to: mailList,
                subject: subject,
                text: text
            };

            // pour envoyer l'e-mail
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Erreur:', error);
                } else {
                    console.log('Email envoyé !');
                    console.log('Message ID:', info.messageId);
                }
            });
        });
    });
}

function SendMails() {
    CheckIfInvalidValues(isValid => {
        if (isValid) {
            Send();
        }
        else
        {
            console.log("Les valeurs ne sont pas valides pour envoyer un mail.");
        }
    });
}

SendMails();
setInterval(SendMails, mailDelay);