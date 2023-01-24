window.onscroll = function(){stickyNavbar()}

var navbar = document.getElementById("myTopnav")

var sticky = navbar.offsetTop

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}


function navbarResponsive() {

  var navbar = document.getElementById("myTopnav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    x.className = "topnav";
  }

}

