<?php
require ('../database/db.php');
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Lien ajouter au fichier -->
    <link rel="stylesheet" href="./assets/css/index.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    <title>Auto-début - Page de connexion</title>
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

    <form  method="post">
        <div class="haut_de_formulaire">
            <div class="title">Créer votre compte</div>
            <div class="subtitle">de maniére trés facile et rapide</div>
        </div>
        <div class="infoPerso">
            <div>
                <input type="text" class="champPerso" id="name" name="surname" placeholder="Nom de famille">
            </div>
            <div>
                <input type="text" class="champPerso" id="name" name="forename" placeholder="Prénom">
            </div>
        </div>
        <div>
            <input type="email" class="champ" id="mail" name="user_mail" placeholder="Adresse e-mail">
        </div>
        <div>
            <input type="password" class="champ" id="password" name="password" placeholder="Mot de passe">
        </div>
        <div>Date de naissance</div>
        <div>
            <input type="date" class="champ" id="dateNaissance" name="datedenaissance" placeholder="Date de naissance">
        </div>

        
        <div class="contenuInscription">
            En cliquant sur S’inscrire, vous acceptez nos <a href="##">Conditions générales.</a>
            Découvrez comment nous recueillons, utilisons et partageons vos données en lisant notre <a href="##">Politique de confidentialité</a> et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies.
            Vous recevrez peut-être des notifications par mail de notre part et vous pouvez à tout moment vous désabonner.
        </div>
        <div class="infoLogin">
            <div>
                <input type="submit" class="inscription" value="S'inscrire" name="submit"></input>  
            </div>
            <div>
                <a href="http://localhost/autoecole/login/compte.php" id="lien_formulaire">J'ai déja un compte</a>
            </div>
        </div>
    </form>
    <?php
    if (isset($_POST['submit'])){   
        if (isset($_POST['surname'])){
            if (isset($_POST['forename'])){
                if (isset($_POST['user_mail'])){
                    if (isset($_POST['password'])){
                        if (isset($_POST['datedenaissance'])){
                        $surname = htmlspecialchars($_POST['surname']);
                        $forename = htmlspecialchars($_POST['forename']);
                        $mail = htmlspecialchars($_POST['user_mail']);
                        $mdp = htmlspecialchars($_POST['password']);
                        $date = htmlspecialchars($_POST['datedenaissance']);
                        $query = $dbh->prepare("SELECT * FROM user WHERE mail = ?");
                        $query->execute([
                            $mail
                        ]);
                        if($query->rowCount() == 0){
                            $query = $dbh->prepare("INSERT INTO user (nom, prenom, mail, mdp, ddn) VALUES (?, ?, ?, ?, ?)");
                            $query->execute([
                                $surname,
                                $forename,
                                $mail,
                                sha1($mdp),
                                $date
                            ]);
                        }
                    }
                }
                }
            }
        }
    }
    
    ?>
    
</body>
</html>