document.addEventListener("DOMContentLoaded", function () {
    // ID du client stocké dans le localStorage
    const clientId = localStorage.getItem("clientID");
    // Données du client stockées dans le localStorage
    const clientData = JSON.parse(localStorage.getItem("dataClient") || '{}');
  
    // Si les données du client existent dans le localStorage, les afficher
    if (clientData && clientData.nom && clientData.prenom) {
        console.log("Données récupérées depuis le localStorage");
        afficherDonneesClient(clientData);
    } else {
        // Si les données ne sont pas présentes dans le localStorage, récupérer les informations via AJAX
        console.log("Récupération des données depuis le serveur");
  
        if (clientId) {
            // Requête AJAX pour récupérer les informations du client depuis le serveur
            fetch(`http://localhost:3000/client/${clientId}`, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(clientInfo => {
                if (clientInfo) {
                    // Mettre à jour le localStorage avec les nouvelles données
                    localStorage.setItem("dataClient", JSON.stringify(clientInfo));
  
                    // Afficher les données du client récupérées
                    afficherDonneesClient(clientInfo);
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données client :', error);
                alert('Une erreur est survenue lors de la récupération des informations du client.');
            });
        } else {
            console.error("ID du client non trouvé dans le localStorage.");
        }
    }
  
    if (!clientId) {
      console.error("ID du client non trouvé dans le localStorage.");
      alert("Impossible de récupérer les informations du client. Veuillez vous reconnecter.");
      // Optionnel : Rediriger l'utilisateur vers la page de connexion
      window.location.assign('accueilClient.html');
  }
  
  
    // Fonction pour afficher les données du client
    function afficherDonneesClient(clientInfo) {
        document.getElementById("nom-prenom").textContent = `${clientInfo.prenom || ''} ${clientInfo.nom || ''}`;
        document.getElementById("numTel").textContent = `${clientInfo.telephone || ''}`;
        document.getElementById("email").textContent = `${clientInfo.email || ''}`;
        document.getElementById("noteClient").textContent = `${clientInfo.note_client || ''}`;
    }
  
  
  
   // Fonction pour afficher les réparations dans la table
   
  });
  
  document.addEventListener("DOMContentLoaded", function () {
      const clientId = localStorage.getItem("clientID");
  
      if (!clientId) {
          console.error("ID du client non trouvé dans le localStorage.");
          alert("Impossible de récupérer les informations du client. Veuillez vous reconnecter.");
          window.location.assign('connexionClient.html');
          return;
      }
  
      fetch(`http://localhost:3000/repairList/${clientId}`, {
          method: 'GET'
      })
      .then(response => response.json())
      .then(repairList => {
          console.log("Réparations récupérées :", repairList); // Ajoutez ce log
          afficherReparations(repairList);
      })
      .catch(error => {
          console.error('Erreur lors de la récupération des réparations :', error);
          alert('Une erreur est survenue lors de la récupération des réparations.');
      });
  
      function afficherReparations(repairList) {
          const tableBody = document.getElementById("facturesTableBody");
          tableBody.innerHTML = ''; // Vider le tableau avant d'ajouter de nouvelles lignes
  
          repairList.forEach(repair => {
              console.log("Ajout de la réparation :", repair); // Ajoutez ce log
              const row = document.createElement("tr");
  
              row.innerHTML = `
                  <td>${repair.num_suivi || ''}</td>
                  <td class="hidden sm:table-cell">${repair.date_depot || ''}</td>
                  <td class="hidden md:table-cell">${repair.lemodele || ''}</td>
                  <td>${repair.prix || ''} €</td>
                  <td>${repair.resultat || ''}</td>
                  <td>${repair.description || ''}</td>
              `;
  
              tableBody.appendChild(row);
          });
      }
  });
  