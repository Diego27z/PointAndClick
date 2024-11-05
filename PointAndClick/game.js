let currentScene = 0;
//Aqui estan las fotos de las diferentes partes de la casa
const scenes = [
  { background: '1.png' },
  { background: '2.jpg' },
  { background: '3.png' },
  { background: '4.png' }
];
//Botones disponibles/inactivos
const mensaje = document.getElementById('mensaje');
mensaje.style.display = 'none';
const flecha = document.getElementById('flecha');
flecha.style.display = 'none';
const volver = document.getElementById('volver');
volver.style.display = 'none';
const SalirDePieza = document.getElementById('SalirDePieza');
SalirDePieza.style.display = 'none';
const Living = document.getElementById('Living');
Living.style.display = 'none';
const baño = document.getElementById('baño');
baño.style.display = 'none';
const Cuadro = document.getElementById('Cuadro');
Cuadro.style.display = 'none';
const Sudoku = document.getElementById('Sudoku');
Sudoku.style.display = 'none';
const Tele = document.getElementById('Tele');
Tele.style.display = 'none';
let textoCompleto = "";
let textoCompleto2 = "";
let contador1 = 0
let haRegistrado = false;
const video = document.getElementById("miVideo");
video.style.display = 'none';
let detenerEscritura = false;
function escribirTexto(textoCompleto) {
  if (detenerEscritura) return;
  if (indice < textoCompleto.length) {
    mensaje.innerText += textoCompleto[indice];
    indice++;
    setTimeout(() => escribirTexto(textoCompleto, indice), 100); // Llamada recursiva con el texto y el nuevo índice
  }
}
function escribirTexto2(textoCompleto2) {
  if (indice2 < textoCompleto2.length) {
    mensaje.innerText += textoCompleto2[indice2];
    indice2++;
    setTimeout(() => escribirTexto2(textoCompleto2, indice2), 100); // Llamada recursiva con el texto y el nuevo índice
  }
}
    
const audio = new Audio('AudioRespiro.mp3');
const playButton = document.getElementById('empezar');
audio.loop = true;
playButton.addEventListener('click', function() {
  //audio.play();
  playButton.style.display = 'none';
  loadScene(currentScene);
  flecha.style.display = 'block';
  Cuadro.style.display = 'block';
  mensaje.style.display = 'Block';
});
function loadScene(sceneIndex) {
  mensaje.innerText = ''; // Limpia el texto anterior
  indice = textoCompleto.length;
  indice2 = textoCompleto2.length;
  const scene = scenes[sceneIndex];
  document.getElementById('background').src = scene.background;
}
  flecha.addEventListener('click', function() {
    const currentSrc = flecha.src;
    if (currentSrc.includes('flecha')) {
      currentScene = 1; // Cambia a la escena 2
      flecha.style.display = 'none';
        volver.style.display = 'block'; 
        SalirDePieza.style.display = 'block';
        mensaje.innerText = ''; // Limpia el texto anterior
        Cuadro.style.display = 'none';
        Sudoku.style.display = 'block';
        // Cargar la nueva escena
      loadScene(currentScene); 
    }
  });
    SalirDePieza.addEventListener('click', function() {
      const currentSrc = SalirDePieza.src;
      if (currentSrc.includes('object1.png')) {
        currentScene = 2; // Cambia a la escena 2
          volver.style.display = 'block';
          flecha.style.display = 'none';
          SalirDePieza.style.display = 'none';
          Living.style.display = 'block';
          baño.style.display = 'block';
          Sudoku.style.display = 'none';
          mensaje.innerText = ''; // Limpia el texto anterior 
          indice2 = 0; // Reinicia el índice para el efecto
          loadScene(currentScene);
          textoCompleto2 = " ¡Alo!, ¿hay alguien por ahi?";
          escribirTexto2(textoCompleto2);
      }
    });
        Living.addEventListener('click', function() {
          const currentSrc = Living.src;
          if (currentSrc.includes('object1.png')) {
            currentScene = 3;
              volver.style.display = 'block';
              flecha.style.display = 'none';
              SalirDePieza.style.display = 'none';
              Living.style.display = 'none';
              baño.style.display = 'none';
              Tele.style.display = 'block';
              video.style.display = 'block';
              video.play();
              video.playbackRate = 1.4;
              video.addEventListener("timeupdate", () => {
                if (video.currentTime >= 5 && !haRegistrado) {
                  mensaje.innerText = ''; // Limpia el texto anterior
                  indice = 0; // Reinicia el índice para el efecto
                  escribirTexto("¿Robos en casas?, que miedo...");
                  haRegistrado = true; // Evita que el mensaje se muestre varias veces
                }
              });
            loadScene(currentScene); // Cargar la nueva escena
          }
        });
        Cuadro.addEventListener('click', function() {
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          textoCompleto = "Es... es ella, ¿no? Mi... mi querida...";
          escribirTexto(textoCompleto); // Inicia el efecto de escritura
        });
        Sudoku.addEventListener('click', function() {
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          textoCompleto = "Me dijeron que esto me ayudaría, pero ¿para qué?";
          escribirTexto(textoCompleto); // Inicia el efecto de escritura
        });
volver.addEventListener('click', function() {
  const currentSrc = volver.src;
  if (currentSrc.includes('object2.png')) {
    if(currentScene==1){
      currentScene = 0;
      volver.style.display = 'none';
      flecha.style.display = 'block';
      SalirDePieza.style.display = 'none';
      baño.style.display = 'none';
      Cuadro.style.display = 'block';
      Sudoku.style.display = 'none';
      mensaje.innerText = '';
      indice2 = textoCompleto2.length;
    }
    if(currentScene==2){
      currentScene = 1;
      flecha.style.display = 'none';
      volver.style.display = 'block'; 
      SalirDePieza.style.display = 'block';
      Living.style.display = 'none';
      baño.style.display = 'none';
      Sudoku.style.display = 'block';
      mensaje.innerText = '';
      indice2 = textoCompleto2.length;
    }
    if(currentScene==3){
      currentScene = 2;
      flecha.style.display = 'none';
      volver.style.display = 'block'; 
      SalirDePieza.style.display = 'none';
      Living.style.display = 'block';
      baño.style.display = 'block';
      Tele.style.display = 'none';
      video.style.display = 'none';
      mensaje.innerText = '';
      video.pause();
    }
    loadScene(currentScene); // Cargar la nueva escena
  }
});