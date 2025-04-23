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
        // Récupérer l'ID de l'utilisateur et le niveau d'expérience
        $user_id = 1; // Par exemple, tu peux récupérer l'ID de l'utilisateur connecté
        $experience_level = $_POST['experience_level'];

        // Préparer la requête d'insertion
        $stmt = $pdo->prepare("INSERT INTO user_experience (user_id, experience_level) VALUES (:user_id, :experience_level)");
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':experience_level', $experience_level);

        // Exécuter la requête
        $stmt->execute();
        
        // Rediriger vers la page suivante après l'enregistrement
        header("Location: page3.html");
        exit();
    }
} catch(PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
