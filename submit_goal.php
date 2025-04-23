<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root"; // Par défaut pour XAMPP
$password = "";
$dbname = "frelliodb"; // Nom de la base de données

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérification si le formulaire a été soumis
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Récupérer l'ID de l'utilisateur et l'objectif
        $user_id = 1; // Par exemple, l'ID de l'utilisateur connecté (tu peux le gérer via la session)
        $goal = $_POST['goal'];

        // Préparer la requête d'insertion
        $stmt = $pdo->prepare("INSERT INTO user_goals (user_id, goal) VALUES (:user_id, :goal)");
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':goal', $goal);

        // Exécuter la requête
        $stmt->execute();

        // Rediriger vers la page suivante après l'enregistrement
        header("Location: page4.html");
        exit();
    }
} catch(PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
