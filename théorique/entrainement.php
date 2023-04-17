<!--
QUI ? DUCHESNE GUILLAUME
QUAND ? 17/09/2022
QUOI ? PAGE D'ACCEUIL DE L'ONGLET ENTRAINEMENT 
-->

<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- lien -->
    <link rel="stylesheet" href="./assets/css/entrainement.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">


    <!-- en-tête doc -->
    <title>Auto-début - Entrainement</title>
</head>
<body>

    <!-- Navbar au dessus de la page -->
    <div class="topnav" id="myTopnav">
        <div class="active"><img class="logo" src="../assets/image/Auto-début_logo.png" alt="logo du site"></div>
        <a href="../index.php"><i class="fa fa-fw fa-home"></i>Menu</a>
        <a href="../mise_a_jour/"><i class="fa-solid fa-newspaper"></i>Nouveauté</a>
        <a href="../créateur/"><i class="fa-solid fa-user-tie"></i>Créateur</a>
        <a href="mailto:duchesne.guil@gmail.com"><i class="fa fa-fw fa-envelope"></i>Prendre contact</a>
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

    <div class="rainbow">
        <!-- Titre de la page -->
        <div class="title">
            <!-- Premiere lettre du titre -->
            <div class="maj-letters">E</div>
            <div class="letters">
                ntrainement
            </div>
        </div>
    </div>

    <!-- description de la page -->
    <div class="description">
        Ici, vous trouverez les différents questionnaire pour vous entrainez.
    </div>

    <!-- block qui contient tout les boutons de la page -->
    <div class="main">

        <div class="container">
            <a href="./entrainement/quiz1.php"><div class="button">Quiz n°1</div></a>
            <a href="./entrainement/quiz2.php"><div class="button">Quiz n°2</div></a>
            <a href=""><div class="button">Quiz n°3</div></a>
            <a href=""><div class="button">Quiz n°4</div></a>
            <a href=""><div class="button">Quiz n°5</div></a>
        </div>

        <div class="container">
            <a href=""><div class="button">Quiz n°6</div></a>
            <a href=""><div class="button">Quiz n°7</div></a>
            <a href=""><div class="button">Quiz n°8</div></a>
            <a href=""><div class="button">Quiz n°9</div></a>
            <a href=""><div class="button">Quiz n°10</div></a>
        </div>

        <div class="container">
            <a href=""><div class="button">Quiz n°11</div></a>
            <a href=""><div class="button">Quiz n°12</div></a>
            <a href=""><div class="button">Quiz n°13</div></a>
            <a href=""><div class="button">Quiz n°14</div></a>
            <a href=""><div class="button">Quiz n°15</div></a>
        </div>
        <div class="container">
            <a href=""><div class="button">Quiz n°16</div></a>
            <a href=""><div class="button">Quiz n°17</div></a>
            <a href=""><div class="button">Quiz n°18</div></a>
            <a href=""><div class="button">Quiz n°19</div></a>
            <a href=""><div class="button">Quiz n°20</div></a>
        </div>
    </div>

    
    <script src="./assets/js/script.js"></script>

</body>
</html>