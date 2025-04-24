<?php
// Bloc "try" pour capturer les erreurs potentielles lors de la connexion ou de l'exécution
try {
    // Connexion à la base de données MySQL avec PDO (base de données "frelliodb")
    $pdo = new PDO("mysql:host=localhost;dbname=frelliodb", "root", "");
    
    // Activation du mode d'erreur pour afficher les exceptions PDO en cas de problème
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérifie si les champs "rate_type" et "budget" ont bien été envoyés via POST
    if (isset($_POST['rate_type']) && isset($_POST['budget'])) {

        // Récupère les données depuis le formulaire
        $rate_type = $_POST['rate_type'];
        $budget = floatval($_POST['budget']); // Conversion en nombre flottant pour éviter les injections

        // Préparation de la requête SQL pour insérer les données dans la table "client_budget1"
        $stmt = $pdo->prepare("INSERT INTO client_budget1 (rate_type, budget) VALUES (?, ?)");

        // Exécution de la requête avec les données en toute sécurité (paramètres liés)
        $stmt->execute([$rate_type, $budget]);

        // Message de confirmation à l'utilisateur
        echo "Données enregistrées avec succès !";
    } else {
        // Message d'erreur si les champs du formulaire ne sont pas remplis
        echo "Veuillez remplir tous les champs.";
    }

// Capture et affichage des erreurs liées à la base de données
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
