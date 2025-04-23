<?php
require 'config.php';

$keyword = $_GET['q'] ?? '';

if (!empty($keyword)) {
    $stmt = $pdo->prepare("SELECT * FROM services WHERE title LIKE :keyword OR description LIKE :keyword");
    $stmt->execute(['keyword' => "%$keyword%"]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
} else {
    $results = [];
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Résultats de recherche</title>
</head>
<body>
  <h1>Résultats pour : <?= htmlspecialchars($keyword) ?></h1>

  <?php if (count($results) > 0): ?>
    <ul>
      <?php foreach ($results as $service): ?>
        <li>
          <h2><?= htmlspecialchars($service['title']) ?></h2>
          <p><?= htmlspecialchars($service['description']) ?></p>
          <strong><?= $service['price'] ?> €</strong>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php else: ?>
    <p>Aucun service trouvé.</p>
  <?php endif; ?>
</body>
</html>
