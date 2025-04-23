
    // Récupère toutes les cartes
    const optionCards = document.querySelectorAll('.option-card');
    const nextButton = document.querySelector('a[href="page3.html"] .nav-button:not(.skip-button)');

    let selectedOption = null;

    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            // Désélectionner les autres
            optionCards.forEach(c => c.classList.remove('selected'));
            
            // Sélectionner la carte cliquée
            card.classList.add('selected');
            selectedOption = card.querySelector('.option-text').textContent;
        });
    });

    // Gestion du bouton "Next"
    nextButton.addEventListener('click', (e) => {
        if (!selectedOption) {
            e.preventDefault();
            alert("Please select an experience level before proceeding.");
        } else {
            // Ici, tu pourrais stocker le choix dans le localStorage si besoin
            localStorage.setItem('experienceLevel', selectedOption);
        }
    });
    // script1-7.js
function addEducation() {
    const container = document.getElementById('education-container');
    const section = container.querySelector('.education-section');
    const clone = section.cloneNode(true);
    
    // Réinitialiser les champs clonés
    const selects = clone.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0; // Réinitialiser la sélection à la première option
    });

    container.appendChild(clone); // Ajouter le bloc cloné à la section
}


