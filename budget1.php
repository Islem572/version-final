<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=frelliodb", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_POST['rate_type']) && isset($_POST['budget'])) {
        $rate_type = $_POST['rate_type'];
        $budget = floatval($_POST['budget']);

        $stmt = $pdo->prepare("INSERT INTO client_budget1 (rate_type, budget) VALUES (?, ?)");
        $stmt->execute([$rate_type, $budget]);

        echo "Données enregistrées avec succès !";
    } else {
        echo "Veuillez remplir tous les champs.";
    }
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
