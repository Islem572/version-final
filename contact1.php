<?php
$host = 'localhost';
$dbname = 'frelliodb';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        $stmt = $pdo->prepare("INSERT INTO messages (nom, email, sujet, message) VALUES (?, ?, ?, ?)");
        $stmt->execute([$name, $email, $subject, $message]);

        echo "Message envoyé avec succès !";
    } else {
        echo "Veuillez remplir tous les champs.";
    }
}
?>
