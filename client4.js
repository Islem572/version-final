// Sélectionner tous les éléments ayant la classe 'option-card' et les stocker dans une NodeList
const optionCards = document.querySelectorAll('.option-card');
// Sélectionner l'élément d'entrée du budget
const budgetInput = document.querySelector('.budget-input');
// Sélectionner le bouton "Next"
const nextButton = document.querySelector('.next-button');

// Fonction pour basculer la sélection entre les deux options de budget (hourly rate ou fixed price)
optionCards.forEach(card => {
    card.addEventListener('click', () => {
        // Supprimer la classe 'selected' de toutes les cartes avant d'ajouter la sélection à la carte cliquée
        optionCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        // Récupérer le titre de l'option sélectionnée (par exemple "Hourly rate" ou "Fixed price")
        const selectedType = card.querySelector('.option-title').textContent;

        // Stocker le type de budget sélectionné dans localStorage
        localStorage.setItem("budgetType", selectedType);
    });
});

// Écouter les changements sur le champ d'entrée du budget et sauvegarder la valeur
budgetInput.addEventListener('input', () => {
    // Stocker la valeur du budget dans localStorage
    localStorage.setItem("budgetValue", budgetInput.value);
});

// Lorsque l'utilisateur clique sur "Next", récupérer les valeurs sauvegardées et les afficher
nextButton.addEventListener('click', () => {
    // Récupérer les valeurs du type de budget et du montant sauvegardés dans localStorage
    const type = localStorage.getItem("budgetType") || "Hourly rate"; // Valeur par défaut "Hourly rate" si aucune donnée n'est trouvée
    const value = localStorage.getItem("budgetValue") || "0"; // Valeur par défaut "0" si aucune donnée n'est trouvée

    // Afficher les données en console (ou utiliser les valeurs pour une redirection)
    console.log(`Type de budget : ${type}`);
    console.log(`Valeur : ${value}`);

    // Redirection possible si tu veux
    // window.location.href = "page-suivante.html"; // Décommente cette ligne pour rediriger vers une autre page
});

// Lors du chargement de la page (événement DOMContentLoaded), remplir les champs avec les données enregistrées dans localStorage
window.addEventListener("DOMContentLoaded", () => {
    // Vérifier si des données de type de budget ont été sauvegardées
    const savedType = localStorage.getItem("budgetType");
    // Vérifier si des données de valeur de budget ont été sauvegardées
    const savedValue = localStorage.getItem("budgetValue");

    // Si une valeur de budget est sauvegardée, la remplir dans le champ d'entrée
    if (savedValue) budgetInput.value = savedValue;

    // Si un type de budget est sauvegardé, mettre à jour l'interface pour refléter la sélection
    if (savedType) {
        optionCards.forEach(card => {
            // Comparer le texte du titre de la carte avec le type de budget sauvegardé
            if (card.querySelector('.option-title').textContent === savedType) {
                card.classList.add('selected'); // Ajouter la classe 'selected' à la carte correspondante
            } else {
                card.classList.remove('selected'); // Supprimer la classe 'selected' des autres cartes
            }
        });
    }
});
