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
                    SeuilHautHumidsol FLOAT NOT NULL,
                    SeuilBasHumidsol FLOAT NOT NULL,
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

INSERT INTO Seuil VALUES (300, 600, 23, 15, 500, 300, "09:00:00", "18:00:00");