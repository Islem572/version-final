// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Référencer les boutons du footer
    const backButton = document.querySelector('.footer .btn:first-child');
    const nextButton = document.querySelector('.footer .btn:last-child');
    
    // Ajouter des écouteurs d'événements pour les boutons
    backButton.addEventListener('click', function() {
        // Action pour le bouton "Back"
        console.log('Bouton Back cliqué');
        // Rediriger vers la page précédente ou exécuter une action spécifique
        // window.location.href = 'page-precedente.html';
    });
    
    nextButton.addEventListener('click', function() {
        // Action pour le bouton "Next"
        console.log('Bouton Next cliqué');
        // Rediriger vers la page suivante ou exécuter une action spécifique
        // window.location.href = 'page-suivante.html';
    });
    
    // Animation pour les étapes (steps)
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        // Ajouter une animation d'apparition avec délai selon l'index
        step.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
        step.style.opacity = '0';
        
        // Ajouter un effet de survol
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Animation pour le titre
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.style.animation = 'slideInFromTop 0.7s ease forwards';
    sectionTitle.style.opacity = '0';
    
    // Animation pour le logo
    const logo = document.querySelector('.logo');
    logo.style.animation = 'pulse 2s infinite';
});

// Définir les animations CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInFromTop {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(styleSheet);