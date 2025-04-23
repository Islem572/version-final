<?php
// 1. Connexion à la base de données
$host = 'localhost';
$dbname = 'frelliodb';
$username = 'root';
$password = ''; // À adapter selon ton serveur

$conn = new mysqli($host, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Récupération des données du formulaire
$email = $_POST['email'];
$phone = $_POST['phone'];

// 3. Préparer et exécuter la requête SQL
$stmt = $conn->prepare("INSERT INTO user_security (email, phone_number) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $phone);

if ($stmt->execute()) {
    echo "Données enregistrées avec succès.";
} else {
    echo "Erreur : " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
