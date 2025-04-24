<?php
// Inclusion du fichier de connexion à la base de données
include 'database.php';

// Vérifie si la requête HTTP est de type POST (formulaire soumis)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupération des données envoyées par le formulaire
    $First = $_POST['first_name'];
    $Last = $_POST['last_name'];
    $email = $_POST['email'];

    // Hachage sécurisé du mot de passe avant de le stocker
    $Password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $country = $_POST['country'];

    // Préparation de la requête SQL avec des paramètres pour éviter les injections SQL
    $stmt = $conn->prepare("INSERT INTO signup_freelancers (first_name, last_name, email, password, country) VALUES (?, ?, ?, ?, ?)");

    // Liaison des variables aux paramètres de la requête préparée
    $stmt->bind_param("sssss", $First, $Last, $email, $Password, $country);

    // Exécution de la requête
    if ($stmt->execute()) {
        // Si l'exécution est réussie, afficher un message de succès
        echo "Compte créé avec succès.";
    } else {
        // Sinon, afficher l'erreur
        echo "Erreur : " . $stmt->error;
    }

    // Fermeture de la requête préparée
    $stmt->close();

    // Fermeture de la connexion à la base de données
    $conn->close();
}
?>
