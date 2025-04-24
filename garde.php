<?php
// Inclure la configuration de la base de données (connexion à la base de données)
require 'config.php';

// Récupérer le mot-clé de la recherche depuis la requête GET (si disponible)
$keyword = $_GET['q'] ?? ''; // Si 'q' n'est pas défini, la variable $keyword sera une chaîne vide.

// Si un mot-clé est fourni, on effectue une recherche dans la base de données
if (!empty($keyword)) {
    // Préparer la requête SQL pour rechercher dans les colonnes 'title' et 'description' de la table 'services'.
    // On utilise LIKE pour chercher des correspondances partielles avec le mot-clé.
    $stmt = $pdo->prepare("SELECT * FROM services WHERE title LIKE :keyword OR description LIKE :keyword");
    
    // Exécuter la requête avec le mot-clé. Le mot-clé est encadré de '%' pour effectuer une recherche partielle.
    $stmt->execute(['keyword' => "%$keyword%"]);
    
    // Récupérer tous les résultats sous forme de tableau associatif.
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
} else {
    // Si aucun mot-clé n'est fourni, initialiser $results comme un tableau vide.
    $results = [];
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <!-- Définir l'encodage des caractères -->
  <meta charset="UTF-8">
  <!-- Titre de la page -->
  <title>Résultats de recherche</title>
</head>
<body>
  <!-- Affichage du mot-clé recherché -->
  <h1>Résultats pour : <?= htmlspecialchars($keyword) ?></h1>

  <!-- Vérification si des résultats ont été trouvés -->
  <?php if (count($results) > 0): ?>
    <ul>
      <!-- Boucle à travers les résultats et affichage de chaque service -->
      <?php foreach ($results as $service): ?>
        <li>
          <!-- Affichage du titre du service -->
          <h2><?= htmlspecialchars($service['title']) ?></h2>
          <!-- Affichage de la description du service -->
          <p><?= htmlspecialchars($service['description']) ?></p>
          <!-- Affichage du prix du service -->
          <strong><?= $service['price'] ?> €</strong>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php else: ?>
    <!-- Message affiché si aucun service n'a été trouvé -->
    <p>Aucun service trouvé.</p>
  <?php endif; ?>
</body>
</html>
