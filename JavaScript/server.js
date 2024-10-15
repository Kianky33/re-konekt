const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Configurer CORS
app.use(cors());

// Configurer l'application pour utiliser body-parser pour les requêtes JSON
app.use(bodyParser.json());

// Configurer la connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Remplacez par votre utilisateur MySQL
  password: "", // Remplacez par votre mot de passe MySQL
  database: "bddrekonekt", // Nom de la base de données créée
});

// Connexion à MySQL
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err);
    return;
  }
  console.log("Connecté à MySQL");
});

// Route pour gérer l'ajout d'un appareil
app.post("/nouvelAppareil", (req, res) => {
  const appareilData = req.body;

  // Vérifier que les données requises sont bien présentes
  if (!appareilData.client_id || !appareilData.num_suivi || !appareilData.letype) {
    return res.status(400).json({ error: "Données manquantes" });
  }

  // Gestion de la marque et du modèle personnalisés
  const marque = appareilData.customMarque && appareilData.customMarque.trim() !== ""
    ? appareilData.customMarque
    : appareilData.lamarque;

  const modele = appareilData.customModele && appareilData.customModele.trim() !== ""
    ? appareilData.customModele
    : appareilData.lemodele;

  // Gestion de la date de dépôt
  const dateDepot = new Date().toISOString().slice(0, 19).replace('T', ' ');

  // Insérer les données dans la base de données
  const sql = `
    INSERT INTO appareils (num_suivi, letype, lamarque, lemodele, letat, serie_imei, nomUt, mtp, consta, Proposition, prix, acompte, accord, client_id, resultat, date_depot) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      appareilData.num_suivi,
      appareilData.letype,
      appareilData.lamarque,
      appareilData.lemodele,
      appareilData.letat,
      appareilData.serie_imei,
      appareilData.nomUt,
      appareilData.mtp,
      appareilData.consta,
      appareilData.Proposition,
      appareilData.prix,
      appareilData.acompte,
      appareilData.accord,
      appareilData.client_id,
      appareilData.resultat,
      dateDepot,
    ],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de l'insertion:", err);
        return res.status(500).json({ error: "Erreur lors de l'insertion des données" });
      }

      res.status(201).json({
        message: "Appareil ajouté avec succès",
        appareilId: result.insertId,
      });
    }
  );
});

// Route pour gérer l'ajout d'un nouveau client
app.post("/nouveauClient", (req, res) => {
  const {
    civilite,
    leNom,
    lePrenom,
    idInscription,
    numTel,
    email,
    noteClient,
    noteInterne,
  } = req.body;

  const insertClientQuery = `
    INSERT INTO client (civilite, nom, prenom, identifiant, telephone, email, note_client, note_interne) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const clientValues = [
    civilite,
    leNom,
    lePrenom,
    idInscription,
    numTel,
    email,
    noteClient,
    noteInterne,
  ];

  db.query(insertClientQuery, clientValues, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'insertion des données client :", err);
      return res.status(500).json({ error: "Erreur lors de l'insertion des données client" });
    }

    // Renvoyer l'ID du client nouvellement créé
    res.json({
      message: "Client ajouté avec succès",
      clientId: result.insertId,
    });
  });
});

// Route pour récupérer un appareil avec le client lié
app.get("/appareil/:id", (req, res) => {
  const appareilId = req.params.id;

  // Requête SQL avec jointure pour récupérer l'appareil et le client
  const sql = `
    SELECT 
      appareils.*,
      client.civilite, client.nom, client.prenom, client.identifiant, client.telephone, client.email
    FROM 
      appareils
    JOIN 
      client 
    ON 
      appareils.client_id = client.id
    WHERE 
      appareils.id = ?
  `;

  db.query(sql, [appareilId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération des données :", err.sqlMessage);
      return res.status(500).json({ error: "Erreur lors de la récupération des données" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Appareil non trouvé" });
    }

    res.json(result[0]);
  });
});

// Route pour mettre à jour le statut du ticket
app.put('/updateTicketStatus', (req, res) => {
  const { ticketId, status } = req.body;

  const sql = 'UPDATE appareils SET resultat = ? WHERE num_suivi = ?';

  db.query(sql, [status, ticketId], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du statut:', err);
      return res.status(500).json({ error: 'Erreur lors de la mise à jour du statut' });
    }

    console.log(`Statut du ticket ${ticketId} mis à jour à ${status}`);
    res.status(200).json({ message: 'Statut mis à jour avec succès' });
  });
});

