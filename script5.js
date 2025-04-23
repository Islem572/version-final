document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments du DOM
    const optionCards = document.querySelectorAll('.option-card');
    const nextButton = document.querySelector('.footer .nav-button:last-child');
    const backButton = document.querySelector('.footer .nav-button:first-child');
    const skipButton = document.querySelector('.skip-button');
    const progressIndicator = document.querySelector('.progress-indicator');
    const logoElement = document.querySelector('.logo');
    
    // Variables pour suivre l'état
    let selectedOptionIndex = -1;
    
    // Animation de l'entrée des éléments
    animateEntrance();
    
    // Configuration des cartes d'options
    setupOptionCards();
    
    // Configuration des boutons de navigation
    setupNavigationButtons();
    
    // Animation du logo
    animateLogo();
    
    /**
     * Fonction pour animer l'entrée des éléments sur la page
     */
    function animateEntrance() {
        // Animation du header
        const header = document.querySelector('.header');
        animateElement(header, 'translateY(-20px)', 'translateY(0)', 0);
        
        // Animation de l'indicateur de progression
        animateElement(progressIndicator, 'translateY(-20px)', 'translateY(0)', 100);
        
        // Animation du titre principal
        const questionHeader = document.querySelector('.question-header');
        animateElement(questionHeader, 'translateY(20px)', 'translateY(0)', 200);
        
        // Animation du sous-titre
        const questionSubtext = document.querySelector('.question-subtext');
        animateElement(questionSubtext, 'translateY(20px)', 'translateY(0)', 300);
        
        // Animation des cartes d'options
        optionCards.forEach((card, index) => {
            animateElement(card, 'translateY(30px)', 'translateY(0)', 400 + (index * 100));
        });
        
        // Animation du footer
        const footer = document.querySelector('.footer');
        animateElement(footer, 'translateY(20px)', 'translateY(0)', 800);
    }
    
    /**
     * Fonction utilitaire pour animer un élément
     */
    function animateElement(element, fromTransform, toTransform, delay) {
        element.style.opacity = '0';
        element.style.transform = fromTransform;
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = toTransform;
        }, delay);
    }
    
    /**
     * Configuration des cartes d'options
     */
    function setupOptionCards() {
        optionCards.forEach((card, index) => {
            // Ajouter l'événement de clic
            card.addEventListener('click', function() {
                // Désélectionner toutes les cartes
                optionCards.forEach(c => {
                    c.classList.remove('selected');
                    c.querySelector('.option-select').classList.remove('selected');
                });
                
                // Sélectionner la carte cliquée
                card.classList.add('selected');
                card.querySelector('.option-select').classList.add('selected');
                selectedOptionIndex = index;
                
                // Activer le bouton Next
                nextButton.classList.add('active');
                
                // Effet de sélection
                const selectIndicator = card.querySelector('.option-select');
                selectIndicator.innerHTML = '<div class="checkmark"></div>';
                
                // Sauvegarder la sélection
                saveSelection(index);
            });
            
            // Animation au survol
            card.addEventListener('mouseenter', function() {
                if (!card.classList.contains('selected')) {
                    card.style.transform = 'translateY(-5px)';
                    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (!card.classList.contains('selected')) {
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                }
            });
        });
    }
    
    /**
     * Configuration des boutons de navigation
     */
    function setupNavigationButtons() {
        // Bouton Next
        nextButton.addEventListener('click', function() {
            if (selectedOptionIndex >= 0 || nextButton.classList.contains('active')) {
                // Animation de transition
                const mainContent = document.querySelector('.main-content');
                mainContent.style.opacity = '0';
                mainContent.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    // Redirection vers la page suivante
                    window.location.href = 'page4.html';
                }, 300);
            } else {
                // Animation de rappel si aucune option n'est sélectionnée
                nextButton.classList.add('shake');
                setTimeout(() => {
                    nextButton.classList.remove('shake');
                }, 500);
                
                // Faire clignoter les options
                optionCards.forEach(card => {
                    card.classList.add('highlight');
                    setTimeout(() => {
                        card.classList.remove('highlight');
                    }, 700);
                });
            }
        });
        
        // Bouton Back
        backButton.addEventListener('click', function() {
            // Animation de transition
            const mainContent = document.querySelector('.main-content');
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateX(20px)';
            
            // La redirection est déjà gérée par le lien HTML
        });
        
        // Bouton Skip
        skipButton.addEventListener('click', function() {
            // Animation de transition
            const mainContent = document.querySelector('.main-content');
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                // Redirection vers la page suivante
                window.location.href = 'page4.html';
            }, 300);
        });
    }
    
    /**
     * Animation du logo
     */
    function animateLogo() {
        const logoText = logoElement.querySelector('.logo-text');
        
        logoElement.addEventListener('mouseenter', function() {
            logoText.style.transform = 'rotate(10deg) scale(1.1)';
            logoText.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.7)';
        });
        
        logoElement.addEventListener('mouseleave', function() {
            logoText.style.transform = '';
            logoText.style.textShadow = '';
        });
        
        // Animation initiale
        logoText.style.transition = 'transform 0.3s ease, text-shadow 0.3s ease';
        setTimeout(() => {
            logoText.style.transform = 'rotate(10deg) scale(1.1)';
            logoText.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.7)';
            
            setTimeout(() => {
                logoText.style.transform = '';
                logoText.style.textShadow = '';
            }, 500);
        }, 1000);
    }
    
    /**
     * Sauvegarde de la sélection
     */
    function saveSelection(index) {
        // Options de freelancing
        const options = [
            "Earn main income",
            "Make money on the side",
            "Get experience for full-time job",
            "No goal yet"
        ];
        
        // Sauvegarder dans localStorage
        localStorage.setItem('freelancingGoal', options[index]);
        
        // Activer le bouton Next
        nextButton.classList.add('active');
        nextButton.style.backgroundColor = '#e2c144';
        nextButton.style.color = '#ffffff';
        nextButton.style.cursor = 'pointer';
    }
    
    // Vérifier si une option était déjà sélectionnée (par exemple, si l'utilisateur revient en arrière)
    const savedGoal = localStorage.getItem('freelancingGoal');
    if (savedGoal) {
        const options = [
            "Earn main income",
            "Make money on the side",
            "Get experience for full-time job",
            "No goal yet"
        ];
        
        const savedIndex = options.indexOf(savedGoal);
        if (savedIndex >= 0) {
            // Simuler un clic sur l'option sauvegardée
            setTimeout(() => {
                optionCards[savedIndex].click();
            }, 1000);
        }
    }
});

// Ajouter les styles CSS pour les animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
   
`;
document.head.appendChild(styleSheet);