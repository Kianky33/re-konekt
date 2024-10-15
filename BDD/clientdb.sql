CREATE DATABASE bddrekonekt;

USE bddrekonnekt;

CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    civilite VARCHAR(255),
    leNom VARCHAR(255),
    lePrenom VARCHAR(255),
    idInscription VARCHAR(255),
    numTel VARCHAR(255),
    email VARCHAR(255),
    noteClient TEXT,
    noteInterne TEXT
);

CREATE TABLE appareil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    num_suivi VARCHAR(255),
    letype VARCHAR(255),
    lamarque VARCHAR(255),
    lemodele VARCHAR(255),
    idAppareil VARCHAR(255),
    letat VARCHAR(255),
    nomUt TEXT,
    mtp TEXT,
    consta TEXT,
    Proposition TEXT,
    prix DECIMAL(10, 2),
    accord VARCHAR(255),
);