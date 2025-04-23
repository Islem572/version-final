<?php 
// Tentative de connexion à la base de données avec PDO
try {
    $db = new PDO('mysql:host=localhost;dbname=frelliodb;charset=utf8', 'root', '');
} catch (PDOException $e) {
    // En cas d'erreur de connexion, afficher le message d'erreur et arrêter le script
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Vérifie si le formulaire a été soumis en méthode POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Nettoyage des champs pour retirer les $ et les virgules si présents
    $hourlyRateFrom = (float) str_replace(['$', ','], '', $_POST['hourly_rate_from']);
    $hourlyRateTo = (float) str_replace(['$', ','], '', $_POST['hourly_rate_to']);

    // Vérifie que les valeurs sont valides (from > 0 et to >= from)
    if ($hourlyRateFrom > 0 && $hourlyRateTo >= $hourlyRateFrom) {
        // Prépare la requête d'insertion avec des valeurs sécurisées (requête préparée)
        $stmt = $db->prepare("INSERT INTO client_budget (hourly_rate_from, hourly_rate_to) VALUES (?, ?)");
        $stmt->execute([$hourlyRateFrom, $hourlyRateTo]);

        // Récupère le dernier enregistrement inséré pour confirmation
        $stmt = $db->query("SELECT * FROM client_budget ORDER BY id DESC LIMIT 1");
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // Affiche un message avec les valeurs saisies
        echo "Dernier enregistrement : De $" . $row['hourly_rate_from'] . " à $" . $row['hourly_rate_to'];

        // Redirection vers une autre page (décommenter une fois le test terminé)
        // header('Location: budget2.php');
        // exit;
    } else {
        // Affiche un message d'erreur si les valeurs ne sont pas valides
        echo "Veuillez saisir des valeurs valides.";
    }
}
?>
