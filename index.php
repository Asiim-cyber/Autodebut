<?php
session_start();
?>
<!-- 
QUI ? DUCHESNE Guillaume
QUAND ? derniere modification le 05/06/22
QUOI ? HTML DE LA PAGE PRINICPAL (ACCEUIL)
-->
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- lien referencer -->
    <link rel="stylesheet" href="./assets/css/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">

    <!-- titre de la page -->
    <title>Auto-début - Acceuil</title>
</head>

<!-- code de la page html -->
<body>

    <!-- Navbar -->
    <div class="topnav" id="myTopnav">

        <div class="active">
            <img src="./assets/image/Auto-début_logo.png" alt="logo du site">
        </div>
        
        <a href="./mise_a_jour/"><i class="fa-solid fa-newspaper"></i>Nouveauté</a>
        <a href="./créateur/"><i class="fa-solid fa-user-tie"></i>Créateur</a>
        <a href="mailto:duchesne.guil@gmail.com"><i class="fa fa-fw fa-envelope"></i>Prendre Contact</a>
        <?php
        if (empty($_SESSION['id']))
        {
            ?>
        <a class="login"  href="./register/"><i class="fa-solid fa-circle-user"></i>Connexion</a>
        <?php
        } else
        {
            ?>
        <a class="login"  href="./register/logout.php"><i class="fa-solid fa-circle-user"></i>Déconnexion</a>
        <?php
        }
        ?>
        <a href="javascript:void(0);" class="icon" onclick="navbarResponsive()">
            <i class="fa fa-bars"></i>
        </a>
    </div>

    <!-- div qui contient toute la page -->
    <div class="tout">
            <!-- div qui contient le titre de la page centrer -->
            <div id="center">
                <div class="title"></div>
                <div class="explication">
                    Commencer sur la route est parfois compliqué, Auto-début vous permettera de pouvoir :
                    
                    <div class="bold-text">D'acquérir des nouvelles <titleRed>connaissances</titleRed>, tester vos <titleRed>capacités</titleRed>, pour ensuite passer votre <titleRed>examen théorique</titleRed></div>
                </div>

                <!-- bouton qui va scroll vers le bas de la page (découvrir)-->
                <div class="discover-btn-container">
                    <a href="./théorique/">
                        <div class="discover-btn">
                            Découvrir
                        </div>
                    </a>
                </div>

                <div class="text-danger">
                    Attention ! Ce site n'est pas responsive, utilisé de préference un écran d'ordinateur.
                </div>
            </div>

            <!-- div qui contient les 3 boutons de la page -->
            <!-- <div id="fin_de_page"> -->

                <!-- block qui contient tout le contenu du théorique -->
                <!-- <div class="permis"> -->
                    <!-- premier bouton -->
                    <!-- <div class="bouton1">
                        <a href="./théorique/">
                            <button class="m-auto variable-button h4" data-text="Permis théorique" data-texthover="Commencer"></button>
                        </a>
                    </div>

                    <div class="text-content">
                        <b>Apprends</b> pour découvrir les différents chapitre que tu devras connaître.
                        <br>
                        <br>
                        <b>Entraine-toi</b> pour te préparer au mieux a l'examen théorique avec des exercices et des simulations d'examen.
                        <br>
                        <br>
                        <b>Prends rendez-vous</b> pour l'examen théorique avec les différentes auto-école classées du plus dur au plus facile pour pouvoir réussir
                    </div>
                </div>
            </div> -->

        <!-- Fin de la page qui contient toute les information légale du site -->
        <div class="dessousDePage">
            <div class="containerDessousdepage">
                <a href="#">Politique de confidentialité</a>
                <a href="#">Condition d'utilisation</a>
                <a href="#">Mentions légales</a>
            </div>
        </div>
    </div>

    <!-- lien qui donne la référence au javascript utilisé -->
    <script src="./assets/js/index.js"></script>

</body>

</html>