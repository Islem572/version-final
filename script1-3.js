  const input = document.querySelector('.main-input');

  // Charger la valeur sauvegardée
  window.addEventListener("DOMContentLoaded", () => {
    const savedDescription = localStorage.getItem("projectDescription");
    if (savedDescription) {
      input.value = savedDescription;
    }
  });

  // Sauvegarder la saisie à chaque changement
  input.addEventListener("input", () => {
    localStorage.setItem("projectDescription", input.value);
  });
