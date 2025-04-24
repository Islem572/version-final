<?php
// Inclusion du fichier de connexion à la base de données
include 'database.php';

// Vérification que la méthode de requête est bien POST (soumission du formulaire)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupération des données envoyées via le formulaire
    $First = $_POST['First_name'];          // Prénom
    $Last = $_POST['Last_name'];            // Nom de famille
    $Workemailadress = $_POST['Workemailadress'];  // Adresse email professionnelle
    $Password = password_hash($_POST['Password'], PASSWORD_DEFAULT);  // Hachage du mot de passe pour plus de sécurité
    $country = $_POST['country'];          // Pays sélectionné dans le formulaire

    // Préparation de la requête SQL pour insérer les données dans la table "signup_customer"
    // On utilise des placeholders (?) pour éviter les injections SQL
    $stmt = $conn->prepare("INSERT INTO signup_customer (First_name, Last_name, Workemailadress, Password, country) VALUES (?, ?, ?, ?, ?)");
    
    // Liaison des paramètres avec les placeholders dans la requête SQL
    $stmt->bind_param("sssss", $First, $Last, $Workemailadress, $Password, $country);

    // Exécution de la requête SQL
    if ($stmt->execute()) {
        // Si l'exécution est réussie, afficher un message de succès
        echo "Compte créé avec succès.";
    } else {
        // Si une erreur se produit, afficher l'erreur
        echo "Erreur : " . $stmt->error;
    }

    // Fermeture de la requête préparée et de la connexion à la base de données
    $stmt->close();
    $conn->close();
}
?>
