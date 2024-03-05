let nav = document.getElementById("nav")

function reveal() {
    if (window.innerWidth > 678) {
        if (window.scrollY > 30) {
            nav.classList.add("header")
        } else {
            nav.classList.remove("header")
        }
    }else {
        if (window.scrollY >= 10) {
            nav.classList.add("header")
        }
        if (window.scrollY <= 5) {
            nav.classList.remove("header")
        }
    }

    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

if (location.hash != "") {
    location.href = location.hash;
}


let css = document.getElementById("loadOverlay");

css.classList.add("show")

let imagens = document.getElementsByClassName("imagens");
let current = imagens.length-1;

let variable = 0;

setInterval(function() {
  console.log(variable)
  if (variable === 0){
    imagens[2].classList.add("move")
    variable++
  } else if (variable === 1){
    imagens[1].classList.add("move")
    variable++
  } else if (variable === 2){
    imagens[1].classList.remove("move")
    imagens[2].classList.remove("move")
    variable = 0;
  }
}, 6000);


