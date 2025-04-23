<?php
session_start();
require 'db.php'; // fichier pour se connecter à la base de données

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["username"]); // Ici on suppose que c'est un email

    // Préparation de la requête SQL
    $sql = "SELECT * FROM users WHERE email = ? LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Vérifier si l'utilisateur existe
    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();

        // Exemple sans mot de passe pour l'instant :
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $user['email'];

        // Redirection vers tableau de bord ou autre
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Utilisateur non trouvé.";
    }
}
?>
