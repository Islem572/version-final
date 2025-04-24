<?php
// Paramètres de connexion à la base de données
$host = 'localhost'; // Hôte de la base de données
$dbname = 'frelliodb'; // Nom de la base de données
$username = 'root'; // Nom d'utilisateur pour la connexion MySQL
$password = ''; // Mot de passe pour la connexion MySQL (vide ici, à adapter)

// Tentative de connexion à la base de données avec PDO
try {
    // Création d'une nouvelle instance PDO pour se connecter à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    
    // Paramétrer PDO pour gérer les erreurs de manière exceptionnelle
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Si une erreur de connexion se produit, afficher un message d'erreur
    die("Erreur de connexion : " . $e->getMessage());
}

// Vérifier si la méthode de la requête est POST (formulaire soumis)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire avec une valeur par défaut vide si le champ n'est pas défini
    $name = $_POST['name'] ?? ''; // Nom
    $email = $_POST['email'] ?? ''; // Email
    $subject = $_POST['subject'] ?? ''; // Sujet du message
    $message = $_POST['message'] ?? ''; // Contenu du message

    // Vérifier si tous les champs sont remplis
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        // Préparer la requête SQL pour insérer les données dans la table "messages"
        $stmt = $pdo->prepare("INSERT INTO messages (nom, email, sujet, message) VALUES (?, ?, ?, ?)");
        
        // Exécuter la requête avec les valeurs envoyées par le formulaire
        $stmt->execute([$name, $email, $subject, $message]);

        // Afficher un message de succès après l'insertion
        echo "Message envoyé avec succès !";
    } else {
        // Si un ou plusieurs champs sont vides, afficher un message d'erreur
        echo "Veuillez remplir tous les champs.";
    }
}
?>
