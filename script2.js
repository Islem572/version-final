document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments du DOM
    const nextButton = document.querySelector('.footer .button');
    const emailInput = document.querySelector('input[type="email"]');
    const phoneInput = document.querySelector('input[type="tel"]');
    const popupModal = document.querySelector('.popup-modal');
    const editProfileButton = document.querySelector('.popup-modal .button');
    
    // Fonction pour valider un email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Fonction pour valider un numéro de téléphone (format international)
    function validatePhone(phone) {
        const re = /^\+?[0-9\s\-()]{8,20}$/;
        return re.test(String(phone));
    }
    
    // Fonction pour afficher la fenêtre modale
    function showModal() {
        popupModal.style.display = 'flex';
        // Animation d'apparition
        setTimeout(() => {
            popupModal.style.opacity = '1';
            document.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Fonction pour masquer la fenêtre modale
    function hideModal() {
        popupModal.style.opacity = '0';
        document.querySelector('.modal-content').style.transform = 'translateY(-20px)';
        setTimeout(() => {
            popupModal.style.display = 'none';
        }, 300);
    }
    
    // Cacher la fenêtre modale par défaut
    popupModal.style.display = 'none';
    popupModal.style.opacity = '0';
    document.querySelector('.modal-content').style.transform = 'translateY(-20px)';
    
    // Événement de clic sur le bouton "Next"
    nextButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        
        // Vérification des champs
        let isValid = true;
        
        if (!validateEmail(email)) {
            emailInput.classList.add('error');
            isValid = false;
        } else {
            emailInput.classList.remove('error');
        }
        
        if (!validatePhone(phone)) {
            phoneInput.classList.add('error');
            isValid = false;
        } else {
            phoneInput.classList.remove('error');
        }
        
        if (isValid) {
            // Sauvegarder les données dans le localStorage
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPhone', phone);
            
            // Calculer le pourcentage de complétion du profil
            const profileCompletion = calculateProfileCompletion();
            
            // Si le profil est complété à moins de 65%, afficher la fenêtre modale
            if (profileCompletion < 65) {
                showModal();
            } else {
                // Sinon, passer à l'étape suivante
                window.location.href = 'etape-suivante.html';
            }
        }
    });
    
    // Fermer la modale quand on clique en dehors
    popupModal.addEventListener('click', function(e) {
        if (e.target === popupModal) {
            hideModal();
        }
    });
    
    // Événements pour les champs de saisie (validation en temps réel)
    emailInput.addEventListener('input', function() {
        if (validateEmail(this.value.trim())) {
            this.classList.remove('error');
        }
    });
    
    phoneInput.addEventListener('input', function() {
        if (validatePhone(this.value.trim())) {
            this.classList.remove('error');
        }
    });
    
    // Fonction pour calculer le pourcentage de complétion du profil
    function calculateProfileCompletion() {
        let completedItems = 0;
        let totalItems = 5; // Par exemple: email, téléphone, éducation, certifications, et infos personnelles
        
        // Vérifier l'email
        if (localStorage.getItem('userEmail') || validateEmail(emailInput.value.trim())) {
            completedItems++;
        }
        
        // Vérifier le téléphone
        if (localStorage.getItem('userPhone') || validatePhone(phoneInput.value.trim())) {
            completedItems++;
        }
        
        // Vérifier les autres éléments (exemple)
        if (localStorage.getItem('userEducation')) {
            completedItems++;
        }
        
        if (localStorage.getItem('userCertifications')) {
            completedItems++;
        }
        
        if (localStorage.getItem('userPersonalInfo')) {
            completedItems++;
        }
        
        return (completedItems / totalItems) * 100;
    }
    
    // Animation pour les étapes de progression
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
    });
    
    // Mettre à jour visuellement l'étape active
    function updateActiveStep(stepNumber) {
        const allStepNumbers = document.querySelectorAll('.step-number');
        allStepNumbers.forEach((step, index) => {
            if (index < stepNumber) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (index === stepNumber) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }
    
    // Par défaut, l'étape 1 est active
    updateActiveStep(0);
    
    // Ajouter des styles CSS pour les animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .error {
            border-color: red !important;
            animation: shake 0.5s;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
        
        .popup-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            transition: opacity 0.3s ease;
        }
        
        .modal-content {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(styleSheet);
});