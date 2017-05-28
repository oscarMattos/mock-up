// Funciones para abrir y cerrar la navegacion lateral

function openNav() {
  let sideNav = document.querySelector("#sideNav");
  let darkBackground = document.querySelector("#darkBackground");
  sideNav.style.width = "250px";
  darkBackground.style.display = "block";
}

document.querySelector("#openNav").addEventListener("click", openNav);

function closeNav() {
  let sideNav = document.querySelector("#sideNav");
  let darkBackground = document.querySelector("#darkBackground");
  sideNav.style.width = "0";
  darkBackground.style.display = "none";
}

document.querySelector("#closeNav").addEventListener("click", closeNav);
