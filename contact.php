<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom= htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $sujet = htmlspecialchars($_POST['sujet']);
    $message = htmlspecialchars($_POST['message']);

    $stmt = $conn->prepare("INSERT INTO contact (nom, email, sujet, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nom, $email, $sujet, $message);

    if ($stmt->execute()) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur : " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
