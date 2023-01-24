// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {checkScroll()};
scrollState = 1;
function descendreScroll() {

  // SCROLL
  window.scrollTo(0, 20)
  scrollState = 1;

  // HEADER
  document.getElementById("header").style.fontSize = "15px";
  document.getElementById("header").style.top = "0px";
  document.getElementById("header").style.height = "5px";
  document.getElementById("header").style.padding = "70px 10px";

  // TITRE
  document.getElementById("titre").style.margin = "-40px 0 0 0";
  document.getElementById("titre").style.paddingTop = "0";

  // START BUTTON
  document.getElementById("start").style.display = "none";

  //  BACK BUTTON
  document.getElementById("retour").style.padding = "20px";
  document.getElementById("retour").style.marginTop = "-35px";

  // DELETE SCROLL
  document.getElementById("deleteScroll").classList.remove("deleteScroll");
  scrollState = 0

}


function monterScroll() {


  // HEADER
  document.getElementById("header").style.fontSize = "90px";
  document.getElementById("header").style.top = "105px";
  document.getElementById("header").style.height = "100%";

  // TITRE
  document.getElementById("titre").style.marginTop = "0";

  // START
  document.getElementById("start").style.display = "flex";
  document.getElementById("start").style.marginRight = "auto";
  document.getElementById("start").style.marginLeft = "auto";
  document.getElementById("start").style.marginTop = "122px";

  // BACK BUTTON
  document.getElementById("retour").style.display = "absolute";
  document.getElementById("retour").style.padding = "50px";
  document.getElementById("retour").style.marginTop = "560px";

  // DELETE SCROLL
  document.getElementById("deleteScroll").classList.add("deleteScroll");

}

function checkScroll() {
  // CHECK IF USER SCROLL TO TOP
  if (document.documentElement.scrollTop < 1 && scrollState == 0) {
    monterScroll()
  }
}


// PERMET DE METTRE EN ROUGE CLAIR LE LOGO QUAND LE BOUTON EST TOUCHE
// $(".back").hover(function(){
//   function() {
//     $(.icon).css("color", "#red");
//   },
// );

