document.querySelector(".burger-menu").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("show");
  document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.remove("show");
  document.querySelector(".overlay").style.display = "none";
});
