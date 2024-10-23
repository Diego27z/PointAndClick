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
const textoCompleto = "Es... es ella, ¿no? Mi... mi querida...";
function escribirTexto() {
  if (indice < textoCompleto.length) {
    mensaje.innerText += textoCompleto[indice];
    indice++;
    setTimeout(escribirTexto, 165); // Cambia el tiempo (100 ms) para controlar la velocidad
  }
}
    
const audio = new Audio('AudioRespiro.mp3');
const playButton = document.getElementById('empezar');
audio.loop = true;
playButton.addEventListener('click', function() {
  audio.play();
  playButton.style.display = 'none';
  loadScene(currentScene);
  flecha.style.display = 'block';
  Cuadro.style.display = 'block';
  mensaje.style.display = 'Block';
});
function loadScene(sceneIndex) {
  indice = textoCompleto.length;
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
        loadScene(currentScene); // Cargar la nueva escena
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
            loadScene(currentScene); // Cargar la nueva escena
          }
        });
        Cuadro.addEventListener('click', function() {
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          escribirTexto(); // Inicia el efecto de escritura
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
    }
    if(currentScene==2){
      currentScene = 1;
      flecha.style.display = 'none';
      volver.style.display = 'block'; 
      SalirDePieza.style.display = 'block';
      Living.style.display = 'none';
      baño.style.display = 'none';
    }
    if(currentScene==3){
      currentScene = 2;
      flecha.style.display = 'none';
      volver.style.display = 'block'; 
      SalirDePieza.style.display = 'none';
      Living.style.display = 'block';
      baño.style.display = 'block';
    }
    loadScene(currentScene); // Cargar la nueva escena
  }
});