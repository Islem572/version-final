<?php
// Définition des informations de connexion à la base de données
$host = "localhost";   // L'adresse du serveur de la base de données (généralement 'localhost' si local)
$user = "root";        // Le nom d'utilisateur pour se connecter à la base de données
$password = "";        // Le mot de passe associé à l'utilisateur (vide par défaut pour "root")
$dbname = "frelliodb"; // Le nom de la base de données à laquelle se connecter

// Connexion à la base de données en utilisant l'objet mysqli
$conn = new mysqli($host, $user, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    // Si la connexion échoue, le programme termine et affiche l'erreur
    die("Erreur de connexion : " . $conn->connect_error); // 'connect_error' est une propriété de l'objet mysqli
}

// Si la connexion réussie, aucun message n'est affiché, mais la connexion est active
?>
