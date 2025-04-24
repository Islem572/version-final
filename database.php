<?php
// Définition des informations de connexion à la base de données
$db_server = "localhost";   // L'adresse du serveur de base de données
$db_username = "root";      // Le nom d'utilisateur pour se connecter à la base de données
$db_password = "";          // Le mot de passe associé à l'utilisateur
$db_name = "frelliodb";     // Le nom de la base de données à laquelle se connecter

$conn = ""; // Variable pour stocker la connexion à la base de données

// Tentative de connexion à la base de données avec les informations définies ci-dessus
try {
    // Connexion à la base de données via la fonction mysqli_connect
    $conn = mysqli_connect($db_server, $db_username, $db_password, $db_name);
}
catch (mysqli_sql_exception $e) {
    // En cas d'échec de la connexion, afficher un message d'erreur
    echo "Connection failed: " . $e->getMessage();  // Affichage de l'erreur si la connexion échoue
}

// Vérification si la connexion a réussi
if ($conn) {
    // Si la connexion est établie avec succès, afficher un message de succès
    echo "You are connected to the database";
}
?>
