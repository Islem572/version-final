<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $First = $_POST['first_name'];
    $Last = $_POST['last_name'];
    $email= $_POST['email'];
    $Password = password_hash($_POST['password'], PASSWORD_DEFAULT); // hash
    $country = $_POST['country'];

    $stmt = $conn->prepare("INSERT INTO  signup_freelancers (first_name, last_name,email, password, country) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $First, $Last, $email, $Password, $country);

    if ($stmt->execute()) {
        echo "Compte créé avec succès.";
    } else {
        echo "Erreur : " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
