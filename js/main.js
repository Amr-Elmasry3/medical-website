// Access Elements We Will Use Them
let allheadrLinks= Array.from(document.querySelectorAll(".headr-links li"));
let menuIcon= document.querySelector(".menu-icon");
let firstSpan= document.querySelector(".menu-icon .first");
let secondSpan= document.querySelector(".menu-icon .second");
let thirdSpan= document.querySelector(".menu-icon .third");
let headrLinks= document.querySelector(".headr-links");

// Part Of Variables
let state= "open";

// Part Of Main Code
allheadrLinks.forEach((link) => {
  link.addEventListener("click", (eve) => {
    allheadrLinks.forEach((link) => {
      link.classList.remove("active");
    })
    eve.currentTarget.classList.add("active");
  })
})

menuIcon.onclick= function (){
  if (state === "open"){
    headrLinks.style.cssText= "padding: 10px 20px ; height: 185px ; transition: 1s";
    firstSpan.style.cssText= "transform: translateY(7px) rotate(45deg) ; transition: 1s";
    secondSpan.style.cssText= "opacity: 0 ; transition: 1s";
    thirdSpan.style.cssText= "transform: translateY(-7px) rotate(-45deg) ; transition: 1s";
    state= "close";
  }
  else {
    headrLinks.style.cssText= "padding: 0 ; height: 0 ; transition: 1s ; transition: 1s";
    firstSpan.style.cssText= "transform: translateY(0) rotate(0)";
    secondSpan.style.cssText= "opacity: 1 ; transition: 1s";
    thirdSpan.style.cssText= "transform: translateY(0) rotate(0) ; transition: 1s";
    state= "open";
  }
}