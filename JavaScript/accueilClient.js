document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const inputSuivi = document.getElementById('numeroSuivi').value;
    const inputNom = document.getElementById('nom').value;
    // const inputEmail = document.getElementById('email').value;
  
    fetch('http://localhost:3000/connexionClient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({numeroSuivi: inputSuivi, nom: inputNom })
    })
    
      .then(response => response.json())
      .then(data => {
        
        // if (data.message === 'Connexion réussie') {
        //   alert('Connexion réussie. Vous pouvez maintenant suivre votre réparation.');
        //   window.location.assign('espaceClient.html');
        // } else {
        //   alert('Informations incorrectes. Veuillez réessayer.');
        // }
  
        if (data.message === 'Connexion réussie') {
          // Stocker l'ID du client et les données dans le localStorage
          localStorage.setItem("clientID", data.client.id);
          localStorage.setItem("dataClient", JSON.stringify(data.client));
          
          // Rediriger vers l'espace client
          window.location.assign('espaceClient.html');
      } else {
          alert('Informations incorrectes. Veuillez réessayer.');
      }
      })
  
      .catch(error => {
        console.error('Erreur lors de la connexion :', error);
        window.location.href = 'accueilClient.html';  // Redirection si les données sont absentes
        alert('Une erreur est survenue lors de la connexion.');
      });
  });