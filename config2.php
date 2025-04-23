<?php
// config.php
$host     = 'localhost';
$dbname   = 'frelliodb';
$username = 'root';
$password = ''; // à adapter

try {
    $pdo = new PDO(
      "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
      $username,
      $password,
      [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    die("Échec de la connexion DB : " . $e->getMessage());
}
