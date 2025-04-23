// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le formulaire
    const contactForm = document.querySelector('.contact-form');
    
    // Ajouter un écouteur d'événement pour la soumission du formulaire
    contactForm.addEventListener('submit', function(event) {
        // Empêcher le comportement par défaut (rechargement de la page)
        event.preventDefault();
        
        // Récupérer les valeurs des champs
        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const sujet = document.getElementById('sujet').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Valider les champs
        if (!validateForm(nom, email, sujet, message)) {
            return;
        }
        
        // Préparer les données à envoyer
        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('email', email);
        formData.append('sujet', sujet);
        formData.append('message', message);
        
        // Afficher un indicateur de chargement
        const submitBtn = document.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        // Envoyer les données au serveur avec fetch API
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau');
            }
            return response.json();
        })
        .then(data => {
            // Traiter la réponse du serveur
            if (data.success) {
                // Afficher un message de succès
                showMessage('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.', 'success');
                // Réinitialiser le formulaire
                contactForm.reset();
            } else {
                // Afficher un message d'erreur
                showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
            }
        })
        .catch(error => {
            // Gérer les erreurs
            console.error('Erreur:', error);
            showMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.', 'error');
        })
        .finally(() => {
            // Restaurer le bouton
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
    });
    
    // Fonction pour valider le formulaire
    function validateForm(nom, email, sujet, message) {
        let isValid = true;
        
        // Valider le nom
        if (nom.length < 2) {
            showInputError('nom', 'Veuillez entrer un nom valide');
            isValid = false;
        } else {
            clearInputError('nom');
        }
        
        // Valider l'email avec une expression régulière
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showInputError('email', 'Veuillez entrer une adresse e-mail valide');
            isValid = false;
        } else {
            clearInputError('email');
        }
        
        // Valider le sujet
        if (sujet.length < 3) {
            showInputError('sujet', 'Veuillez entrer un sujet pour votre message');
            isValid = false;
        } else {
            clearInputError('sujet');
        }
        
        // Valider le message
        if (message.length < 10) {
            showInputError('message', 'Votre message doit contenir au moins 10 caractères');
            isValid = false;
        } else {
            clearInputError('message');
        }
        
        return isValid;
    }
    
    // Fonction pour afficher une erreur sous un champ de formulaire
    function showInputError(inputId, errorMessage) {
        const inputElement = document.getElementById(inputId);
        const formGroup = inputElement.parentElement;
        
        // Supprimer l'erreur existante si elle existe
        clearInputError(inputId);
        
        // Créer et ajouter le message d'erreur
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        formGroup.appendChild(errorElement);
        
        // Ajouter une classe d'erreur à l'input
        inputElement.classList.add('input-error');
    }
    
    // Fonction pour supprimer un message d'erreur
    function clearInputError(inputId) {
        const inputElement = document.getElementById(inputId);
        const formGroup = inputElement.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        inputElement.classList.remove('input-error');
    }
    
    // Fonction pour afficher un message global
    function showMessage(message, type) {
        // Supprimer un message existant s'il y en a un
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Créer l'élément de message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        // Insérer le message avant le formulaire
        contactForm.parentNode.insertBefore(messageElement, contactForm);
        
        // Faire défiler jusqu'au message
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Supprimer le message après 5 secondes si c'est un message de succès
        if (type === 'success') {
            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
    }
    
    // Ajouter des écouteurs d'événements pour la validation en temps réel
    document.getElementById('nom').addEventListener('blur', function() {
        const nom = this.value.trim();
        if (nom.length < 2 && nom.length > 0) {
            showInputError('nom', 'Veuillez entrer un nom valide');
        } else {
            clearInputError('nom');
        }
    });
    
    document.getElementById('email').addEventListener('blur', function() {
        const email = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) && email.length > 0) {
            showInputError('email', 'Veuillez entrer une adresse e-mail valide');
        } else {
            clearInputError('email');
        }
    });
    
    document.getElementById('sujet').addEventListener('blur', function() {
        const sujet = this.value.trim();
        if (sujet.length < 3 && sujet.length > 0) {
            showInputError('sujet', 'Veuillez entrer un sujet pour votre message');
        } else {
            clearInputError('sujet');
        }
    });
    
    document.getElementById('message').addEventListener('blur', function() {
        const message = this.value.trim();
        if (message.length < 10 && message.length > 0) {
            showInputError('message', 'Votre message doit contenir au moins 10 caractères');
        } else {
            clearInputError('message');
        }
    });
});