    const optionCards = document.querySelectorAll('.option-card');
    const budgetInput = document.querySelector('.budget-input');
    const nextButton = document.querySelector('.next-button');

    // Fonction pour basculer la sélection entre les deux options
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            optionCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            const selectedType = card.querySelector('.option-title').textContent;
            localStorage.setItem("budgetType", selectedType);
        });
    });

    // Mettre à jour la valeur du budget à chaque modification
    budgetInput.addEventListener('input', () => {
        localStorage.setItem("budgetValue", budgetInput.value);
    });

    // Lors du clic sur "Next", tu peux afficher les infos en console ou rediriger
    nextButton.addEventListener('click', () => {
        const type = localStorage.getItem("budgetType") || "Hourly rate";
        const value = localStorage.getItem("budgetValue") || "0";

        console.log(`Type de budget : ${type}`);
        console.log(`Valeur : ${value}`);

        // Redirection possible si tu veux
        // window.location.href = "page-suivante.html";
    });

    // Remplissage si déjà en mémoire
    window.addEventListener("DOMContentLoaded", () => {
        const savedType = localStorage.getItem("budgetType");
        const savedValue = localStorage.getItem("budgetValue");

        if (savedValue) budgetInput.value = savedValue;

        if (savedType) {
            optionCards.forEach(card => {
                if (card.querySelector('.option-title').textContent === savedType) {
                    card.classList.add('selected');
                } else {
                    card.classList.remove('selected');
                }
            });
        }
    });
