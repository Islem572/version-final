<?php
$host = 'localhost';
$db = 'frelliodb';
$user = 'root';
$pass = ''; // mot de passe si tu en as un

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
// Vérifie si la requête est en POST
$data = json_decode(file_get_contents("php://input"), true);
// Vérifie si les données sont valides
if (isset($data['auteur']) && isset($data['contenu'])) {
    $stmt = $pdo->prepare("INSERT INTO chatbot (auteur, contenu) VALUES (:auteur, :contenu)");
    $stmt->execute([
        'auteur' => $data['auteur'],
        'contenu' => $data['contenu']
    ]);
    echo json_encode(['status' => 'ok']);
    // Envoie un message de succès
} else {
    echo json_encode(['status' => 'error', 'message' => 'Données manquantes']);
}
?>
