const navbar_ul = document.getElementById("navbar_ul");
const toggle = document.getElementById("toggle");
const closetoggle = document.getElementById("closetoggle");
let image = document.getElementById("image");
function ToggletheNavbar (){
    // console.log("clicked");
    navbar_ul.style.transform='translateX(-5%)';
    toggle.style.display="none";
    closetoggle.style.display="block";
}
function ToggleClose(){
     navbar_ul.style.transform='translateX(-120%)';
     toggle.style.display="block";
    closetoggle.style.display="none";
    
}


// Slider scripting


var slideIndex = 0;
showSlides();

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = "dot";
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Automatic slide change every 2 seconds
setInterval(function() {
  changeSlide(1);
}, 5000);

// accordian scripting

// let acc = document.getElementsByClassName("accorbtn");
// let downarrow = document.getElementsByClassName("downarrow");

// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//       downarrow[i].innerHTML=`<i class="fa fa-arrow-down"></i>`;
//     } else {
//       panel.style.display = "block";
//       downarrow[i].innerHTML=`<i class="fa fa-arrow-up"></i>`;
//     }
//   });
// }


const light = document.getElementById("light");
const dark = document.getElementById("dark");
let body = document.getElementById("body");

function ToggleDarkMode(){
      if(body.style.backgroundColor==='white'){
        light.style.display="block";
        dark.style.display="none";
        body.style.backgroundColor="black";
        body.style.color="white";
      
      }
      else{
        light.style.display="none";
        dark.style.display="block";
        body.style.backgroundColor="white";
        body.style.color="black";
      }
}