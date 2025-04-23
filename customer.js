// Attente du chargement complet de la page
document.addEventListener('DOMContentLoaded', function() {
    // Récupération du formulaire
    const signupForm = document.querySelector('form');
    
    // Fonction principale appelée lors du clic sur le bouton
    window.main = function() {
        // Cette fonction est référencée dans le HTML via onclick="main()"
        validateForm();
    };
    
    // Ajout d'un écouteur d'événement pour la soumission du formulaire
    signupForm.addEventListener('submit', function(event) {
        // Empêcher l'envoi du formulaire si la validation échoue
        if (!validateForm()) {
            event.preventDefault();
        }
    });
    
    // Fonction de validation du formulaire
    function validateForm() {
        // Récupération des valeurs des champs
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('work-email').value.trim();
        const password = document.getElementById('password').value;
        const country = document.getElementById('location').value;
        
        let isValid = true;
        
        // Validation du prénom
        if (firstName === '') {
            showError('first-name', 'Please enter your first name');
            isValid = false;
        } else if (firstName.length < 2) {
            showError('first-name', 'First name must be at least 2 characters');
            isValid = false;
        } else {
            clearError('first-name');
        }
        
        // Validation du nom
        if (lastName === '') {
            showError('last-name', 'Please enter your last name');
            isValid = false;
        } else if (lastName.length < 2) {
            showError('last-name', 'Last name must be at least 2 characters');
            isValid = false;
        } else {
            clearError('last-name');
        }
        
        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError('work-email', 'Please enter your work email address');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('work-email', 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError('work-email');
        }
        
        // Validation du mot de passe
        if (password === '') {
            showError('password', 'Please enter a password');
            isValid = false;
        } else if (password.length < 8) {
            showError('password', 'Password must be at least 8 characters');
            isValid = false;
        } else {
            clearError('password');
        }
        
        // Validation du pays/région
        if (country === '') {
            showError('location', 'Please select your location');
            isValid = false;
        } else {
            clearError('location');
        }
        
        return isValid;
    }
    
    // Fonction pour afficher les messages d'erreur
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const formGroup = input.parentElement;
        
        // Supprimer l'erreur existante si elle existe
        clearError(inputId);
        
        // Créer et ajouter le message d'erreur
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        formGroup.appendChild(errorDiv);
        input.classList.add('input-error');
    }
    
    // Fonction pour supprimer les messages d'erreur
    function clearError(inputId) {
        const input = document.getElementById(inputId);
        const formGroup = input.parentElement;
        const existingError = formGroup.querySelector('.error-message');
        
        if (existingError) {
            formGroup.removeChild(existingError);
        }
        
        input.classList.remove('input-error');
    }
    
    // Validation en temps réel lors de la saisie
    document.getElementById('first-name').addEventListener('input', function() {
        const firstName = this.value.trim();
        if (firstName.length >= 2) {
            clearError('first-name');
        }
    });
    
    document.getElementById('last-name').addEventListener('input', function() {
        const lastName = this.value.trim();
        if (lastName.length >= 2) {
            clearError('last-name');
        }
    });
    
    document.getElementById('work-email').addEventListener('input', function() {
        const email = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            clearError('work-email');
        }
    });
    
    document.getElementById('password').addEventListener('input', function() {
        const password = this.value;
        if (password.length >= 8) {
            clearError('password');
        }
    });
    
    // Indication de la force du mot de passe
    document.getElementById('password').addEventListener('input', function() {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        
        // Ajouter un indicateur de force de mot de passe si ce n'est pas déjà fait
        let strengthIndicator = document.querySelector('.password-strength');
        if (!strengthIndicator) {
            strengthIndicator = document.createElement('div');
            strengthIndicator.className = 'password-strength';
            this.parentElement.appendChild(strengthIndicator);
        }
        
        // Mettre à jour l'indicateur de force
        if (password.length === 0) {
            strengthIndicator.style.display = 'none';
        } else {
            strengthIndicator.style.display = 'block';
            if (strength < 3) {
                strengthIndicator.textContent = 'Weak password';
                strengthIndicator.className = 'password-strength weak';
            } else if (strength < 5) {
                strengthIndicator.textContent = 'Medium password';
                strengthIndicator.className = 'password-strength medium';
            } else {
                strengthIndicator.textContent = 'Strong password';
                strengthIndicator.className = 'password-strength strong';
            }
        }
    });
    
    // Fonction pour calculer la force du mot de passe
    function calculatePasswordStrength(password) {
        let strength = 0;
        
        // Longueur du mot de passe
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
        
        // Vérification des différents types de caractères
        if (/[A-Z]/.test(password)) strength += 1; // Majuscules
        if (/[a-z]/.test(password)) strength += 1; // Minuscules
        if (/[0-9]/.test(password)) strength += 1; // Chiffres
        if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Caractères spéciaux
        
        return strength;
    }
});