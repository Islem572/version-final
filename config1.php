<?php
$host = "localhost";
$dbname = "frelliodb";
$username = "root"; // adapte selon ton serveur
$password = ""; // mot de passe si tu en as un

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>
