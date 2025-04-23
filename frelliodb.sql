-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 23 avr. 2025 à 15:28
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `frelliodb`
--

-- --------------------------------------------------------

--
-- Structure de la table `chatbot`
--

CREATE TABLE `chatbot` (
  `id` int(11) NOT NULL,
  `auteur` enum('utilisateur','bot') NOT NULL,
  `contenu` text NOT NULL,
  `date_heure` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `description` text NOT NULL,
  `projet_type` varchar(150) NOT NULL,
  `date_inscription` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`description`, `projet_type`, `date_inscription`, `id`) VALUES
('i want to find someone loves me', '', '2025-04-20 12:07:33', 1),
('jolkpohuoj', 'BARA BARKA AAMALHA', '2025-04-20 12:30:36', 2);

-- --------------------------------------------------------

--
-- Structure de la table `client_budget`
--

CREATE TABLE `client_budget` (
  `id` int(11) NOT NULL,
  `hourly_rate_from` decimal(10,2) NOT NULL,
  `hourly_rate_to` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `client_budget`
--

INSERT INTO `client_budget` (`id`, `hourly_rate_from`, `hourly_rate_to`, `created_at`) VALUES
(1, 15.00, 30.00, '2025-04-20 14:31:44');

-- --------------------------------------------------------

--
-- Structure de la table `client_budget1`
--

CREATE TABLE `client_budget1` (
  `id` int(11) NOT NULL,
  `rate_type` varchar(50) NOT NULL,
  `budget` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `client_budget1`
--

INSERT INTO `client_budget1` (`id`, `rate_type`, `budget`, `created_at`) VALUES
(1, 'hourly_rate', 150.00, '2025-04-20 14:57:14');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sujet` varchar(150) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `nom`, `email`, `sujet`, `message`) VALUES
(0, 'ali', 'azizy7ebkhawla@gmail.com', 'trhfkl;ms:d', 'tyhfrenzlk');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `sujet` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date_envoi` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `nom`, `email`, `sujet`, `message`, `date_envoi`) VALUES
(1, 'nada', 'aliboughanmi@gmailcom', 'maw3ed zaweej', 'nchala 3la 9rib le 1ere aut', '2025-04-22 21:18:22'),
(2, 'khawla', 'azizy7ebkhawla@gmail.com', 'maw3ed zaweej', 'l3a9ba llfar7a lknira', '2025-04-22 21:19:08');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `signup_customer`
--

CREATE TABLE `signup_customer` (
  `id` int(100) NOT NULL,
  `First_name` varchar(100) NOT NULL,
  `Last_name` varchar(100) NOT NULL,
  `Workemailadress` varchar(150) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
  `Createdat` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `signup_customer`
--

INSERT INTO `signup_customer` (`id`, `First_name`, `Last_name`, `Workemailadress`, `Password`, `country`, `Createdat`) VALUES
(0, 'oussema', 'islem', 'bizerte@gmail.com', '$2y$10$H6LEXEm95J30IjgxbE0T8.j/fmIMwtEHRTwRI1..LEpSWreQF6GyG', 'Bizerte', '2025-04-19 23:21:48');

-- --------------------------------------------------------

--
-- Structure de la table `signup_freelancers`
--

CREATE TABLE `signup_freelancers` (
  `id` int(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
  `createdat` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `google_id` varchar(255) DEFAULT NULL,
  `avatar_url` varchar(512) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `last_login` timestamp NULL DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `display_name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `language_level` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users1`
--

CREATE TABLE `users1` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `display_name` varchar(100) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `language_level` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users2`
--

CREATE TABLE `users2` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified` tinyint(1) DEFAULT 0,
  `profile_completed` tinyint(1) DEFAULT 0,
  `first_bid_placed` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user_experience`
--

CREATE TABLE `user_experience` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `experience_level` enum('brand_new','some_experience','expert') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user_experience`
--

INSERT INTO `user_experience` (`id`, `user_id`, `experience_level`, `timestamp`) VALUES
(1, 1, 'brand_new', '2025-04-20 15:36:37');

-- --------------------------------------------------------

--
-- Structure de la table `user_goals`
--

CREATE TABLE `user_goals` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `goal` enum('earn_main_income','make_money_side','get_experience','no_goal') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user_goals`
--

INSERT INTO `user_goals` (`id`, `user_id`, `goal`, `timestamp`) VALUES
(1, 1, 'make_money_side', '2025-04-20 15:49:19'),
(2, 1, 'get_experience', '2025-04-20 15:51:16'),
(3, 1, 'get_experience', '2025-04-20 15:58:57');

-- --------------------------------------------------------

--
-- Structure de la table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `university_country` varchar(100) DEFAULT NULL,
  `university_name` varchar(150) DEFAULT NULL,
  `education_title` varchar(100) DEFAULT NULL,
  `education_major` varchar(100) DEFAULT NULL,
  `graduation_year` year(4) DEFAULT NULL,
  `personal_website` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user_security`
--

CREATE TABLE `user_security` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user_security`
--

INSERT INTO `user_security` (`id`, `email`, `phone_number`, `created_at`) VALUES
(1, 'aoussemrajeleslem@gmail.com', '27 795 630', '2025-04-21 22:42:17'),
(2, 'aoussemrajeleslem@gmail.com', '27 795 630', '2025-04-21 22:42:23'),
(3, 'hammamiislem41@gmail.com', '27795630', '2025-04-21 22:49:39'),
(4, 'hammamiislem41@gmail.com', '27795630', '2025-04-21 22:49:43');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `client_budget`
--
ALTER TABLE `client_budget`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hourly_rate_from` (`hourly_rate_from`);

--
-- Index pour la table `client_budget1`
--
ALTER TABLE `client_budget1`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `signup_customer`
--
ALTER TABLE `signup_customer`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `users1`
--
ALTER TABLE `users1`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users2`
--
ALTER TABLE `users2`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_experience`
--
ALTER TABLE `user_experience`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_goals`
--
ALTER TABLE `user_goals`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_security`
--
ALTER TABLE `user_security`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `client_budget`
--
ALTER TABLE `client_budget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `client_budget1`
--
ALTER TABLE `client_budget1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users1`
--
ALTER TABLE `users1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users2`
--
ALTER TABLE `users2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user_experience`
--
ALTER TABLE `user_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user_goals`
--
ALTER TABLE `user_goals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user_security`
--
ALTER TABLE `user_security`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
