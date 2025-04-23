<?php
$host = "localhost";        // Adresse du serveur
$username = "root";         // Nom d'utilisateur MySQL (par défaut "root" sur XAMPP)
$password = "";             // Mot de passe (souvent vide sur XAMPP)
$database = "frelliodb";   // Nom de ta base de données

// Connexion à MySQL avec mysqli orienté objet
$conn = new mysqli($host, $username, $password, $database);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}

// Facultatif : définir l'encodage en UTF-8
$conn->set_charset("utf8");
?>
