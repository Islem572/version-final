// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Animation des étapes lors du chargement de la page
    animateStepsList();
    
    // Gestion du bouton "Complete your freelance profile"
    const completeProfileBtn = document.querySelector('.btn:first-of-type');
    if (completeProfileBtn) {
        completeProfileBtn.addEventListener('click', function() {
            window.location.href = 'profile-setup.html';
        });
    }
    
    // Animation du logo au chargement
    animateLogo();
    
    // Traceur de progression
    initProgressTracker();
    
    // Animation lors du survol sur les boutons
    initButtonHoverEffects();
});

// Fonction pour animer l'apparition des étapes
function animateStepsList() {
    const steps = document.querySelectorAll('.steps-list li');
    
    steps.forEach((step, index) => {
        // Définir un délai croissant pour chaque étape
        setTimeout(() => {
            step.classList.add('animate-in');
        }, 300 * (index + 1));
    });
}

// Animation du logo
function animateLogo() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('logo-pulse');
        
        // Ajouter un effet de surbrillance sur le F
        const span = logo.querySelector('span');
        if (span) {
            setTimeout(() => {
                span.classList.add('highlight');
                setTimeout(() => {
                    span.classList.remove('highlight');
                }, 1000);
            }, 500);
        }
    }
}

// Initialiser le suivi de progression
function initProgressTracker() {
    // Créer un tracker de progression stocké en session
    let progress = sessionStorage.getItem('onboardingProgress');
    
    if (!progress) {
        // Si c'est la première visite, initialiser la progression
        progress = {
            currentStep: 1,
            completedSteps: [],
            lastVisit: new Date().toISOString()
        };
        sessionStorage.setItem('onboardingProgress', JSON.stringify(progress));
    } else {
        try {
            progress = JSON.parse(progress);
            progress.lastVisit = new Date().toISOString();
            sessionStorage.setItem('onboardingProgress', JSON.stringify(progress));
        } catch (e) {
            console.error('Error parsing progress data:', e);
            // Réinitialiser en cas d'erreur
            progress = {
                currentStep: 1,
                completedSteps: [],
                lastVisit: new Date().toISOString()
            };
            sessionStorage.setItem('onboardingProgress', JSON.stringify(progress));
        }
    }
    
    // Mettre à jour visuellement la liste des étapes
    updateStepsVisuals(progress);
}

// Mettre à jour l'apparence des étapes en fonction de la progression
function updateStepsVisuals(progress) {
    const steps = document.querySelectorAll('.steps-list li');
    
    steps.forEach((step, index) => {
        // Marquer les étapes complétées
        if (progress.completedSteps.includes(index + 1)) {
            step.classList.add('completed');
            
            // Ajouter une icône de validation
            if (!step.querySelector('.checkmark')) {
                const checkmark = document.createElement('span');
                checkmark.className = 'checkmark';
                checkmark.innerHTML = '✓';
                step.appendChild(checkmark);
            }
        }
        
        // Mettre en évidence l'étape actuelle
        if (index + 1 === progress.currentStep) {
            step.classList.add('current');
        }
    });
}

// Fonction pour marquer une étape comme complétée
function completeStep(stepNumber) {
    let progress = JSON.parse(sessionStorage.getItem('onboardingProgress'));
    
    if (!progress.completedSteps.includes(stepNumber)) {
        progress.completedSteps.push(stepNumber);
    }
    
    // Passer à l'étape suivante
    if (stepNumber === progress.currentStep) {
        progress.currentStep++;
    }
    
    sessionStorage.setItem('onboardingProgress', JSON.stringify(progress));
    updateStepsVisuals(progress);
}

// Animations au survol des boutons
function initButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('btn-hover');
        });
        
        button.addEventListener('mouseout', function() {
            this.classList.remove('btn-hover');
        });
        
        button.addEventListener('mousedown', function() {
            this.classList.add('btn-active');
        });
        
        button.addEventListener('mouseup', function() {
            this.classList.remove('btn-active');
        });
        
        // Effet de ripple au clic
        button.addEventListener('click', function(e) {
            // Créer l'élément ripple
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            // Positionner le ripple
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // Supprimer le ripple après l'animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Fonction pour rediriger vers la page suivante avec animation
function navigateWithTransition(url) {
    // Ajouter une classe pour l'animation de sortie
    document.body.classList.add('page-exit');
    
    // Attendre la fin de l'animation avant de rediriger
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

// Détection des retours utilisateur
window.addEventListener('pageshow', function(event) {
    // Vérifier si c'est un retour en arrière
    if (event.persisted) {
        // L'utilisateur a utilisé le bouton retour
        console.log('User returned to this page via back button');
        
        // Réinitialiser les animations si nécessaire
        document.body.classList.remove('page-exit');
        
        // Recharger les animations
        animateStepsList();
        animateLogo();
    }
});