 // Animation pour les cartes d'options
 document.addEventListener('DOMContentLoaded', function() {
    const optionCards = document.querySelectorAll('.option-card');
    
    // Effet de survol sur les cartes
    optionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
    
    // Animation d'apparition des cartes
    setTimeout(() => {
        optionCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
    
    // Style initial pour l'animation
    optionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    // Effet pour le bouton de navigation "Sign up"
    const signupBtn = document.querySelector('.signup');
    if (signupBtn) {
        signupBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#4a00e0';
        });
        
        signupBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    }
});