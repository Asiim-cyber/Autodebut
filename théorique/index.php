<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <!-- Lien lié au fichier html -->
    <link rel="stylesheet" href="../assets/css/acceuil_permis_theorique.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    

    <!-- En-tête de la page -->
    <title>Auto-début - Acceuil permis théorique</title>
</head>
<body>


  <div class="topnav" id="myTopnav">
    <div class="active"><img src="../assets/image/Auto-début_logo.png" alt="logo du site"></div>
    <a href="../index.php"><i class="fa-solid fa-house"></i>Acceuil</a>
    <a href="../mise_a_jour/"><i class="fa-solid fa-newspaper"></i>Nouveauté</a>
    <a href="../créateur/"><i class="fa-solid fa-user-tie"></i>Créateur</a>
    <a href="mailto:duchesne.guil@gmail.com"><i class="fa fa-fw fa-envelope"></i>Prendre Contact</a>
    <?php
        if (empty($_SESSION['id']))
        {
    ?>
    <a class="login"  href="../register/"><i class="fa-solid fa-circle-user"></i>Connexion</a>
    <?php
        } else
        {
    ?>
    <a class="login"  href="../register/logout.php"><i class="fa-solid fa-circle-user"></i>Déconnexion</a>
    <?php
        }
    ?>
    <a href="javascript:void(0);" class="icon" onclick="navbarResponsive()">
        <i class="fa fa-bars"></i>
    </a>
  </div>

   

    

    <div id="millieu_de_page">

        

        <nav id="gauche">
            <div class="card" onclick="document.location='./apprendre.php'">
                <div class="card-image"></div>
                <div class="card-text">
                  <h2>Apprendre</h2>
                  <p><i>Tout sur le permis théorique</i></p>
                </div>
                <div class="card-stats">
                  <div class="stat">
                    <div class="value"></div>
                  </div>
                  <div class="stat border">
                    <div class="value">32</div>
                    <div class="type">Chapitres</div>
                  </div>
                  <div class="stat">
                    <div class="value"></div>
                    <div class="type"></div>
                  </div>
                </div>
            </div>
                
            
                
        </nav>

        <nav id="millieu">
            <div class="card" onclick="document.location='./entrainement.php'">
                <div class="card-image2"></div>
                <div class="card-text">
                  <h2>S'entrainer</h2>
                  <p><i>Faire des exercices</i></p>
                </div>
                <div class="card-stats">
                  <div class="stat">
                    <div class="value">20</div>
                    <div class="type">Quiz</div>
                  </div>
                  <div class="stat">
                    <div class="value">50</div>
                    <div class="type">Question</div>
                  </div>               
                </div>
            </div>
        </nav>

        <nav id="droite">
            <div class="card" onclick="document.location='../construct/'">
                <div class="card-image3"></div>
                <div class="card-text3">
                  <h2>Prendre RDV</h2>
                  <p><i>Passer l'examen théorique</i></p>
                </div>
                <div class="card-stats">
                  <div class="stat">
                    <div class="value"></div>
                    <div class="type"></div>
                  </div>
                  <div class="stat border">
                    <div class="value">Toute la Belgique</div>
                    <div class="type"></div>
                  </div>
                  <div class="stat">
                    <div class="value"></div>
                    <div class="type"></div>
                  </div>
                </div>
            </div>
        </nav>
        </div>
         
    </div>
    
    
    <script src="../js/acceuil_théorique.js">

    </script>
    
</body>
</html>