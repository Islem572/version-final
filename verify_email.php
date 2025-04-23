<?php
require 'config2.php';

$email = $_POST['email'];

$stmt = $pdo->prepare("UPDATE users SET email_verified = 1 WHERE email = :email");
$stmt->execute(['email' => $email]);

echo "Email vérifié avec succès.";
?>
