<!--
QUI ? DUCHESNE GUILLAUME
QUAND ? 17/09/2022
QUOI ? PAGE D'ACCEUIL DE L'ONGLET POUR APPRENDRE 
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

    <!-- LIEN -->
    <link rel="stylesheet" href="./assets/css/apprendre.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">

    <!-- EN-TETE TITRE -->
    <title>Auto-début - Apprendre le théorique</title>
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
    
    

    <!-- contenu du millieu de la page -->
    <div class="millieu">
        <div class="colonne">
            <!-- Hover #3 -->
                <a href="./apprendre/la-voie-publique.html" class="box-3">
                    <div class="btn btn-three">
                        LA VOIE PUBLIQUE
                    </div>
                </a>

                <a href="./apprendre/les-usagers.html" class="box-3">
                    <div class="btn btn-three">
                        USAGERS ET VÉHICULES
                    </div>
                </a>

                <a href="./apprendre/les-pneus.html" class="box-3">
                    <div class="btn btn-three">
                        LES PNEUS
                    </div>
                </a>

                <a href="./apprendre/communiquer.html" class="box-3">
                    <div class="btn btn-three">
                        COMMUNIQUER
                    </div>
                </a>

        </div>
        
        <div class="colonne">

            <a href="./apprendre/conducteurs-et-passagers.html" class="box-3">
                <div class="btn btn-three">
                    CONDUCTEURS ET PASSAGERS
                </div>
            </a>

            <a href="./apprendre/technique-de-conduite.html" class="box-3">
                <div class="btn btn-three">
                    TECHNIQUE DE CONDUITE
                </div>
            </a>

            <a href="./apprendre/conduite-écono-ecolo.html" class="box-3">
                <div class="btn btn-three">
                    CONDUITE ÉCONOME ET ÉCOLO
                </div>
            </a>

            <a href="./apprendre/gaz-pollution.html" class="box-3">
                <div class="btn-petit btn-three">
                    GAZ D'ÉCHAPPEMENT - POLLUTION
                </div>
            </a>
            
        </div>

        <div class="colonne">

            <a href="./apprendre/inapte.html" class="box-3">
                <div class="btn btn-three">
                    TEMPORAIREMENT INAPTE
                </div>
            </a>

            <a href="./apprendre/infraction.html" class="box-3">
                <div class="btn btn-three">
                    RESPECT DU CODE - INFRACTIONS
                </div>
            </a>

            <a href="./apprendre/injonction.html" class="box-3">
                <div class="btn btn-three">
                    INJONCTIONS
                </div>
            </a>

            <a href="./apprendre/signaux-lumineux.html" class="box-3">
                <div class="btn btn-three">
                    SIGNAUX LUMINEUX
                </div>
            </a>

        </div>

        <div class="colonne">

            <a href="./apprendre/signaux-routiers.html" class="box-3">
                <div class="btn btn-three">
                    SIGNAUX ROUTIERS
                </div>
            </a>

            <a href="./apprendre/marques-routieres.html" class="box-3">
                <div class="btn btn-three">
                    MARQUES ROUTIÈRES
                </div>
            </a>

            <a href="./apprendre/echelle-des-valeurs.html" class="box-3">
                <div class="btn btn-three">
                    ECHELLE DES VALEURS
                </div>
            </a>

            <a href="./apprendre/place-des-conducteurs.html" class="box-3">
                <div class="btn btn-three">
                    PLACE DES CONDUCTEURS
                </div>
            </a>

        </div>

        <div class="colonne">

            <a href="./apprendre/vitesse.html" class="box-3">
                <div class="btn btn-three">
                    VITESSE
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    CÉDER LE PASSAGE
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    CHANGEMENT DE DIRECTION
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn-tres-petit btn-three">
                    INTERDICTION DE DÉPASSER PAR LA GAUCHE
                </div>
            </a>

        </div>

        <div class="colonne">
            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    AUTOROUTE & ROUTE POUR AUTO
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    TRAIN / TRAM / BUS
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    ARRÊT DE TRAM / DE BUS
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn-tres-petit btn-three">
                    VÉHICULES AFFECTÉS AU TRANSPORT SCOLAIRE
                </div>
            </a>

        </div>

        <div class="colonne">

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    COMPORTEMENT
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    ZONES LENTES
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    EMPLOIS DES FEUX
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    TUNNELS
                </div>
            </a>

        </div>

        <div class="colonne">

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    ARRÊT ET STATIONNEMENT
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    PANNE
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn-petit btn-three">
                    COMPORTEMENT EN CAS D'ACCIDENT
                </div>
            </a>

            <a href="/apprendre/la-voie-publique.html" class="box-3">
                <div class="btn btn-three">
                    LE TABLEAU DE BORD
                </div>
            </a>

        </div>

        
    
    
    </div>


    <!-- javascript -->
    <script src="../../js/acceuil_théorique.js"></script>

</body>
</html>