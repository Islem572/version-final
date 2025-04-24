<?php
// Définition des informations de connexion à la base de données
$host = "localhost";        // Nom de l'hôte (serveur MySQL local)
$dbname = "frellio_db";     // Nom de la base de données
$username = "root";         // Nom d'utilisateur pour se connecter à MySQL
$password = "";             // Mot de passe pour l'utilisateur MySQL (vide ici, à ajuster selon ton environnement)

// Essayer de se connecter à la base de données avec les informations définies ci-dessus
try {
    // Création de l'instance PDO pour se connecter à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    
    // Définir les attributs pour gérer les erreurs
    // Ici, nous demandons à PDO de lancer des exceptions en cas d'erreur
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    // Si la connexion échoue, afficher un message d'erreur
    die("Connexion échouée : " . $e->getMessage());
}
?>
