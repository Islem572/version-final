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

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['auteur']) && isset($data['contenu'])) {
    $stmt = $pdo->prepare("INSERT INTO chatbot (auteur, contenu) VALUES (:auteur, :contenu)");
    $stmt->execute([
        'auteur' => $data['auteur'],
        'contenu' => $data['contenu']
    ]);
    echo json_encode(['status' => 'ok']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Données manquantes']);
}
?>
