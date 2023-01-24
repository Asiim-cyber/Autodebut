<?php
require ('../database/db.php');
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Formulaire de connexion en HTML & CSS - Frenchcoder</title>
  <link rel="stylesheet" href="./compte.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
</head>
<body>

  <!-- Navbar -->
  <div class="topnav" id="myTopnav">

    <div class="active">
        <img src="../assets/image/Auto-début_logo.png" alt="logo du site">
    </div>
    <a href="../index.php"><i class="fa fa-fw fa-home"></i>Menu</a>
    <a href="./mise_a_jour/"><i class="fa-solid fa-newspaper"></i>Nouveauté</a>
    <a href="./créateur/"><i class="fa-solid fa-user-tie"></i>Créateur</a>
    <a href="mailto:duchesne.guil@gmail.com"><i class="fa fa-fw fa-envelope"></i>Prendre Contact</a>
    <a href="javascript:void(0);" class="icon" onclick="navbarResponsive()">
        <i class="fa fa-bars"></i>
    </a>
  </div>

  <form method="POST" class="ContenuPage">
    <div class="haut_de_formulaire">
      <h1>Se connecter</h1>
    </div>
    
    <div>
      <input type="email" class="champ" name="mail" placeholder="Email" />
      <input type="password" class="champ" name="password" placeholder="Mot de passe">
    </div>
    
      <input type="submit" class="connexion" name="submit" value="Se connecter">
      <div class="noCompte">
        <a href="http://localhost/autoecole/register/index.php" class="inscription">Je n'ai pas de <span>compte</span>. Je m'en <span>crée</span> un.</a>
      </div>
  </form>
  <?php
  if (isset($_POST['submit']))
  {  
    if (isset($_POST['mail']) && !empty($_POST['mail']) && isset($_POST['password']) && !empty($_POST['password']))
    {
      $mail = htmlspecialchars($_POST['mail']);
      $password = sha1(htmlspecialchars($_POST['password']));

      $queryExist = $dbh->prepare("SELECT * FROM user WHERE mail = ? AND mdp = ?");
      $queryExist->execute([
        $mail,
        $password
      ]);

      if ($queryExist->rowCount() == 1) 
      {
        foreach($queryExist->fetchAll() as $dataUser) {
        }
        $_SESSION['id'] = $dataUser['id'];
        $_SESSION['name'] = $dataUser['nom'];
        header('Location: ../');
      }
      else {  
        print_r($password);
        echo "Aucun compte n'a été trouvé";
      }
    }
    else {
      echo "Veuillez compléter tout les champs";
    }
  }
?>
</body>
</html>