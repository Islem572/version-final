// script.js
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('work-email');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const locationSelect = document.getElementById('location');

    // Animation d'entrée pour les sections
    gsap.from('.left-section', { duration: 0.8, x: -50, opacity: 0, ease: "power2.out" });
    gsap.from('.right-section', { duration: 0.8, x: 50, opacity: 0, ease: "power2.out", delay: 0.2 });

    // Effets de survol et focus pour les champs de formulaire
    const formInputs = document.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#8b5e4f';
            this.style.boxShadow = '0 0 0 0.2rem rgba(139, 94, 79, 0.25)';
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });// script.js

        // Attend que le DOM soit entièrement chargé
        document.addEventListener('DOMContentLoaded', function() {
            // Récupération des éléments du formulaire
            const signupForm = document.getElementById('signup-form');
            const passwordInput = document.getElementById('password');
            const emailInput = document.getElementById('work-email');
            const firstNameInput = document.getElementById('first-name');
            const lastNameInput = document.getElementById('last-name');
            const locationSelect = document.getElementById('location');
        
            /* ANIMATIONS INITIALES */
            // Animation d'entrée avec GSAP (GreenSock Animation Platform)
            gsap.from('.left-section', { 
                duration: 0.8, 
                x: -50,           // Départ 50px à gauche
                opacity: 0,       // Départ invisible
                ease: "power2.out" // Courbe d'animation
            });
            
            gsap.from('.right-section', { 
                duration: 0.8, 
                x: 50,            // Départ 50px à droite
                opacity: 0, 
                ease: "power2.out", 
                delay: 0.2        // Délai avant démarrage
            });
        
            /* INTERACTIONS FORMULAIRE */
            // Effets de survol et focus pour les champs
            const formInputs = document.querySelectorAll('input, select');
            formInputs.forEach(input => {
                // Au focus (clic dans le champ)
                input.addEventListener('focus', function() {
                    this.style.borderColor = '#8b5e4f'; // Couleur marron
                    this.style.boxShadow = '0 0 0 0.2rem rgba(139, 94, 79, 0.25)'; // Halo léger
                });
        
                // À la perte de focus (quitte le champ)
                input.addEventListener('blur', function() {
                    this.style.borderColor = ''; // Réinitialise
                    this.style.boxShadow = '';
                });
            });
        
            /* VALIDATION EN TEMPS RÉEL */
            // Écouteurs d'événements pour la validation
            emailInput.addEventListener('input', validateEmail);
            passwordInput.addEventListener('input', validatePassword);
            firstNameInput.addEventListener('input', validateName);
            lastNameInput.addEventListener('input', validateName);
        
            // Fonction de validation d'email
            function validateEmail() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    emailInput.setCustomValidity('Veuillez entrer un email professionnel valide');
                    emailInput.style.borderColor = 'red';
                } else {
                    emailInput.setCustomValidity('');
                    emailInput.style.borderColor = 'green';
                }
            }
        
            // Fonction de validation de mot de passe
            function validatePassword() {
                if (passwordInput.value.length < 8) {
                    passwordInput.setCustomValidity('Le mot de passe doit contenir au moins 8 caractères');
                    passwordInput.style.borderColor = 'red';
                } else {
                    passwordInput.setCustomValidity('');
                    passwordInput.style.borderColor = 'green';
                }
            }
        
            // Fonction de validation des noms
            function validateName() {
                const nameRegex = /^[A-Za-z]+$/;
                const input = this;
                if (!nameRegex.test(input.value)) {
                    input.setCustomValidity('Veuillez entrer un nom valide (lettres seulement)');
                    input.style.borderColor = 'red';
                } else {
                    input.setCustomValidity('');
                    input.style.borderColor = 'green';
                }
            }
        
            /* GESTION DE LA SOUMISSION */
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Empêche l'envoi par défaut
                
                // Validation complète avant soumission
                validateEmail();
                validatePassword();
                validateName.call(firstNameInput);
                validateName.call(lastNameInput);
        
                // Vérification globale de validité
                if (signupForm.checkValidity()) {
                    // Afficher un indicateur de chargement
                    const submitButton = signupForm.querySelector('button[type="submit"]');
                    const originalText = submitButton.textContent;
                    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Création du compte...';
                    submitButton.disabled = true;
        
                    // Simulation d'envoi (à remplacer par un vrai appel AJAX)
                    setTimeout(() => {
                        // Réinitialisation du bouton
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
        
                        // Notification de succès avec SweetAlert2
                        Swal.fire({
                            title: 'Succès !',
                            text: 'Votre compte a été créé avec succès',
                            icon: 'success',
                            confirmButtonColor: '#8b5e4f' // Couleur marron
                        }).then(() => {
                            // Redirection vers le dashboard
                            window.location.href = 'partner-dashboard.html';
                        });
                    }, 2000); // Délai de 2 secondes
                } else {
                    // Notification d'erreur
                    Swal.fire({
                        title: 'Erreur de validation',
                        text: 'Veuillez remplir tous les champs requis correctement',
                        icon: 'error',
                        confirmButtonColor: '#8b5e4f'
                    });
                }
            });
        
            /* ANIMATION DU BADGE VERIFIÉ */
            const verifiedBadge = document.querySelector('.verified-badge');
            if (verifiedBadge) {
                // Animation pulsante toutes les 3 secondes
                setInterval(() => {
                    verifiedBadge.style.transform = 'scale(1.05)'; // Légère augmentation
                    setTimeout(() => {
                        verifiedBadge.style.transform = 'scale(1)'; // Retour à la normale
                    }, 500); // Après 0.5 seconde
                }, 3000); // Toutes les 3 secondes
            }
        });
    });

    // Validation en temps réel
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    firstNameInput.addEventListener('input', validateName);
    lastNameInput.addEventListener('input', validateName);

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid work email address');
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.setCustomValidity('');
            emailInput.style.borderColor = 'green';
        }
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordInput.setCustomValidity('Password must be at least 8 characters');
            passwordInput.style.borderColor = 'red';
        } else {
            passwordInput.setCustomValidity('');
            passwordInput.style.borderColor = 'green';
        }
    }

    function validateName() {
        const nameRegex = /^[A-Za-z]+$/;
        const input = this;
        if (!nameRegex.test(input.value)) {
            input.setCustomValidity('Please enter a valid name (letters only)');
            input.style.borderColor = 'red';
        } else {
            input.setCustomValidity('');
            input.style.borderColor = 'green';
        }
    }

    // Validation du formulaire avant soumission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valider tous les champs
        validateEmail();
        validatePassword();
        validateName.call(firstNameInput);
        validateName.call(lastNameInput);

        // Vérifier si le formulaire est valide
        if (signupForm.checkValidity()) {
            // Afficher un loader pendant la soumission
            const submitButton = signupForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Creating account...';
            submitButton.disabled = true;

            // Simuler un envoi (remplacer par un vrai appel AJAX)
            setTimeout(() => {
                // Réinitialiser le bouton
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                // Afficher un message de succès
                Swal.fire({
                    title: 'Success!',
                    text: 'Your account has been created successfully',
                    icon: 'success',
                    confirmButtonColor: '#8b5e4f'
                }).then(() => {
                    // Rediriger ou faire autre chose
                    window.location.href = 'partner-dashboard.html';
                });
            }, 2000);
        } else {
            // Afficher les erreurs de validation
            Swal.fire({
                title: 'Validation Error',
                text: 'Please fill all required fields correctly',
                icon: 'error',
                confirmButtonColor: '#8b5e4f'
            });
        }
    });

    // Animation pour le badge "verified profile"
    const verifiedBadge = document.querySelector('.verified-badge');
    if (verifiedBadge) {
        setInterval(() => {
            verifiedBadge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                verifiedBadge.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }
});