let currentScene = 0;
//Aqui estan las fotos de las diferentes partes de la casa
const scenes = [
  { background: '1.png' },
  { background: '2.jpg' },
  { background: '3.png' },
  { background: '4.png' }
];
const textos = [
  ' ',
  ' Hola.',
  ' Hola papá, ¿cómo estás?.',
  ' Muy bien hija mía, ¿Cómo vas tú?.',
  ' Todo bien viejito. Oye, ¿sabes si dejé mi chaleco allá en la mesa?, no lo encuentro.',
  ' Sabes qué, me parece que sí… Voy a mirar y te aviso.',
  ' Gracias papá, me avisas cualquier cosa.',
  ' Obvio hija, cuídate mucho.',
  ' '
];
const colores = ['blue', 'yellow'];
let indiceTexto = 0; // Índice para controlar cuál texto se muestra
    let indiceLetra = 0; // Índice para controlar cuántas letras se muestran
    let escribiendo = false; 
    function escribirTextoLLamada() {
      if (indiceLetra < textos[indiceTexto].length) {
        mensaje.innerHTML += textos[indiceTexto][indiceLetra];
        indiceLetra++;
        setTimeout(escribirTextoLLamada, 60);
      }else {
        escribiendo = false; // Permitir otro clic cuando termina de escribir
      }
    }
//Botones y objetos disponibles/inactivos
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

const Celu = document.getElementById('Celu');
Celu.style.display = 'none';


//Iniciar textos vacios
let textoCompleto = "";
let textoCompleto2 = "";
//Variable nos ayuda a mostrar un texto en un momento especifico
let haRegistrado = false;
///
let LLamadaHija = 0;
const video = document.getElementById("miVideo");
video.style.display = 'none';
//Funcion para escribir texto que se puede reutilizar
function escribirTexto(textoCompleto) {
  if (indice < textoCompleto.length) {
    mensaje.style.color = 'blue';
    mensaje.innerText += textoCompleto[indice];
    indice++;
    setTimeout(() => escribirTexto(textoCompleto, indice), 100); // Llamada recursiva con el texto y el nuevo índice
  }
}
//Funcion para escribir texto que solo saldrá una vez
function escribirTexto2(textoCompleto2) {
  if (indice2 < textoCompleto2.length) {
    mensaje.style.color = 'blue';
    mensaje.innerText += textoCompleto2[indice2];
    indice2++;
    setTimeout(() => escribirTexto2(textoCompleto2, indice2), 100); // Llamada recursiva con el texto y el nuevo índice
  }
}  
const audio = new Audio('AudioRespiro.mp3');
const playButton = document.getElementById('empezar');
audio.loop = true;
const audio2 = new Audio('AudioLLamada.mp3');
audio2.volume = 0.3;
audio2.loop = true;

// Boton Inicial
playButton.addEventListener('click', function() {
  audio.play();
  playButton.style.display = 'none';
  loadScene(currentScene);
  flecha.style.display = 'block';
  Cuadro.style.display = 'block';
  mensaje.style.display = 'Block';
});

//cargar escena al cambiar de habitacion
function loadScene(sceneIndex) {
  mensaje.innerText = ''; // Limpia el texto anterior
  indice = textoCompleto.length;
  indice2 = textoCompleto2.length;
  const scene = scenes[sceneIndex];
  document.getElementById('background').src = scene.background;
}

//Click en primera flecha
  flecha.addEventListener('click', function() {
    const currentSrc = flecha.src;
    if (currentSrc.includes('flecha')) {
        currentScene = 1; // Cambia a la escena 2
        //Ocultar y Mostrar elementos correspondientes
        flecha.style.display = 'none';
        volver.style.display = 'block'; 
        SalirDePieza.style.display = 'block';
        Cuadro.style.display = 'none';
        Sudoku.style.display = 'block';
        mensaje.innerText = ''; // Limpia el texto anterior
        // Cargar la nueva escena
      loadScene(currentScene); 
    }
  });
  //Click en primera puerta
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
          indice2 = 0; // Reinicia el índice de donde se comenzara a escribir el texto
          loadScene(currentScene);
          LLamadaHija++;
            textoCompleto2 = " ¡Alo!, ¿hay alguien por ahi?";
            escribirTexto2(textoCompleto2);
      }
    });
    //Click para ir al Living
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
              //Funcion que muestra un texto cuando el video llega a los 5 segundos
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
        //Click en Cuadro de esposa
        Cuadro.addEventListener('click', function() {
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          textoCompleto = "Es... es ella, ¿no? Mi... mi querida...";
          escribirTexto(textoCompleto); // Inicia el efecto de escritura
        });
        //Click en Sudoku
        Sudoku.addEventListener('click', function() {
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          textoCompleto = "Me dijeron que esto me ayudaría, pero ¿para qué?";
          escribirTexto(textoCompleto); // Inicia el efecto de escritura
        });
       Celu.addEventListener('click', function() {
        audio2.pause();
          if (!escribiendo) { // Solo continuar si no está escribiendo
            escribiendo = true;
            mensaje.innerHTML = ''; // Limpia el texto actual
            mensaje.style.color = colores[indiceTexto % colores.length];
            indiceLetra = 0;
            escribirTextoLLamada(); // Inicia el efecto de escritura
            // Cambia al siguiente texto en el arreglo
            indiceTexto = (indiceTexto + 1) % textos.length;
            if (indiceTexto == textos.length - 1) {
              volver.style.display = 'block';
              Living.style.display = 'block';
              baño.style.display = 'block';
              Celu.style.display = 'none';
              Celu.remove;
              loadScene(currentScene);
            }
          }
        });
        //Click en "volver" que va variando segun en la habitacion donde uno se encuentre
volver.addEventListener('click', function() {
  const currentSrc = volver.src;
  if (currentSrc.includes('object2.png')) {
    if(currentScene==1){
      currentScene = 0;  //representa a la habiatacion a la cual queremos ir
      //Ocultar y Mostrar elementos correspondientes
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
      if (LLamadaHija == 1){
        Celu.style.display = 'block';
        audio2.play();
        volver.style.display = 'none';
        Living.style.display = 'none';
        baño.style.display = 'none';
        LLamadaHija++;
      } 
    }
    loadScene(currentScene); // Cargar la nueva escena
  }
});