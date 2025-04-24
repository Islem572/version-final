<?php
// verify_email.php
require 'config2.php';
// Assurez-vous que la connexion est établie
$email = $_POST['email'];
// Vérifiez que l'email est fourni  
$stmt = $pdo->prepare("UPDATE users SET email_verified = 1 WHERE email = :email");
$stmt->execute(['email' => $email]);
// Vérifiez si la mise à jour a réussi
echo "Email vérifié avec succès.";
?>
