<?php
include 'database.php';
// Vérification que la méthode de requête est bien POST (soumission du formulaire)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $description = trim($_POST['description'] ?? '');
   $projectType = trim($_POST['projet_type'] ?? '');
// Vérification que les champs ne sont pas vides
   if (!empty($description) && !empty($projectType)) {
       $stmt = $conn->prepare("INSERT INTO client (description, projet_type) VALUES (?, ?)");
       $stmt->bind_param("ss", $description, $projectType);
// 'ss' signifie que les deux paramètres sont des chaînes de caractères
       if ($stmt->execute()) {
           echo "Compte créé avec succès.";
           // Envoi d'un e-mail de confirmation (facultatif)
       } else {
           echo "Erreur SQL : " . $stmt->error;
       }
// 'execute' exécute la requête préparée avec les paramètres liés
       $stmt->close();
       // Fermer la connexion à la base de données
   } else {
       echo "Veuillez remplir tous les champs.";
   }
// 'close' ferme la requête préparée
   $conn->close();
}
?>

        