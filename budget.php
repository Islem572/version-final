<?php
try {
    $db = new PDO('mysql:host=localhost;dbname=frelliodb;charset=utf8', 'root', '');
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Nettoyage des inputs (important si $ dans le champ HTML)
    $hourlyRateFrom = (float) str_replace(['$', ','], '', $_POST['hourly_rate_from']);
    $hourlyRateTo = (float) str_replace(['$', ','], '', $_POST['hourly_rate_to']);

    if ($hourlyRateFrom > 0 && $hourlyRateTo >= $hourlyRateFrom) {
        $stmt = $db->prepare("INSERT INTO client_budget (hourly_rate_from, hourly_rate_to) VALUES (?, ?)");
        $stmt->execute([$hourlyRateFrom, $hourlyRateTo]);

        // Vérification
        $stmt = $db->query("SELECT * FROM client_budget ORDER BY id DESC LIMIT 1");
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        echo "Dernier enregistrement : De $" . $row['hourly_rate_from'] . " à $" . $row['hourly_rate_to'];

        // Redirection (désactive ça temporairement pour tester)
        // header('Location: budget2.php');
        // exit;
    } else {
        echo "Veuillez saisir des valeurs valides.";
    }
}
?>a
