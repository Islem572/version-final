  // Enregistrer le nom dans localStorage
  localStorage.setItem("username", "Aouadi");
  const name = localStorage.getItem("username");
  if (name) {
    document.querySelector('.greeting').textContent = `Welcome, ${name}!`;
  }
