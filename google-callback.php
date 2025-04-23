<?php
require 'config2.php';

// 1) Vérifie la présence du token ID
if (!isset($_POST['credential'])) {
    http_response_code(400);
    exit('Token manquant');
}

$id_token = $_POST['credential'];

// 2) Vérifie et décode le JWT via l’API Google
//    tu peux utiliser la librairie Google API Client ou valider manuellement la signature.
//    Ici un exemple simple avec file_get_contents (moins sécurisé en production).

$CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

// Appel à l’endpoint Google pour valider le token
$payload = json_decode(file_get_contents(
    'https://oauth2.googleapis.com/tokeninfo?id_token=' . $id_token
), true);

// 3) Contrôle que le token est bien pour ton Client ID
if ($payload['aud'] !== $CLIENT_ID) {
    http_response_code(401);
    exit('Client ID invalide');
}

// 4) Récupère les données utilisateur
$email     = $payload['email'];
$name      = $payload['name'] ?? null;
$google_id = $payload['sub'];
$avatar    = $payload['picture'] ?? null;

// 5) Insère ou met à jour en base
$sql = "INSERT INTO users (email, name, google_id, avatar_url, last_login)
        VALUES (:email, :name, :google_id, :avatar, NOW())
        ON DUPLICATE KEY UPDATE
          name       = VALUES(name),
          avatar_url = VALUES(avatar_url),
          last_login = NOW()";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':email'     => $email,
    ':name'      => $name,
    ':google_id' => $google_id,
    ':avatar'    => $avatar
]);

// 6) Démarre la session PHP et stocke l’ID interne
session_start();
$userId = $pdo->lastInsertId() ?: // si INSERT
          ( // sinon récupère l’id existant
            $pdo->query("SELECT id FROM users WHERE email = ". $pdo->quote($email))
                ->fetchColumn()
          );
$_SESSION['user_id'] = $userId;

// 7) Redirige vers le dashboard ou la page d’accueil
header('Location: dashboard.php');
exit;
