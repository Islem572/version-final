    // Exemple : récupérer un nom personnalisé si stocké précédemment
    const userName = localStorage.getItem("userName") || "Khawla";

    // Remplacer dynamiquement le nom dans le h1
    document.querySelector(".welcome h1").textContent = `Hey ${userName},`;

    // Option : animer légèrement l'affichage du message de bienvenue
    const welcomeMessage = document.querySelector(".welcome p");
    welcomeMessage.style.opacity = 0;
    setTimeout(() => {
        welcomeMessage.style.transition = "opacity 1s ease-in-out";
        welcomeMessage.style.opacity = 1;
    }, 300);

    // Tu peux aussi pré-remplir une variable si le nom vient d'une autre étape
    // localStorage.setItem("userName", "Khawla"); // À faire dans une étape précédente
