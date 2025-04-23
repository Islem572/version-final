<?php
require 'db.php'; // Ton fichier de connexion à MySQL

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = $_POST['first_name'] ?? '';
    $lastName = $_POST['last_name'] ?? '';
    $displayName = $_POST['display_name'] ?? '';
    $description = $_POST['description'] ?? '';
    $language = $_POST['language'] ?? '';
    $languageLevel = $_POST['language_level'] ?? '';
    $profilePicture = 'profil.png'; // Si l'image est statique

    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, display_name, profile_picture, description, language, language_level) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $firstName, $lastName, $displayName, $profilePicture, $description, $language, $languageLevel);

    if ($stmt->execute()) {
        echo "Profil enregistré avec succès !";
    } else {
        echo "Erreur : " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
