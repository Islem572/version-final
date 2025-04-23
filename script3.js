document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
        });
    }

    // Animation des barres du graphique
    animateBarChart();
    
    // Animation du graphique en ligne
    animateLineChart();
    
    // Animation des compteurs dans les dashboard cards
    animateCounters();
    
    // Animation à l'apparition des éléments lors du scroll
    setupScrollAnimations();
    
    // Ajout des interactions aux boutons de filtre
    setupChartFilters();
    
    // Animation des cartes de rapport
    animateReportCards();
});

// Fonction pour animer les barres du graphique
function animateBarChart() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        // Réinitialiser la hauteur des barres
        bar.style.height = '0%';
        
        // Récupérer la valeur cible (stockée dans l'attribut data-value)
        const targetHeight = bar.getAttribute('data-value') + '%';
        const label = bar.getAttribute('data-label');
        
        // Ajouter le label sous la barre
        const labelElement = document.createElement('div');
        labelElement.className = 'bar-label';
        labelElement.textContent = label;
        bar.parentNode.appendChild(labelElement);
        
        // Positionner le label
        labelElement.style.left = bar.offsetLeft + (bar.offsetWidth / 2) - (labelElement.offsetWidth / 2) + 'px';
        
        // Ajouter le tooltip avec la valeur
        const tooltip = document.createElement('div');
        tooltip.className = 'bar-tooltip';
        tooltip.textContent = bar.getAttribute('data-value') + '%';
        bar.appendChild(tooltip);
        
        // Animation de la barre après un court délai
        setTimeout(() => {
            bar.style.height = targetHeight;
            
            // Ajouter la classe pour l'animation de remplissage
            bar.classList.add('animated');
        }, 300);
        
        // Gestion du survol pour afficher le tooltip
        bar.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.top = '-25px';
        });
        
        bar.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.top = '-15px';
        });
    });
}

// Fonction pour animer le graphique en ligne
function animateLineChart() {
    const path = document.querySelector('.line-chart .line');
    
    if (path) {
        // Sauvegarde du tracé original
        const originalPath = path.getAttribute('d');
        
        // Commencer avec un tracé plat
        path.setAttribute('d', 'M0,180 L500,180');
        
        // Animation du tracé vers la valeur originale
        setTimeout(() => {
            path.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            path.setAttribute('d', originalPath);
        }, 500);
        
        // Ajouter des points de données avec des tooltips
        const svg = document.querySelector('.line-chart');
        const points = [
            { x: 0, y: 180 },
            { x: 100, y: 160 },
            { x: 200, y: 120 },
            { x: 300, y: 80 },
            { x: 400, y: 50 },
            { x: 500, y: 20 }
        ];
        
        points.forEach((point, index) => {
            // Création du point
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', point.x);
            circle.setAttribute('cy', point.y);
            circle.setAttribute('r', '5');
            circle.setAttribute('fill', 'var(--primary-color)');
            circle.setAttribute('class', 'data-point');
            
            // Animation d'apparition des points
            setTimeout(() => {
                svg.appendChild(circle);
            }, 1000 + (index * 200));
        });
    }
}

// Fonction pour animer les compteurs
function animateCounters() {
    const values = document.querySelectorAll('.dashboard-card .value');
    
    values.forEach(value => {
        const target = value.textContent;
        let isPercentage = target.includes('%');
        let targetValue = parseFloat(target.replace(/[^0-9.-]/g, ''));
        let prefix = target.includes('+') ? '+' : '';
        let suffix = isPercentage ? '%' : '';
        
        // Pour les scores comme 94/100
        if (target.includes('/')) {
            const parts = target.split('/');
            targetValue = parseFloat(parts[0]);
            suffix = '/' + parts[1];
        }
        
        // Début du compteur à 0 ou à une valeur minimale
        let startValue = 0;
        value.textContent = prefix + startValue + suffix;
        
        // Animation du compteur
        const duration = 2000; // 2 secondes
        const interval = 16; // ~60 fps
        const steps = duration / interval;
        const increment = targetValue / steps;
        
        let currentValue = startValue;
        const counter = setInterval(() => {
            currentValue += increment;
            
            // Arrêter l'animation quand on atteint la valeur cible
            if (currentValue >= targetValue) {
                clearInterval(counter);
                currentValue = targetValue;
            }
            
            // Mettre à jour le texte
            value.textContent = prefix + currentValue.toFixed(1).replace(/\.0$/, '') + suffix;
        }, interval);
    });
}

// Fonction pour configurer les animations au scroll
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
                
                // Si c'est la section avec les graphiques, déclencher les animations
                if (entry.target.querySelector('.chart')) {
                    animateBarChart();
                    animateLineChart();
                }
                
                // Si c'est la section avec les cartes de dashboard
                if (entry.target.querySelector('.dashboard')) {
                    animateCounters();
                }
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Fonction pour configurer les filtres de graphiques
function setupChartFilters() {
    const filters = document.querySelectorAll('.chart-filter select');
    
    filters.forEach(filter => {
        filter.addEventListener('change', (e) => {
            const chart = e.target.closest('.chart-container').querySelector('.chart');
            
            // Simuler un chargement de données
            chart.classList.add('loading');
            
            // Après un délai, "afficher" les nouvelles données
            setTimeout(() => {
                chart.classList.remove('loading');
                
                // Ici vous pourriez charger de vraies données selon le filtre
                // Pour la démonstration, on réinitialise simplement les animations
                if (chart.querySelector('.bar-container')) {
                    animateBarChart();
                } else if (chart.querySelector('.line-chart')) {
                    animateLineChart();
                }
            }, 800);
        });
    });
}

// Fonction pour animer les cartes de rapport
function animateReportCards() {
    const cards = document.querySelectorAll('.report-card');
    
    cards.forEach((card, index) => {
        // Animation d'entrée des cartes avec délai
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
        
        // Animation de la barre de progression
        const progress = card.querySelector('.progress');
        if (progress) {
            const originalWidth = progress.style.width;
            progress.style.width = '0%';
            
            setTimeout(() => {
                progress.style.transition = 'width 1s ease-in-out';
                progress.style.width = originalWidth;
            }, 500 + (100 * index));
        }
        
        // Effet de survol
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
    
    // Ajouter des événements sur les boutons de rapport
    const reportButtons = document.querySelectorAll('.report-btn');
    reportButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animation de "clic"
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
                
                // Ici vous pourriez rediriger vers le rapport ou ouvrir une modal
                alert('Rapport en cours de chargement...');
            }, 300);
        });
    });
}

// Ajouter les styles CSS nécessaires pour les animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .bar {
        position: relative;
        transition: height 1s ease-out;
        animation: pulse 2s infinite;
    }
    
    .bar.animated {
        animation: none;
    }
    
    .bar-tooltip {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 12px;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .bar-label {
        position: absolute;
        bottom: -25px;
        text-align: center;
        font-size: 12px;
        color: var(--text-color);
    }
    
    .data-point {
        opacity: 0;
        animation: fadeIn 0.5s forwards;
        cursor: pointer;
    }
    
    .data-point:hover {
        r: 7;
    }
    
    section.animated {
        animation: fadeInUp 0.8s forwards;
    }
    
    .chart.loading {
        opacity: 0.5;
    }
    
    .report-card.hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    
    .report-btn.clicked {
        transform: scale(0.95);
    }
    
    @keyframes pulse {
        0% { opacity: 0.7; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Style pour le menu mobile */
    .nav-links {
        display: none;
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        background: white;
        width: 200px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        z-index: 100;
        animation: slideIn 0.3s forwards;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);