// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments de la page
    const modalOverlay = document.querySelector('.modal-overlay');
    const editButton = document.querySelector('.edit-button');
    const verifyEmailButton = document.querySelector('.form-field button');
    const phoneInput = document.querySelector('.form-field input');
    
    // Correction du lien dans le bouton "Edit Profil"
    editButton.parentElement.href = "profil11.html";
    
    // Gérer le clic sur le bouton "Edit Profil"
    editButton.addEventListener('click', function() {
        // Fermer la modale et rediriger vers la page de modification du profil
        modalOverlay.style.display = 'none';
        // La redirection est gérée par le lien <a> parent
    });
    
    // Gérer le clic en dehors de la modale pour la fermer
    modalOverlay.addEventListener('click', function(event) {
        // Vérifier si le clic est en dehors de la modale
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });
    
    // Gérer le bouton de vérification d'email
    verifyEmailButton.addEventListener('click', function() {
        // Simuler l'envoi d'un email de vérification
        const originalText = verifyEmailButton.textContent;
        verifyEmailButton.textContent = 'Sending...';
        verifyEmailButton.disabled = true;
        
        // Simuler un délai réseau
        setTimeout(function() {
            verifyEmailButton.textContent = 'Sent!';
            
            // Afficher une notification
            showNotification('Verification email sent. Please check your inbox.');
            
            // Rétablir le bouton après quelques secondes
            setTimeout(function() {
                verifyEmailButton.textContent = originalText;
                verifyEmailButton.disabled = false;
            }, 3000);
        }, 1500);
    });
    
    // Validation du numéro de téléphone
    phoneInput.addEventListener('input', function() {
        // Nettoyer l'entrée pour ne garder que les chiffres
        this.value = this.value.replace(/[^0-9+]/g, '');
        
        // Limiter la longueur
        if (this.value.length > 15) {
            this.value = this.value.slice(0, 15);
        }
    });
    
    // Gérer la soumission du numéro de téléphone
    phoneInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            validateAndSubmitPhone();
        }
    });
    
    // Ajouter un bouton "Confirm" à côté du champ de numéro de téléphone
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirm';
    confirmButton.className = 'field-input confirm-btn';
    confirmButton.style.marginLeft = '10px';
    confirmButton.style.width = '100px';
    confirmButton.style.backgroundColor = '#d2b8a4';
    phoneInput.parentElement.appendChild(confirmButton);
    
    confirmButton.addEventListener('click', function() {
        validateAndSubmitPhone();
    });
    
    function validateAndSubmitPhone() {
        const phoneNumber = phoneInput.value.trim();
        
        // Validation simple du numéro de téléphone
        if (phoneNumber.length < 8) {
            showNotification('Please enter a valid phone number', 'error');
            return;
        }
        
        // Simuler la vérification du numéro de téléphone
        confirmButton.textContent = 'Verifying...';
        confirmButton.disabled = true;
        
        setTimeout(function() {
            confirmButton.textContent = 'Verified!';
            confirmButton.style.backgroundColor = '#8bc34a';
            
            // Mettre à jour la progression du profil
            updateProfileProgress();
            
            // Afficher une notification
            showNotification('Phone number verified successfully!', 'success');
            
            // Rétablir le bouton après quelques secondes
            setTimeout(function() {
                confirmButton.textContent = 'Confirm';
                confirmButton.style.backgroundColor = '#d2b8a4';
                confirmButton.disabled = false;
            }, 3000);
        }, 1500);
    }
    
    // Fonction pour afficher des notifications
    function showNotification(message, type = 'info') {
        // Créer l'élément de notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Ajouter la notification au document
        document.body.appendChild(notification);
        
        // Ajouter un délai avant d'afficher la notification (pour l'animation)
        setTimeout(function() {
            notification.classList.add('show');
        }, 10);
        
        // Supprimer la notification après quelques secondes
        setTimeout(function() {
            notification.classList.remove('show');
            setTimeout(function() {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }
    
    // Fonction pour mettre à jour la progression du profil
    function updateProfileProgress() {
        // Simuler la mise à jour de la progression (dans un cas réel, cela serait calculé)
        const progress = 35; // Pourcentage actuel
        
        // Mettre à jour l'affichage de la progression si on a un élément pour ça
        // Dans votre HTML actuel, il n'y a pas d'élément spécifique pour cela
        
        // Vérifier si nous devons ajuster les étapes dans la modal
        const stepsListItems = document.querySelectorAll('.steps-list li');
        if (stepsListItems.length > 0) {
            stepsListItems[0].style.textDecoration = 'line-through';
            stepsListItems[0].style.color = '#8bc34a';
        }
    }
    
    // Ajout de fonctionnalités pour fermer la modal avec la touche Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalOverlay.style.display !== 'none') {
            modalOverlay.style.display = 'none';
        }
    });
    
    // Bouton pour rouvrir la modal si nécessaire
    const showModalButton = document.createElement('button');
    showModalButton.textContent = 'Show Profile Requirements';
    showModalButton.className = 'show-modal-btn';
    showModalButton.style.position = 'fixed';
    showModalButton.style.bottom = '20px';
    showModalButton.style.right = '20px';
    showModalButton.style.padding = '10px 15px';
    showModalButton.style.backgroundColor = '#d2b8a4';
    showModalButton.style.border = 'none';
    showModalButton.style.borderRadius = '4px';
    showModalButton.style.cursor = 'pointer';
    showModalButton.style.display = 'none'; // Caché initialement
    
    document.body.appendChild(showModalButton);
    
    showModalButton.addEventListener('click', function() {
        modalOverlay.style.display = 'flex';
    });
    
    // Afficher le bouton lorsque la modal est fermée
    const observeModal = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                if (modalOverlay.style.display === 'none') {
                    showModalButton.style.display = 'block';
                } else {
                    showModalButton.style.display = 'none';
                }
            }
        });
    });
    
    observeModal.observe(modalOverlay, { attributes: true });
});