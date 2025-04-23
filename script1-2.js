  const rateCards = document.querySelectorAll('.rate-card');
  const priceInputs = document.querySelectorAll('.price-input');

  // Gestion du clic sur un type de tarif
  rateCards.forEach(card => {
    card.addEventListener('click', () => {
      rateCards.forEach(c => {
        c.classList.remove('selected');
        c.classList.add('not-selected');
      });
      card.classList.add('selected');
      card.classList.remove('not-selected');

      const selectedRateType = card.querySelector('.rate-title').textContent;
      localStorage.setItem("rateType", selectedRateType);
    });
  });

  // Mise à jour des valeurs de prix à chaque saisie
  priceInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      const key = index === 0 ? "rateFrom" : "rateTo";
      localStorage.setItem(key, input.value);
    });
  });

  // Chargement des valeurs sauvegardées
  window.addEventListener("DOMContentLoaded", () => {
    const savedType = localStorage.getItem("rateType");
    const savedFrom = localStorage.getItem("rateFrom");
    const savedTo = localStorage.getItem("rateTo");

    if (savedFrom) priceInputs[0].value = savedFrom;
    if (savedTo) priceInputs[1].value = savedTo;

    if (savedType) {
      rateCards.forEach(card => {
        const type = card.querySelector('.rate-title').textContent;
        if (type === savedType) {
          card.classList.add('selected');
          card.classList.remove('not-selected');
        } else {
          card.classList.remove('selected');
          card.classList.add('not-selected');
        }
      });
    }
  });
