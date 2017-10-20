-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Ven 20 Octobre 2017 à 22:04
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tp1_webservice`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `contenu_message` varchar(10000) DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idConversation` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `messages`
--

INSERT INTO `messages` (`id`, `contenu_message`, `idUtilisateur`, `idConversation`) VALUES
(1, 'Salut', 1, 1),
(2, 'Hey le bot', 2, 1),
(3, 'Comment puis je vous aider', 1, 1),
(4, 'Tu m\'aides jamais', 2, 1),
(7, 'Salut Bobot, c\'est Cyril', 3, 2),
(6, 'pfff', 2, 1),
(8, 'Bonjour Cyril', 1, 2),
(9, 'Je m\'en vais, je n\'ai plus de batterie, déso Cyril', 1, 2),
(10, 'Oh dommage', 3, 2),
(11, 'Mais ne m\'oublie pas pour autant :( texte super long pour tester l\'affichage sur ce putain de site de merde quasi sans css qui m\'a pris le vendredi aprem et qui j\'espère sera compatible', 3, 2),
(12, 'Pas de problème', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`Nom`, `Prenom`, `idUser`) VALUES
('Bot', 'Bobot', 1),
('BARABE', 'Pierre', 2),
('BOURIEZ', 'Cyril', 3);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUtilisateur` (`idUtilisateur`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
