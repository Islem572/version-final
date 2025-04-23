<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $First = $_POST['First_name'];
    $Last = $_POST['Last_name'];
    $Workemailadress= $_POST['Workemailadress'];
    $Password = password_hash($_POST['Password'], PASSWORD_DEFAULT); // hash
    $country = $_POST['country'];

    $stmt = $conn->prepare("INSERT INTO  signup_customer (First_name, Last_name,Workemailadress, Password, country) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $First, $Last, $Workemailadress, $Password, $country);

    if ($stmt->execute()) {
        echo "Compte créé avec succès.";
    } else {
        echo "Erreur : " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
