// Constantes de Agregando y/o quitando bordes
const imagenBordes = document.querySelector("#imagenBordes");

//Constantes de Pidiendo un máximo de 10 stickers
const autoSticker = document.querySelector("#stickerAuto");
const gatitoSticker = document.querySelector("#stickerGatito");
const corazonSticker = document.querySelector("#stickerCorazon");

const verificarSticker = document.querySelector("#verificarSticker");
const mensajeSticker = document.querySelector("#mensajeSticker");

//Condiciones de Agregando y/o quitando bordes
imagenBordes.addEventListener("click", () =>{
  imagenBordes.classList.toggle("border")
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