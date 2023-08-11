document.addEventListener('DOMContentLoaded', () => {
  // Récupération du formulaire par son ID
  const form = document.getElementById('reservationForm');

  // Écouteur d'événement pour la soumission du formulaire
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
     // Exemple d'utilisation :
	const generatedId = generateUniqueId();
    // Récupération des valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const message = document.getElementById('message').value;

    // Validation des champs (vous pouvez ajouter vos propres validations ici)

    // Envoi des données à un serveur ou traitement supplémentaire
    // Vous pouvez utiliser une requête AJAX pour envoyer les données à un serveur
    // ou effectuer des actions supplémentaires avec les données du formulaire.

    // Exemple d'affichage des données dans la console
	console.log('ID: ',generatedId);
    console.log('Nom :', name);
    console.log('Email :', email);
    console.log('Téléphone :', phone);
    console.log('Date de prise en charge :', pickupDate);
    console.log('Date de retour :', returnDate);
    console.log('Message :', message);

    // Réinitialisation du formulaire (facultatif)
    form.reset();
  });
});
// Fonction pour générer un ID aléatoire unique
function generateUniqueId() {
  // Génération d'un timestamp en millisecondes
  const timestamp = new Date().getTime();
  // Génération d'un nombre aléatoire
  const randomNumber = Math.floor(Math.random() * 1000);
  // Concaténation du timestamp et du nombre aléatoire pour créer l'ID
  const uniqueId = `${timestamp}_${randomNumber}`;
  return uniqueId;
}

window.addEventListener('load', function() {
    var modal = document.getElementById('modal');
    var openModalButton = document.getElementById('open-modal');
    var closeModalButton = document.getElementsByClassName('close')[0];
    var contactForm = document.getElementById('contact-form');

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        console.log('Nom :', name);
        console.log('Email :', email);
        console.log('Message :', message);

        contactForm.reset();
        modal.style.display = 'none';
    });
});



// Sélectionnez l'élément de la barre de navigation contenant l'icône de bascule
const navbarToggle = document.querySelector('.navbar-toggle');

// Sélectionnez l'élément du menu de navigation
const navbarMenu = document.querySelector('.navbar-menu');

// Ajoutez un écouteur d'événement au clic sur l'icône de bascule
navbarToggle.addEventListener('click', function() {
  // Ajoutez ou supprimez la classe "active" pour basculer l'affichage du menu
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.add('active');
}

function hideSlide() {
  slides[currentSlide].classList.remove('active');
}

function nextSlide() {
  hideSlide();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

setInterval(nextSlide, 3000); // Change de slide toutes les 3 secondes
