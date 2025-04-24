<?php
require 'db.php'; // Ton fichier de connexion à MySQL
// Assurez-vous que la connexion est établie
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = $_POST['first_name'] ?? '';
    $lastName = $_POST['last_name'] ?? '';
    $displayName = $_POST['display_name'] ?? '';
    $description = $_POST['description'] ?? '';
    $language = $_POST['language'] ?? '';
    $languageLevel = $_POST['language_level'] ?? '';
    $profilePicture = 'profil.png'; // Si l'image est statique
// Si tu veux gérer le téléchargement d'images, il faut ajouter un code pour ça
    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, display_name, profile_picture, description, language, language_level) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $firstName, $lastName, $displayName, $profilePicture, $description, $language, $languageLevel);
// 'sssssss' signifie que tous les paramètres sont des chaînes de caractères
    if ($stmt->execute()) {
        echo "Profil enregistré avec succès !";
    } else {
        echo "Erreur : " . $conn->error;
    }
// 'execute' exécute la requête préparée avec les paramètres liés
    $stmt->close();
    $conn->close();
}
?>
