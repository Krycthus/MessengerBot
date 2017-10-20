
<html>
	<head>
		<title>Données du bot</title>
	</head>
<body>
	<h1> Liste des utilisateurs </h1>


<?php
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=localhost;dbname=TP1_WEBSERVICE;charset=utf8', 'root', '');
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

// Si tout va bien, on peut continuer

// On récupère tout le contenu de la table jeux_video
$reponse = $bdd->query('SELECT * FROM Utilisateur where idUser <> 1');
// On affiche chaque entrée une à une
while ($donnees = $reponse->fetch())
{
?>


<table>
		<tr>
			<td><a href="http://localhost/TP1_WEBSERVICE/messages?id=<?php echo $donnees[2] ?>"><?php echo ($donnees[0] . ' ' . $donnees[1] . ' ' . $donnees[2]);?></a></td>
		</tr>
	<?php } ?>
</table>


</body>
</html>