// Route pour marquer un ticket comme récupéré
app.post('/recupererTicket/:id', (req, res) => {
  const ticketId = req.params.id;

  // Requête SQL pour mettre à jour le statut du ticket à 'Récupéré'
  const sql = 'UPDATE appareils SET resultat = ? WHERE id = ?';

  db.query(sql, ['Récupéré', ticketId], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du ticket:', err);
      return res.status(500).json({ error: 'Erreur lors de la mise à jour du ticket' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Ticket non trouvé' });
    }

    res.status(200).json({ message: 'Ticket récupéré avec succès' });
  });
});

// Route pour récupérer les tickets en fonction du statut
app.get('/tickets', (req, res) => {
  const status = req.query.status;

  let sql = `
    SELECT 
      appareils.*, 
      client.nom, client.prenom, client.telephone 
    FROM 
      appareils 
    JOIN 
      client 
    ON 
      appareils.client_id = client.id
  `;
  let params = [];

  if (status) {
    sql += ' WHERE appareils.resultat = ?';
    params.push(status);
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des tickets :', err);
      return res.status(500).json({ error: 'Erreur lors de la récupération des tickets' });
    }

    res.json(results);
  });
});

// Route pour récupérer les tickets terminés
app.get('/ticketsTermines', (req, res) => {
  const sql = `
    SELECT 
      appareils.date_depot,
      appareils.id,
      appareils.num_suivi,
      appareils.client_id,
      appareils.lemodele,
      appareils.Proposition,
      appareils.prix,
      client.nom, client.prenom, client.telephone 
    FROM 
      appareils 
    JOIN 
      client 
    ON 
      appareils.client_id = client.id
    WHERE 
      appareils.resultat IN ('Réparé', 'Hors Service')
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des tickets terminés:', err);
      return res.status(500).json({ error: 'Erreur lors de la récupération des tickets terminés' });
    }

    res.json(results);
  });
});

// Route pour récupérer les tickets récupérés
app.get('/historiqueTickets', (req, res) => {
  const sql = `
    SELECT 
      appareils.date_depot,
      client.nom, client.prenom,
      appareils.letype, appareils.lamarque, appareils.lemodele,
      appareils.num_suivi,
      appareils.Proposition,
      appareils.prix
    FROM 
      appareils 
    JOIN 
      client 
    ON 
      appareils.client_id = client.id
    WHERE 
      appareils.resultat = 'Récupéré'
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des tickets récupérés:', err);
      return res.status(500).json({ error: 'Erreur lors de la récupération des tickets récupérés' });
    }

    const formattedResults = results.map(ticket => {
      if (ticket.date_depot) {
        ticket.date_depot = new Date(ticket.date_depot).toISOString().slice(0, 10);
      }
      return ticket;
    });

    res.json(formattedResults);
  });
});

//route pour connexion client 
app.post('/connexionClient', (req, res) => {
  const { numeroSuivi, nom } = req.body;
  const query = `SELECT * FROM client WHERE id = ? OR nom = ?`;


  db.query(query, [numeroSuivi, nom], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données client :', err);
      return res.status(500).json({ error: 'Erreur lors de la vérification des données client' });
    }

    if (results.length > 0) {
      res.json({ message: 'Connexion réussie', client: results[0] });
    } else {
      res.status(401).json({ message: 'Informations incorrectes' });
    }
  });
});


// route pour recuperer le client connecter 

app.get('/client/:id', (req, res) => {
  const clientId = req.params.id;

  const query = `SELECT * FROM client WHERE id = ?`;

  db.query(query, [clientId], (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des données client :', err);
          return res.status(500).json({ error: 'Erreur lors de la récupération des données client' });
      }

      if (results.length > 0) {
          res.json(results[0]);
      } else {
          res.status(404).json({ message: 'Client non trouvé' });
      }
  });
});


// route pour affichage tableau 
app.get('/repairList/:clientId', (req, res) => {
  const clientId = req.params.clientId;

  const query = `
      SELECT 
          appareils.num_suivi, 
          appareils.date_depot, 
          appareils.lemodele, 
          appareils.prix, 
          appareils.resultat
          
      FROM 
          appareils
      WHERE 
          appareils.client_id = ?
  `;

  db.query(query, [clientId], (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des réparations :', err);
          return res.status(500).json({ error: 'Erreur lors de la récupération des réparations.' });
      }

      res.json(results);
  });
});


// Démarrer le serveur Express
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
