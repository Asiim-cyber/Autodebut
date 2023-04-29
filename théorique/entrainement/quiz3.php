<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- lien lié au fichier html -->
  <link rel="stylesheet" href="./assets/css/quiz.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

  <!-- titre de l'en-tête de la page -->
  <title>Auto-début - Entrainement-Exercice-permis théorique</title>
</head>
<body>

<!-- Navbar au dessus de la page -->
<div class="topnav" id="myTopnav">
        <div class="active"><img class="logo" src="../../assets/image/Auto-début_logo.png" alt="logo du site"></div>
        <a href="../../index.php"><i class="fa fa-fw fa-home"></i>Menu</a>
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

  <!-- Bouton démarrer le Quiz -->
  <div class="start_btn"><button>Démarrer le questionnaire</button></div>

  <!-- information de la boite avant le quiz -->
  <div class="info_box">
    <div class="info_title">
      <span>Régles du questionnaire</span>  
    </div>
    <div class="info_list">
      <div class="info">1. Vous devez obtenir un minimum de 41 points sur 50 pour réussir l'examen théorique.</div>
      <br>
      <div class="info">2. Pour chaque question tu n'as que 15 secondes pour y répondre, si le temps est écoulé la question est considérer comme une faute.</div>
      <br>
      <div class="info">3. En cas de réponse incorrecte, une distinction est faite entre les infractions graves et les fautes mineures.</div>
      <br>
      <div class="info">4. Une faute mineure signifie 1 point en moins tandis qu'une faute grave vaut 5 points en moins.</div>
      <br>
      <div class="info">5. Ne décourage pas si tu n'y arrive pas, entraine-toi tout les jours, et tu y arrivera.</div>
    </div>
    <div class="buttons">
      <button class="quit">Quitter</button>
      <button class="restart" onclick="optionSelected()">Commencer</button>
    </div>
  </div>

  
  <!-- le Quiz -->
  <div class="quiz_box">
    <header>
      <div class="title">Questionnaire sur le permis théorique</div>
      <div class="timer">
        <div class="time_text">Temps restant</div>
        <div class="timer_sec">15</div>
      </div>
      <div class="time_line"></div>
      <div id="div-score">Score : <span id="score">0</span></div>
    </header>
    <section>

      <div class="que_text">
        <span>html</span>
      </div>
      <div class="explanation" id="explanation">
      </div>
      <div class="photo">
        
      </div>
      <div class="option_list">

      <div class="option">

        <div class="icon tick"><i class="fas fa-check"></i></div>
      </div>

        </div>
    </section>


    <!-- Quiz box footer -->
    <footer>

      <div class="total_que">

      </div>

      <button class="btn-explanation" id="explanation_btn">Explication</button>

      
      <button id="validation" class="validation" onclick="optionSelected(this)">Valider</button>
      
      <button id="next-btn" class="next_btn" style="display: none;">Suivant</button>

    </footer>

  </div>
  

  <!-- resultat -->
  <div class="result_box">
    <div class="icon">
      <i class="fas fa-crown"></i>
    </div>
    <div class="complete_text">Tu as terminé le questionnaire</div>
    <div class="score_text">
      <span id="fail-or-success"></span>
    </div>
    <div class="buttons">
      <button class="restart" onclick="optionSelected()">Rejouer le questionnaire</button>
      <a href="../entrainement.php">
        <button class="quit">Quitter le questionnaire</button>
      </a>  
    </div>
  </div>
      

      
  
    
        
      
  <!-- lien javascript -->
  <script src="assets/js/entrainement.js" type="text/javascript" ></script>
  <script src="./assets/js/questionQuiz3.js" type="text/javascript" ></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  
</body>
</html>