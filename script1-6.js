// This script handles the functionality of a multi-step form with navigation buttons and a progress bar.
  const buttons = document.querySelectorAll(".step-action");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`Redirecting to: ${btn.textContent}`);
    });
  });

