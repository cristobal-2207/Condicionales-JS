//Constantes de las Secciones
// Constantes de Agregando y/o quitando bordes
const imagenBordes = document.querySelector("#imagenBordes");

//Constantes de Pidiendo un máximo de 10 stickers
const autoSticker = document.querySelector("#stickerAuto");
const gatitoSticker = document.querySelector("#stickerGatito");
const corazonSticker = document.querySelector("#stickerCorazon");
const verificarSticker = document.querySelector("#verificarSticker");
const mensajeSticker = document.querySelector("#mensajeSticker");

//Constantes de Clave Secreta 
const primerDigito = document.querySelector("#primerDigito");
const segundoDigito = document.querySelector("#segundoDigito");
const tercerDigito = document.querySelector("#tercerDigito");
const validarClave = document.querySelector("#validarClave");
const mensajeClaveSecreta = document.querySelector("#mensajeClaveSereta");


//Condiciones de las Secciones
//Condiciones de Agregando y/o quitando bordes
imagenBordes.addEventListener("click", () =>{
  imagenBordes.classList.toggle("bordes")
})

//Condiciones de Pidiendo un máximo de 10 stickers
verificarSticker.addEventListener("click", () => {
  const sumatoria = parseInt(stickerAuto.value) + parseInt(stickerGatito.value) + parseInt(stickerCorazon.value);
  if(sumatoria > 10) {
    mensajeSticker.innerHTML = `No seas barsa, llevas ${sumatoria} stickers <br> El maximo es 10 po!!`
  } else{
    mensajeSticker.textContent = `Llevas ${sumatoria} stickers.`
  }
})

//Condiciones de Clave Secreta
validarClave.addEventListener("click", () => {
  if(parseInt(primerDigito.value) === 9 && parseInt(segundoDigito.value) === 1 &&parseInt(tercerDigito.value) === 1){
    mensajeClaveSecreta.textContent = "Password 1 Correcto";
  } else if(parseInt(primerDigito.value) === 7 && parseInt(segundoDigito.value) === 1 && parseInt(tercerDigito.value) === 4){
    mensajeClaveSecreta.textContent = "Password 2 Correcto";
  } else {
    mensajeClaveSecreta.textContent = "Password Incorrecto";
  }
})