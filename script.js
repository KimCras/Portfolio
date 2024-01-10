document.querySelector(".burger-menu").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("show");
  document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.remove("show");
  document.querySelector(".overlay").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".project img");
  const body = document.body;
  const main = document.querySelector(".project"); // Select the main element with class "project"

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      const isEnlarged = image.classList.toggle("enlarged");

      if (isEnlarged) {
        body.classList.add("overlay-visible");
        main.classList.add("overlay-visible"); // Apply the class to main
      } else {
        body.classList.remove("overlay-visible");
        main.classList.remove("overlay-visible"); // Remove the class from main
      }
    });
  });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
