<?php
// Inclure la connexion à la base de données depuis le fichier 'database.php'
include 'database.php';

// Vérifier si la requête HTTP est de type POST (lorsque le formulaire est soumis)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer les données envoyées par le formulaire et les sécuriser contre les attaques XSS avec htmlspecialchars
    $nom = htmlspecialchars($_POST['nom']); 
    $email = htmlspecialchars($_POST['email']);
    $sujet = htmlspecialchars($_POST['sujet']);
    $message = htmlspecialchars($_POST['message']);

    // Préparer la requête SQL pour insérer les données dans la table "contact"
    $stmt = $conn->prepare("INSERT INTO contact (nom, email, sujet, message) VALUES (?, ?, ?, ?)");

    // Lier les paramètres à la requête préparée
    $stmt->bind_param("ssss", $nom, $email, $sujet, $message); // 'ssss' signifie que tous les paramètres sont des chaînes de caractères

    // Exécuter la requête préparée
    if ($stmt->execute()) {
        // Si l'exécution est réussie, afficher un message de confirmation
        echo "Message envoyé avec succès !";
    } else {
        // Si une erreur survient lors de l'exécution de la requête, afficher l'erreur
        echo "Erreur : " . $stmt->error;
    }

    // Fermer la requête préparée
    $stmt->close();
    
    // Fermer la connexion à la base de données
    $conn->close();
}
?>
