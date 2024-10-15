$(document).ready(function () {
    function genererNumeroSuivi() {
        const date = new Date();
        const timestamp = date.getTime();
        const random = Math.floor(Math.random() * 10000);
        return timestamp.toString() + random.toString();
    }

    function genererIdentifiantClient(nom, prenom) {
        const random = Math.floor(Math.random() * 1000);
        return prenom.substring(0, 3).toUpperCase() + nom.substring(0, 3).toUpperCase() + random;
    }

    $('#num_suivi').val(genererNumeroSuivi());

    $('#leNom, #lePrenom').on('input', function () {
        const nom = $('#leNom').val();
        const prenom = $('#lePrenom').val();

        if (nom && prenom) {
            $('#idInscription').val(genererIdentifiantClient(nom, prenom));
        }
    });

  $('#validerBtn').click(function (e) {
        e.preventDefault();

        const appareilForm = $('#formulaire').serializeArray();
        const clientForm = $('#clientForm').serializeArray();
        const formData = {};

        $.each(appareilForm, function (i, field) {
            formData[field.name] = field.value;
        });

        $.each(clientForm, function (i, field) {
            formData[field.name] = field.value;
        });

        console.log('Sending data:', formData);


        
        // Envoyer les données au serveur
        $.ajax({
            url: 'http://localhost:8081/addClient',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function (response) {
                console.log('Client ajouté avec l\'ID:', response.id);

                // Stocker les données dans le localStorage
                localStorage.setItem(formData.num_suivi, JSON.stringify(formData));

                // Rediriger vers la page des réparations en cours
                window.location.href = 'reparationsEnCours.html?num_suivi=' + formData.num_suivi;
            },
            error: function (xhr, status, error) {
                console.error('Erreur lors de l\'envoi des données:', error);
                alert('Une erreur est survenue lors de l\'envoi des données.');
            }
        });
    });
});

const element = document.querySelector('validerBtn');
if (element) {
    element.addEventListener('click', function() {
        // Votre code ici
        document.getElementById('validerBtn').addEventListener('click', function() {
            // Récupérer les valeurs des champs
            const numSuivi = document.getElementById('num_suivi').value;
            const nom = document.getElementById('leNom').value;
            const idClient = document.getElementById('idInscription').value;
            const email = document.getElementById('email').value;
        
            // Stocker les informations dans localStorage
            localStorage.setItem('numSuivi', numSuivi);
            localStorage.setItem('nom', nom);
            localStorage.setItem('idClient', idClient);
            localStorage.setItem('email', email);
        
            // Redirection vers la page de suivi
            window.location.href = 'accueilClient.html';
        });
    });
} else {
    console.error('Élément non trouvé : #validerBtn');
}