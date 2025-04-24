// Sélection du bouton "ADD" et de la section des langues
const addBtn = document.querySelector('.add-btn');
const languageSection = document.querySelector('.language-section');

// Ajout d'un écouteur d'événement sur le clic du bouton "ADD"
addBtn.addEventListener('click', function (e) {
    // Empêche le rechargement de la page (comportement par défaut du bouton dans un formulaire)
    e.preventDefault();

    // Récupération des deux menus déroulants (langue et niveau)
    const selects = languageSection.querySelectorAll('select');
    const language = selects[0].value;
    const level = selects[1].value;

    // Vérifie que l'utilisateur a bien sélectionné une langue et un niveau
    if (language === "Language" || level === "Language Level") {
        alert("Please select both a language and a level."); // Alerte si l'un des champs n'est pas choisi
        return; // Sort de la fonction
    }

    // Création d'un nouvel élément pour afficher la langue et son niveau
    const newEntry = document.createElement('div');
    newEntry.classList.add('language-entry'); // Classe CSS pour styliser l'entrée
    newEntry.textContent = `${language} - ${level}`; // Texte affiché

    // Ajout de l'entrée à la section des langues
    languageSection.appendChild(newEntry);

    // Réinitialise les menus déroulants
    selects[0].selectedIndex = 0;
    selects[1].selectedIndex = 0;
});

// Sélection du champ de description et du compteur de caractères
const description = document.querySelector('.form-textarea');
const charCount = document.querySelector('.character-count');

// Ajout d'un écouteur d'événement sur la saisie dans la zone de texte
description.addEventListener('input', function () {
    const count = description.value.length; // Nombre de caractères saisis

    // Si le texte fait moins de 150 caractères
    if (count < 150) {
        charCount.textContent = `Min. 150 Characters (${count}/150)`; // Affiche le compteur rouge
        charCount.style.color = 'red';
    } else {
        charCount.textContent = `Good! (${count} characters)`; // Message vert si le minimum est atteint
        charCount.style.color = 'green';
    }
});
