    const addPhoneBtn = document.querySelector('.field-group .btn:not(.btn-verified)');
    const phoneField = document.querySelector('.field-group:nth-of-type(2) .field-action');
    const nextBtn = document.querySelector('footer .btn-next');

    let phoneVerified = false;

    addPhoneBtn.addEventListener('click', function () {
        const phoneNumber = prompt("Please enter your phone number:");
        if (phoneNumber && phoneNumber.trim().length >= 6) {
            // Supprimer le bouton "Add Phone Number"
            addPhoneBtn.remove();

            // Ajouter un bouton "Verified"
            const verifiedBtn = document.createElement("button");
            verifiedBtn.classList.add("btn", "btn-verified");
            verifiedBtn.textContent = "Verified";

            phoneField.appendChild(verifiedBtn);
            phoneVerified = true;

            // Optionnel : sauvegarder en localStorage
            localStorage.setItem('phoneNumber', phoneNumber);
        } else {
            alert("Invalid phone number. Please try again.");
        }
    });

    // Bloquer "Next" si pas de numéro
    nextBtn.addEventListener('click', function (e) {
        if (!phoneVerified) {
            e.preventDefault();
            alert("Please verify your phone number before continuing.");
        }
    });
