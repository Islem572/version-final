<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "frelliodb";

// Connexion à la base
$conn = new mysqli($host, $user, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}
?>
