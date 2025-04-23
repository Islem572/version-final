  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons sous peu.");
    this.reset(); // Réinitialiser le formulaire
  });
  const hireButtons = document.querySelectorAll(".hire-btn");

hireButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = btn.closest('.client-info').querySelector('h3').textContent;
    alert(`Vous avez choisi d'embaucher ${name}. Nous vous contacterons rapidement.`);
  });
});

