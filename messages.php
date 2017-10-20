<html>
	<head>
		<title>Données du bot</title>
	</head>
	<body>
		<h1> Utilisateur : </h1>

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
			$sql1 = 'SELECT idConversation FROM Messages where idUtilisateur='.$_GET['id'];
			$reponse1 = $bdd->query($sql1);
			$id = $reponse1->fetch();

			$sql2 = 'SELECT * FROM Messages where idConversation='.$id[0];

			$reponse2 = $bdd->query($sql2);

			// On affiche chaque entrée une à une
			?>
			<div>

			<?php
			while ($donnees = $reponse2->fetch())
			{
		?>

		<table style = "width: 400px;">
				<tr>
					<?php if ($donnees[2] == 1) {?>
						<td style="color:blue" >
					<?php }
					else
					{?>
						<td style="color:red; text-align:right;" >
					<?php }
					echo ($donnees[1]);?></td>
				</tr>			
		</table>
		<?php } ?>
		<div>
	</body>
</html>