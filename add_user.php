<?php
require 'config2.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Insertion de l'utilisateur
    $stmt = $pdo->prepare("INSERT INTO users (email) VALUES (:email)");
    $stmt->execute(['email' => $email]);

    echo "Utilisateur ajouté avec succès.";
}
?>
