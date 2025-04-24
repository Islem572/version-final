<?php
session_start();
require 'dbb.php'; // fichier de connexion à la base

// Assurer que l'utilisateur est connecté
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
// Vérifier si la requête est en POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id'];
    $occupation = $_POST['occupation'];
    $university_country = $_POST['university_country'];
    $university_name = $_POST['university_name'];
    $education_title = $_POST['education_title'];
    $education_major = $_POST['education_major'];
    $graduation_year = $_POST['graduation_year'];
    $personal_website = $_POST['personal_website'];
// Validation des données
    $sql = "INSERT INTO user_profile (
                user_id, occupation, university_country, university_name, education_title,
                education_major, graduation_year, personal_website
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    // Préparer la requête SQL
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssssis", $user_id, $occupation, $university_country, $university_name,
                      $education_title, $education_major, $graduation_year, $personal_website);
// Exécuter la requête
    if ($stmt->execute()) {
        header("Location: security.php"); // Prochaine étape
        exit();
        // Fermer la requête préparée
    } else {
        echo "Erreur : " . $stmt->error;
    }
}
?>
