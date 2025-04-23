
    // Langues ajoutées
    const addBtn = document.querySelector('.add-btn');
    const languageSection = document.querySelector('.language-section');

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const selects = languageSection.querySelectorAll('select');
        const language = selects[0].value;
        const level = selects[1].value;

        if (language === "Language" || level === "Language Level") {
            alert("Please select both a language and a level.");
            return;
        }

        const newEntry = document.createElement('div');
        newEntry.classList.add('language-entry');
        newEntry.textContent = `${language} - ${level}`;

        languageSection.appendChild(newEntry);

        // Reset les selects
        selects[0].selectedIndex = 0;
        selects[1].selectedIndex = 0;
    });

    // Compteur de caractères pour la description
    const description = document.querySelector('.form-textarea');
    const charCount = document.querySelector('.character-count');

    description.addEventListener('input', function () {
        const count = description.value.length;
        if (count < 150) {
            charCount.textContent = `Min. 150 Characters (${count}/150)`;
            charCount.style.color = 'red';
        } else {
            charCount.textContent = `Good! (${count} characters)`;
            charCount.style.color = 'green';
        }
    });

