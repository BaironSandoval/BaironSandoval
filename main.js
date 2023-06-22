let menuVisible = false;

function mostrarOcultarMenu () {
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.getElementById('btnDescargar').addEventListener('click', function() {
    let url = 'public/CV-CANVA-BaironSandoval.pdf';
    window.open(url, '_blank');
  });