document.addEventListener('DOMContentLoaded', () => {
  const statuses = {
    'diagnosticTickets': 'En Cours de Diagnostic',
    'enAttenteTickets': 'En Attente Pièce',
    'propositionTickets': 'En Attente Accord'
  };

  for (const [elementId, status] of Object.entries(statuses)) {
    fetch(`http://localhost:3000/tickets?status=${encodeURIComponent(status)}`)
      .then(response => response.json())
      .then(tickets => {
        console.log(`Tickets avec le statut ${status}:`, tickets);
        const ticketContainer = document.getElementById(elementId);

        // Vérifier si le conteneur existe
        if (!ticketContainer) {
          console.error(`Le conteneur avec l'ID "${elementId}" n'existe pas.`);
          return;
        }

        // Vider le conteneur avant d'ajouter de nouveaux tickets
        ticketContainer.innerHTML = '';

        // Ajouter l'en-tête des tickets
        const header = document.createElement('div');
        header.classList.add('ticket-header');
        header.innerHTML = `
          <span>Nom</span>
          <span>Appareil</span>
          <span>N° Suivi</span>
          <span>Réparation</span>
          <span>Action</span>
        `;
        ticketContainer.appendChild(header);

        // Vérifier si des tickets sont reçus
        if (!Array.isArray(tickets) || tickets.length === 0) {
          const noTicketMsg = document.createElement('p');
          noTicketMsg.textContent = 'Aucun ticket à afficher.';
          ticketContainer.appendChild(noTicketMsg);
          return;
        }

        tickets.forEach(ticket => {
          const ticketElement = document.createElement('div');
          ticketElement.classList.add('ticket');
          ticketElement.innerHTML = `
            <span>${ticket.prenom} ${ticket.nom}</span>
            <span>${ticket.lemodele}</span>
            <span><a href="ticketClient.html?num_suivi=${ticket.num_suivi}">${ticket.num_suivi}</a></span>
            <span>${ticket.Proposition || 'N/A'}</span>
          `;

          // Ajouter le bouton "Reprendre" pour les tickets en attente
          const actionSpan = document.createElement('span');
          const button = document.createElement('button');
          button.classList.add('reprendre-btn');
          button.textContent = 'Reprendre';
          button.setAttribute('data-ticket-id', ticket.num_suivi); // Utilisez num_suivi si c'est votre identifiant

          // Ajouter un événement au bouton
          button.addEventListener('click', () => {
            reprendreReparation(ticket.num_suivi, ticketElement);
          });

          actionSpan.appendChild(button);
          ticketElement.appendChild(actionSpan);

          ticketContainer.appendChild(ticketElement);
        });
      })
      .catch(error => {
        console.error(`Erreur lors de la récupération des tickets avec le statut ${status}:`, error);
      });
  }
});

// Définition de la fonction reprendreReparation
function reprendreReparation(ticketId, ticketElement) {
  fetch('http://localhost:3000/updateTicketStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ticketId: ticketId,
      status: 'En Cours de Réparation',
    }),
  })
    .then(response => response.json())
    .then(data => {
      alert('Le statut du ticket a été mis à jour.');
      // Retirer le ticket de la liste actuelle
      ticketElement.parentElement.removeChild(ticketElement);
      // Optionnel : Vous pouvez ajouter le ticket à la liste des réparations en cours
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour du statut du ticket:', error);
      alert('Une erreur est survenue lors de la mise à jour du statut du ticket.');
    });
}
