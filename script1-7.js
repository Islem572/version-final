// This script is for a multi-step form with navigation buttons
// and a progress bar. It handles the functionality of the buttons and the progress bar.
document.querySelector('.btn.next').addEventListener('click', function() {
    // Logique pour passer à l'étape suivante (par exemple, changer la classe active)
    alert('Next step!');
});

document.querySelector('.btn.back').addEventListener('click', function() {
    // Logique pour revenir à l’étape précédente
    alert('Going back!');
});
