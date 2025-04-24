<?php
// config.php
// Paramètres de connexion à la base de données

// Hôte de la base de données, ici 'localhost' pour un serveur local
$host     = 'localhost';

// Nom de la base de données à laquelle se connecter
$dbname   = 'frelliodb';

// Utilisateur MySQL, ici 'root' par défaut pour un serveur local
$username = 'root';

// Mot de passe pour l'utilisateur MySQL, ici vide, mais à adapter en fonction de ta configuration
$password = ''; 

// Tentative de connexion à la base de données
try {
    // Créer une instance PDO pour la connexion avec les paramètres fournis
    $pdo = new PDO(
      "mysql:host=$host;dbname=$dbname;charset=utf8mb4",  // Chaîne de connexion PDO avec spécification de l'encodage utf8mb4 pour une meilleure gestion des caractères
      $username,  // Nom d'utilisateur pour la connexion à la base de données
      $password,  // Mot de passe pour l'utilisateur
      [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]  // Configuration pour lancer des exceptions en cas d'erreurs
    );
} catch (PDOException $e) {
    // Si la connexion échoue, une exception est lancée et on affiche un message d'erreur
    die("Échec de la connexion DB : " . $e->getMessage());  // Afficher le message d'erreur de l'exception
}
?>
