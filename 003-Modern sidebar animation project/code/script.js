//  selecting elements to perfom actions
const menu = document.querySelector(".nav-icon");
const background = document.querySelector(".background");
const sideNav = document.querySelector(".sidenav");
const closeNav = document.querySelector(".nav-icon-sec");

// function for the event when clicking on the menu icon to open navigation bar
menu.addEventListener("click", function () {
  background.style.transform =
    "translateX(10rem) scale(0.45) rotateY(-8deg) skewY(2deg)"; // rotate works with css perspective property
  background.style.filter = "blur(0.15rem)";
  sideNav.style.left = "2%"; // to show nav-side-bar while opening
});

// function for the event to close the navigation bar by clicking on the cross icon
closeNav.addEventListener("click", function () {
  background.style.transform = "scale(1)";
  background.style.filter = "blur(0)";
  sideNav.style.left = "-20%"; // to hide nav-side-bar on close
});
