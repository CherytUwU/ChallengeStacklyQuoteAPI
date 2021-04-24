const linkProfile = document.getElementById('link-perfil');
const linkRepo = document.getElementById('link-repositorio');
const arrowO = document.getElementById('arrow-perfil-o');
const arrowC = document.getElementById('arrow-perfil-c');
 
function btnDisplay() {
    linkProfile.classList.toggle('displayONLink');
    linkRepo.classList.toggle('displayONLink')
    arrowO.classList.toggle('displayON');
    arrowC.classList.toggle('displayOFF')
}