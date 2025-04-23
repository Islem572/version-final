<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $description = trim($_POST['description'] ?? '');
   $projectType = trim($_POST['projet_type'] ?? '');

   if (!empty($description) && !empty($projectType)) {
       $stmt = $conn->prepare("INSERT INTO client (description, projet_type) VALUES (?, ?)");
       $stmt->bind_param("ss", $description, $projectType);

       if ($stmt->execute()) {
           echo "Compte créé avec succès.";
       } else {
           echo "Erreur SQL : " . $stmt->error;
       }

       $stmt->close();
   } else {
       echo "Veuillez remplir tous les champs.";
   }

   $conn->close();
}
?>

        