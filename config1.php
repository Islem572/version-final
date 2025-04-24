<?php
// Définir les informations de connexion à la base de données
$host = "localhost";        // L'hôte où se trouve la base de données (ici, c'est local)
$dbname = "frelliodb";      // Nom de la base de données à laquelle se connecter
$username = "root";         // Nom d'utilisateur pour se connecter à MySQL (utilisateur par défaut dans XAMPP/WAMP)
$password = "";             // Mot de passe pour l'utilisateur MySQL (vide ici, ajuste selon ton serveur)

// Tenter de se connecter à la base de données avec PDO
try {
    // Création de l'instance PDO pour la connexion
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    
    // Définir l'attribut de gestion des erreurs pour lancer des exceptions
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Si une erreur se produit pendant la connexion, afficher un message d'erreur
    die("Erreur de connexion : " . $e->getMessage());
}
?>
