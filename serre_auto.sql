DROP DATABASE IF EXISTS serre_auto;
CREATE DATABASE serre_auto;
USE serre_auto;

CREATE TABLE User(
                    Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                    Identifiant VARCHAR(12) NOT NULL,
                    Email VARCHAR(32) NOT NULL,
                    MotDePasse VARCHAR(12) NOT NULL,
                    Administrateur BOOL NOT NULL
);

CREATE TABLE Mesure (
                     Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                     Temperature FLOAT NOT NULL,
                     HumiditeAir FLOAT NOT NULL,
                     HumiditeSol INT NOT NULL,
                     Luminosite INT NOT NULL,
                     NiveauEau INT NOT NULL,
                     ChargeBatterie INT NOT NULL,
                     TempBatterie INT NOT NULL,
                     Date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Seuil (
                    Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                    #humidite du sol pour arrosage
                    SeuilHautHumidSol FLOAT NOT NULL,
                    SeuilBasHumidSol FLOAT NOT NULL,
                    #humidite de lair
                    SeuilHautHumidAir FLOAT NOT NULL,
                    SeuilBasHumidAir FLOAT NOT NULL,
                    #temperature air pour lucarne
                    SeuilHautTemp FLOAT NOT NULL,
                    SeuilBasTemp FLOAT NOT NULL,
                    #luminosite pour eclairage
                    SeuilHautLumino FLOAT NOT NULL,
                    SeuilBasLumino FLOAT NOT NULL,
                    #heures début/fin eclairage si luminosite trop faible
                    HeureDebEclairage TIME NOT NULL,
                    HeureFinEclairage TIME NOT NULL

                    #recuperer niveau deau dans la table Mesure directement
);

INSERT INTO `user` (`Id`, `Identifiant`, `Email`, `MotDePasse`, `Administrateur`) VALUES (NULL, 'aurelien', 'truffier.aurelien@outlook.fr', 'btssn', '1'), (NULL, 'alexandre', 'lebasalex100@gmail.com', 'btssn', '1'), (NULL, 'kelly', 'kelly.raymond5903@gmail.com', 'btssn', '1');

INSERT INTO `seuil` (`Id`, `SeuilHautHumidSol`, `SeuilBasHumidSol`, `SeuilHautHumidAir`, `SeuilBasHumidAir`, `SeuilHautTemp`, `SeuilBasTemp`, `SeuilHautLumino`, `SeuilBasLumino`, `HeureDebEclairage`, `HeureFinEclairage`) VALUES (NULL, '680', '400', '65', '35', '30', '19', '1023', '400', '09:00:00', '21:00:00');

INSERT INTO Mesure (Temperature, HumiditeAir, HumiditeSol, Luminosite, NiveauEau, ChargeBatterie, TempBatterie, Date)
VALUES
    (25.3, 62.8, 38, 450, 70, 98, 27, NOW()), -- Dernière valeur enregistrée à la date et heure actuelles
    (24.9, 62.6, 39, 460, 72, 99, 26, NOW() - INTERVAL 10 MINUTE),
    (24.8, 62.7, 38, 465, 73, 99, 25, NOW() - INTERVAL 20 MINUTE),
    (24.6, 62.5, 37, 455, 70, 99, 26, NOW() - INTERVAL 30 MINUTE),
    (25.1, 62.3, 36, 470, 72, 100, 27, NOW() - INTERVAL 40 MINUTE),
    (24.5, 62.2, 35, 475, 70, 100, 25, NOW() - INTERVAL 50 MINUTE),
    (24.9, 62.0, 34, 465, 71, 100, 26, NOW() - INTERVAL 60 MINUTE),
    (25.2, 61.8, 33, 460, 72, 100, 27, NOW() - INTERVAL 70 MINUTE),
    (25.3, 61.6, 32, 455, 70, 100, 26, NOW() - INTERVAL 80 MINUTE),
    (25.1, 61.5, 31, 470, 72, 100, 25, NOW() - INTERVAL 90 MINUTE),
    (24.8, 61.3, 30, 475, 73, 100, 26, NOW() - INTERVAL 100 MINUTE),
    (25.0, 61.1, 29, 465, 70, 100, 27, NOW() - INTERVAL 110 MINUTE),
    (24.7, 61.0, 28, 460, 72, 100, 25, NOW() - INTERVAL 120 MINUTE),
    (24.6, 60.8, 27, 455, 70, 100, 26, NOW() - INTERVAL 130 MINUTE),
    (24.9, 60.6, 26, 470, 71, 100, 27, NOW() - INTERVAL 140 MINUTE),
    (25.2, 60.5, 25, 475, 72, 100, 26, NOW() - INTERVAL 150 MINUTE),
    (25.3, 60.3, 24, 465, 70, 100, 27, NOW() - INTERVAL 160 MINUTE),
    (25.1, 60.1, 23, 460, 72, 100, 25, NOW() - INTERVAL 170 MINUTE),
    (24.8, 60.0, 22, 455, 73, 100, 26, NOW() - INTERVAL 180 MINUTE),
    (25.0, 59.8, 21, 470, 70, 100, 27, NOW() - INTERVAL 190 MINUTE),
    (24.7, 59.7, 20, 475, 72, 100, 25, NOW() - INTERVAL 200 MINUTE),
    (24.6, 59.5, 19, 465, 70, 100, 26, NOW() - INTERVAL 210 MINUTE),
    (24.9, 59.3, 18, 460, 71, 100, 27, NOW() - INTERVAL 220 MINUTE),
    (25.2, 59.2, 17, 455, 72, 100, 26, NOW() - INTERVAL 230 MINUTE);