// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Fonctionnalité du bouton Post A Project
    const postProjectBtn = document.getElementById('postProjectBtn');
    if (postProjectBtn) {
        postProjectBtn.addEventListener('click', function() {
            alert('Post A Project button clicked! This would open a project submission form.');
            // Possibilité d'ajouter une redirection ou afficher un formulaire modal
            // window.location.href = '/post-project';
        });
    }

    // Fonctionnalité de la barre de recherche
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('focus', function() {
            this.placeholder = '';
        });
        
        searchBar.addEventListener('blur', function() {
            if(this.value === '') {
                this.placeholder = 'Search for projects, clients or keywords...';
            }
        });

        // Ajouter un événement de soumission de recherche
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
    }

    // Fonction pour effectuer la recherche
    function performSearch(query) {
        if (query.trim() !== '') {
            console.log('Searching for:', query);
            // Ici vous pouvez implémenter la logique de recherche réelle
            alert(`Searching for: ${query}`);
        }
    }

    // Fonctionnalité des onglets de navigation
    const tabs = document.querySelectorAll('.nav-tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            // Si le tab a un href, on laisse la navigation se faire normalement
            if (!this.getAttribute('href')) {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Fonctionnalité des boutons d'action dans les étapes d'onboarding
    const stepActions = document.querySelectorAll('.step-action');
    stepActions.forEach(button => {
        button.addEventListener('click', function(e) {
            const stepTitle = this.closest('.step').querySelector('.step-title').textContent;
            
            // Comportement spécifique pour le bouton "Profil Page"
            if (this.textContent === 'Profil Page') {
                e.preventDefault();
                window.location.href = 'profile.html';
                return;
            }
            
            if (this.textContent === 'Already Verified') {
                e.preventDefault();
                alert('Email already verified!');
                // Marquer comme complété visuellement
                this.closest('.step').classList.add('completed');
                this.textContent = 'Verified';
                this.disabled = true;
                return;
            }
            
            alert(`Action clicked for: ${stepTitle}`);
        });
    });

    // Fonctionnalité pour le bouton Browse Projects
    const browseProjectsBtn = document.querySelector('.browse-projects-btn');
    if (browseProjectsBtn) {
        browseProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'projects.html';
        });
    }

    // Animation pour les icônes de notification
    const notificationIcons = document.querySelectorAll('.nav-icons .icon');
    notificationIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.classList.add('icon-hover');
        });
        
        icon.addEventListener('mouseout', function() {
            this.classList.remove('icon-hover');
        });
        
        icon.addEventListener('click', function() {
            // Simuler une notification
            this.classList.add('notification');
            setTimeout(() => {
                this.classList.remove('notification');
            }, 300);
        });
    });

    // Gestion du profil utilisateur
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            // Créer un menu déroulant pour le profil
            const profileMenu = document.createElement('div');
            profileMenu.className = 'profile-dropdown';
            
            // Options du menu
            const menuItems = ['View Profile', 'Account Settings', 'Billing', 'Logout'];
            
            menuItems.forEach(item => {
                const menuItem = document.createElement('a');
                menuItem.href = '#';
                menuItem.textContent = item;
                menuItem.addEventListener('click', function(e) {
                    e.preventDefault();
                    handleProfileAction(item);
                });
                profileMenu.appendChild(menuItem);
            });
            
            // Vérifier si le menu existe déjà
            const existingMenu = document.querySelector('.profile-dropdown');
            if (existingMenu) {
                existingMenu.remove();
            } else {
                // Ajouter le menu à la page
                document.body.appendChild(profileMenu);
                
                // Positionner le menu sous l'icône de profil
                const rect = this.getBoundingClientRect();
                profileMenu.style.top = (rect.bottom + window.scrollY) + 'px';
                profileMenu.style.right = (window.innerWidth - rect.right) + 'px';
                
                // Fermer le menu si on clique ailleurs
                document.addEventListener('click', closeProfileMenu);
            }
        });
    }

    // Fonction pour fermer le menu du profil
    function closeProfileMenu(e) {
        const profileMenu = document.querySelector('.profile-dropdown');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (profileMenu && !profileIcon.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.remove();
            document.removeEventListener('click', closeProfileMenu);
        }
    }

    // Fonction pour gérer les actions du menu profil
    function handleProfileAction(action) {
        switch (action) {
            case 'View Profile':
                window.location.href = 'profile.html';
                break;
            case 'Account Settings':
                window.location.href = 'settings.html';
                break;
            case 'Billing':
                window.location.href = 'billing.html';
                break;
            case 'Logout':
                // Logique de déconnexion
                if (confirm('Are you sure you want to logout?')) {
                    window.location.href = 'logout.php';
                }
                break;
        }
    }

    // Suivi de progression des étapes d'onboarding
    function updateOnboardingProgress() {
        const steps = document.querySelectorAll('.step');
        let completedSteps = 0;
        
        steps.forEach(step => {
            if (step.classList.contains('completed')) {
                completedSteps++;
            }
        });
        
        const progressPercentage = (completedSteps / steps.length) * 100;
        console.log(`Onboarding progress: ${progressPercentage}%`);
        
        // Vous pourriez ajouter une barre de progression visuelle ici
    }

    // Appel initial pour mettre à jour la progression
    updateOnboardingProgress();
});