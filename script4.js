document.addEventListener('DOMContentLoaded', function() {
    // Animation du logo au chargement de la page
    animateLogo();
    
    // Animation de la liste des étapes
    animateSteps();
    
    // Configuration des boutons
    setupButtons();
    
    // Animation du titre principal
    animateTitle();
    
    // Ajout d'un effet de particules en arrière-plan (optionnel)
    createParticles();
});

// Fonction pour animer le logo
function animateLogo() {
    const logo = document.querySelector('.logo');
    const logoSpan = logo.querySelector('span');
    
    // Animation initiale du logo
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-20px)';
    
    // Animation du logo après un délai
    setTimeout(() => {
        logo.style.transition = 'all 0.8s ease';
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
        
        // Animation spéciale pour le F dans le logo
        if (logoSpan) {
            setTimeout(() => {
                logoSpan.style.transition = 'all 0.5s ease';
                logoSpan.style.textShadow = '0 0 15px rgba(226, 193, 68, 0.8)';
                logoSpan.style.transform = 'scale(1.1) rotate(5deg)';
                
                setTimeout(() => {
                    logoSpan.style.transform = 'scale(1) rotate(0)';
                    logoSpan.style.textShadow = '0 0 5px rgba(226, 193, 68, 0.5)';
                }, 300);
            }, 800);
        }
    }, 200);
    
    // Animation du logo lors du survol
    logo.addEventListener('mouseenter', () => {
        if (logoSpan) {
            logoSpan.style.transition = 'all 0.3s ease';
            logoSpan.style.textShadow = '0 0 15px rgba(226, 193, 68, 0.8)';
            logoSpan.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    logo.addEventListener('mouseleave', () => {
        if (logoSpan) {
            logoSpan.style.transition = 'all 0.3s ease';
            logoSpan.style.textShadow = '0 0 5px rgba(226, 193, 68, 0.5)';
            logoSpan.style.transform = 'scale(1) rotate(0)';
        }
    });
}

// Fonction pour animer les étapes
function animateSteps() {
    const steps = document.querySelectorAll('ol li');
    
    steps.forEach((step, index) => {
        // Initialisation
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';
        
        // Animation avec délai progressif
        setTimeout(() => {
            step.style.transition = 'all 0.5s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
        }, 500 + (index * 200));
        
        // Ajouter un indicateur numérique personnalisé
        const number = document.createElement('span');
        number.className = 'step-number';
        number.textContent = (index + 1);
        step.prepend(number);
        
        // Animation au survol
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateX(5px)';
            step.style.color = '#e2c144';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateX(0)';
            step.style.color = '';
        });
    });
}

// Fonction pour configurer les boutons
function setupButtons() {
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
    
    // Animation initiale des boutons
    [primaryBtn, secondaryBtn].forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            btn.style.transition = 'all 0.5s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
    
    // Effet de pulsation pour le bouton principal
    setTimeout(() => {
        primaryBtn.classList.add('pulse');
    }, 2000);
    
    // Événements pour les boutons
    primaryBtn.addEventListener('click', () => {
        // Effet de clic
        primaryBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            primaryBtn.style.transform = 'scale(1)';
            // Redirection vers la page de création de profil
            window.location.href = 'profile.html';
        }, 200);
    });
    
    secondaryBtn.addEventListener('click', () => {
        // Effet de clic
        secondaryBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            secondaryBtn.style.transform = 'scale(1)';
            // Redirection vers la page d'exploration
            window.location.href = 'explore.html';
        }, 200);
    });
    
    // Ajouter effet de survol amélioré
    [primaryBtn, secondaryBtn].forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '';
        });
    });
}

// Fonction pour animer le titre principal
function animateTitle() {
    const title = document.querySelector('h1');
    
    // Diviser le titre en mots
    const words = title.textContent.split(' ');
    title.textContent = '';
    
    // Créer des spans pour chaque mot
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(-20px)';
        title.appendChild(span);
        
        // Animation des mots avec délai
        setTimeout(() => {
            span.style.transition = 'all 0.3s ease';
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
}

// Fonction pour créer un effet de particules en arrière-plan
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    // Créer les particules
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Position aléatoire
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        
        // Taille et opacité aléatoires
        const size = Math.random() * 10 + 2;
        const opacity = Math.random() * 0.5 + 0.1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.opacity = opacity;
        
        // Animation
        const duration = Math.random() * 30 + 10;
        particle.style.animation = `float ${duration}s infinite linear`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Ajouter les styles CSS pour les animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
   
`;
document.head.appendChild(styleSheet);