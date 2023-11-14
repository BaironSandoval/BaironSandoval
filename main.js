function mostrarOcultarMenu() {
  let menu = document.getElementById("nav");
  menu.classList.toggle("responsive");
}

let botonHamburguesa = document.getElementById("botonHamburguesa");
botonHamburguesa.addEventListener("click", mostrarOcultarMenu);
let selectores = document.querySelectorAll("#seleccionar");
for (var i = 0; i < selectores.length; i++) {
  selectores[i].addEventListener("click", mostrarOcultarMenu);
}

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    depth: 500,
    modifier: 1,
    slideShadows: false,
    rotate: 0,
    stretch: 0,
  }
})