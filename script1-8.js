document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les éléments
    const nextButton = document.querySelector('.btn.next');
    const backButton = document.querySelector('.btn.back');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0; // Commencer à la première étape

    // Fonction pour activer l'étape suivante
    function goToNextStep() {
        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.remove('active'); // Désactiver l'étape actuelle
            currentStep++; // Passer à l'étape suivante
            steps[currentStep].classList.add('active'); // Activer la nouvelle étape
        }
    }

    // Fonction pour revenir à l'étape précédente
    function goToPreviousStep() {
        if (currentStep > 0) {
            steps[currentStep].classList.remove('active'); // Désactiver l'étape actuelle
            currentStep--; // Revenir à l'étape précédente
            steps[currentStep].classList.add('active'); // Activer la nouvelle étape
        }
    }

    // Validation avant de passer à l'étape suivante
    function validateStep() {
        // Exemple de validation : vérifier que l'occupation a été sélectionnée
        const occupationSelect = document.querySelector('.form-select');
        if (occupationSelect.value === "Select Occupation") {
            alert("Please select your occupation before proceeding.");
            return false; // Ne pas passer à l'étape suivante
        }
        return true; // Validation réussie, on peut passer à l'étape suivante
    }

    // Event Listener pour le bouton "Next"
    nextButton.addEventListener('click', function() {
        if (validateStep()) {
            goToNextStep(); // Si la validation réussie, on va à l'étape suivante
        }
    });

    // Event Listener pour le bouton "Back"
    backButton.addEventListener('click', function() {
        goToPreviousStep(); // On revient à l'étape précédente
    });
});
