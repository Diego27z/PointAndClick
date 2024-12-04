let currentScene = 0;
let contador = 0;
//Aqui estan las fotos de las diferentes partes de la casa
const scenes = [
  { background: '1.png' },
  { background: '2.png' },
  { background: '3.png' },
  { background: '4.png' },
  { background: 'fondooscuro.png' }
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


const colores = ['blue'];
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

    //Funcion para escribir texto que se puede reutilizar
function escribirTexto(textoCompleto) {
  if (indice < textoCompleto.length) {
    mensaje.style.color = 'blue';
    mensaje.innerText += textoCompleto[indice];
    indice++;
    setTimeout(() => escribirTexto(textoCompleto, indice), 60); // Llamada recursiva con el texto y el nuevo índice
  }else {
    escribiendo = false; // Permitir otro clic cuando termina de escribir
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
//Botones y objetos disponibles/inactivos
const mensaje = document.getElementById('mensaje');
mensaje.style.display = 'none';

const volver = document.getElementById('volver');
volver.style.display = 'none';

const Sudoku = document.getElementById('Sudoku');
Sudoku.style.display = 'none';


const Celu = document.getElementById('Celu');
Celu.style.display = 'none';

const EfectoRadio = document.getElementById('EfectoRadio');
EfectoRadio.style.display = 'none';

const audio = new Audio('AudioRespiro.mp3');
audio.loop = true;

const A1 = new Audio('AudiosLLamadas/1.mp3');
const A2 = new Audio('AudiosLLamadas/2.mp3');
const A3 = new Audio('AudiosLLamadas/3.mp3');

const playButton = document.getElementById('empezar');

const Button = document.getElementById('boton-estilizado');
Button.style.display = 'none';

const IrLiving = document.getElementById('IrLiving');
IrLiving.style.display = 'none';

const IrCocina = document.getElementById('IrCocina');
IrCocina.style.display = 'none';

const Cuadro = document.getElementById('Cuadro');
Cuadro.style.display = 'none';

const Chaleco = document.getElementById('chaleco');
Chaleco.style.display = 'none';
let IraLiving = 0;

const audio2 = new Audio('AudioLLamada.mp3');
audio2.volume = 0.3;
audio2.loop = true;

//Iniciar textos vacios
let textoCompleto = "";
let textoCompleto2 = "";
//Variable nos ayuda a mostrar un texto en un momento especifico
let haRegistrado = false;
///Variable nos ayuda para saber cuando la hija llamará
let LLamadaHija = 0;
//cargar escena al cambiar de habitacion
function loadScene(sceneIndex) {
  mensaje.innerText = ''; // Limpia el texto anterior
  indice = textoCompleto.length;
  indice2 = textoCompleto2.length;
  const scene = scenes[sceneIndex];
  document.getElementById('background').src = scene.background;
}


// Boton Inicial
playButton.addEventListener('click', function() {
  loadScene(0); 
// Crear el elemento dinámico para el efecto
const fadeEffect = document.createElement('div');
fadeEffect.id = 'fadeEffect';

// Estilos del efecto
fadeEffect.style.position = 'fixed';
fadeEffect.style.top = '0';
fadeEffect.style.left = '0';
fadeEffect.style.width = '100%';
fadeEffect.style.height = '100%';
fadeEffect.style.backgroundColor = 'black'; // Color del efecto
fadeEffect.style.opacity = '1'; // Comienza completamente opaco
fadeEffect.style.transition = 'opacity 8s cubic-bezier(0.25, 0.1, 0.25, 1)'; // Duración más larga y curva personalizada
fadeEffect.style.zIndex = '9999'; // Asegurar que esté sobre todo
fadeEffect.style.pointerEvents = 'none'; // Permitir interacción con elementos debajo

// Añadir el efecto al cuerpo
document.body.appendChild(fadeEffect);
// Iniciar la transición
setTimeout(() => {
  fadeEffect.style.opacity = '0'; // Reducir opacidad para revelar el contenido
}, 50); // Pequeño retraso para asegurar que se renderice
setTimeout(() => {
  fadeEffect.remove();
}, 7050); // Tiempo de transición (4s) + margen
 const cartel1 = document.getElementById('Cartel1');
 cartel1.style.top = '-5%'; // Posición final del movimiento
 // Volver el cartel a la posición inicial después de 5 segundos
 setTimeout(() => {
  cartel1.style.top = '-30%'; // Mover hacia la posición inicial
}, 8000); // Esperar 5 segundos antes de moverlo
  //audio.play();
  playButton.style.display = 'none';
  Cuadro.style.display = 'block';
  mensaje.style.display = 'Block';
  Button.style.display = 'block';
  Sudoku.style.display = 'block';
});

  //Click en primera puerta
Button.addEventListener('click', function() {
    currentScene = 1; // Cambia a la escena 2
    //Ocultar y Mostrar elementos correspondientes
    Button.style.display = 'none'; 
    Cuadro.style.display = 'none';
    Sudoku.style.display = 'none';
    volver.style.display = 'block';
    IrLiving.style.display = 'block';
    IrCocina.style.display = 'block';
    mensaje.innerText = ''; // Limpia el texto anterior
    // Cargar la nueva escena
  loadScene(currentScene); 
});


IrLiving.addEventListener('click', function() {
  if(IraLiving == 1){
    Chaleco.style.display = 'block';
  }else{
    IraLiving = 1;
  }
  currentScene = 2;
  EfectoRadio.style.display = 'block';
  IrLiving.style.display = 'none';
  IrCocina.style.display = 'none';
 //   video.style.display = 'none';
    //video.play();
 //  video.playbackRate = 1.4;
    //Funcion que muestra un texto cuando el video llega a los 5 segundos
   // video.addEventListener("timeupdate", () => {
     // if (video.currentTime >= 5 && !haRegistrado) {
       //mensaje.innerText = ''; // Limpia el texto anterior
        //indice = 0; // Reinicia el índice para el efecto
        //escribirTexto("¿Robos en casas?, que miedo...");
        //haRegistrado = true; // Evita que el mensaje se muestre varias veces
     // }
  //  });
  loadScene(currentScene); // Cargar la nueva escena
});

IrCocina.addEventListener('click', function() {
  currentScene = 3;
  //Ocultar y Mostrar elementos correspondientes
  volver.style.display = 'block';
  IrLiving.style.display = 'none';
  IrCocina.style.display = 'none';
  mensaje.innerText = ''; // Limpia el texto anterior
  // Cargar la nueva escena
loadScene(currentScene); 
});
        //Click en Cuadro de esposa
        Cuadro.addEventListener('click', function() {
          if (!escribiendo) {
            escribiendo = true;
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          textoCompleto = "Es... es ella, ¿no? Mi... mi querida...";
          escribirTexto(textoCompleto); // Inicia el efecto de escritura
          }
        });

        //Click en Sudoku
        Sudoku.addEventListener('click', function() {
          if (!escribiendo) {
            escribiendo = true;
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          textoCompleto = "Me dijeron que esto me ayudaría, pero ¿para qué?";
          escribirTexto(textoCompleto); // Inicia el efecto de escritura
          }
        });
                //Click en Chaleco
                let clickChaleco = 0;
                Chaleco.addEventListener('click', function() {
                  volver.style.display = 'none';
                    if (!escribiendo && clickChaleco == 0) {
                        escribiendo = true;
                        mensaje.innerText = ''; // Limpia el texto anterior
                        indice = 0; // Reinicia el índice para el efecto
                        textoCompleto = "¡Aquí está el chaleco!..";
                        escribirTexto(textoCompleto); // Inicia el efecto de escritura
                        clickChaleco++;
                    }   
                    if (!escribiendo && clickChaleco == 1) {
                      escribiendo = true;
                      mensaje.innerText = ''; // Limpia el texto anterior
                      indice = 0; // Reinicia el índice para el efecto
                      textoCompleto = "Por Dios esta niña… siempre con la cabeza en cualquier parte.";
                      escribirTexto(textoCompleto); // Inicia el efecto de escritura
                      clickChaleco++;
                  } 
                  if (!escribiendo && clickChaleco == 2) {
                    escribiendo = true;
                    mensaje.innerText = ''; // Limpia el texto anterior
                    indice = 0; // Reinicia el índice para el efecto
                    textoCompleto = "Se le olvida todo igual que a mi.";
                    escribirTexto(textoCompleto); // Inicia el efecto de escritura
                    clickChaleco++;
                }   
                if (!escribiendo && clickChaleco == 3) {
                  Chaleco.style.display = 'none';
                  escribiendo = true;
                  mensaje.innerText = ''; // Limpia el texto anterior
                  indice = 0; // Reinicia el índice para el efecto
                  textoCompleto = "";
                  escribirTexto(textoCompleto); // Inicia el efecto de escritura
                  clickChaleco = 0;
                  const fadeEffect = document.createElement('div');
                  fadeEffect.id = 'fadeEffect';
                
                  // Estilos del efecto de oscurecimiento
                  fadeEffect.style.position = 'fixed';
                  fadeEffect.style.top = '0';
                  fadeEffect.style.left = '0';
                  fadeEffect.style.width = '100%';
                  fadeEffect.style.height = '100%';
                  fadeEffect.style.backgroundColor = 'black'; // Color del efecto
                  fadeEffect.style.opacity = '0'; // Comienza transparente
                  fadeEffect.style.transition = 'opacity 8s cubic-bezier(0.25, 0.1, 0.25, 1)'; // Transición de opacidad
                  fadeEffect.style.zIndex = '9999'; // Asegura que esté sobre todo
                  fadeEffect.style.pointerEvents = 'none'; // Permitir interacción con elementos debajo
                
                  // Añadir el efecto al cuerpo
                  document.body.appendChild(fadeEffect);
                
                  // Iniciar la transición para oscurecer la pantalla
                  setTimeout(() => {
                    fadeEffect.style.opacity = '1'; // Gradualmente oscurecer la pantalla
                  }, 50); // Pequeño retraso para asegurar que se renderice
                
                  // Eliminar el efecto de oscurecimiento después de la transición, pero no restaurar la opacidad
                  setTimeout(() => {
                    // No eliminamos el div fadeEffect, solo lo dejamos como está para que la pantalla siga oscura
                    fadeEffect.remove(); // Elimina esta línea para mantener la pantalla oscura
                    window.location.href = 'Dia2.html';
                  }, 8000); // Tiempo de transición (8s) + margen
              }   
                });

        //Click en Celular
       Celu.addEventListener('click', function() {
        audio2.pause();
          if (!escribiendo) { // Solo continuar si no está escribiendo
            escribiendo = true;
            mensaje.innerHTML = ''; // Limpia el texto actual
            mensaje.style.color = colores[indiceTexto % colores.length];
            indiceLetra = 0;
            contador++;              
            if(contador == 2){
              mensaje.style.color = 'yellow';
              A1.play();
            }
            if(contador == 4){
              mensaje.style.color = 'yellow';
              A2.play();
            }
            if(contador == 6){
              mensaje.style.color = 'yellow';
              A3.play();
              contador = -1;
            }
            escribirTextoLLamada(); // Inicia el efecto de escritura
            // Cambia al siguiente texto en el arreglo
            indiceTexto = (indiceTexto + 1) % textos.length;
            //terminar llamada cuando no quedan más textos
            if (indiceTexto == textos.length - 1) {
              volver.style.display = 'block';
              IrLiving.style.display = 'block';
              IrCocina.style.display = 'block';
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
      Button.style.display = 'block';
      Cuadro.style.display = 'block';
      Sudoku.style.display = 'block';
      IrLiving.style.display = 'none';
      IrCocina.style.display = 'none';
      mensaje.innerText = '';
      indice2 = textoCompleto2.length;
    }
    if(currentScene==2){
      currentScene = 1;
      volver.style.display = 'block'; 
      IrLiving.style.display = 'block';
      IrCocina.style.display = 'block';
      EfectoRadio.style.display = 'none';
      Chaleco.style.display = 'none';
      mensaje.innerText = '';
      if (LLamadaHija == 0){
        Celu.style.display = 'block';
        audio2.play();
        volver.style.display = 'none';
        IrLiving.style.display = 'none';
        IrCocina.style.display = 'none';
        LLamadaHija++;
      } 
    }
    if(currentScene==3){
      currentScene = 1;
      volver.style.display = 'block'; 
      IrLiving.style.display = 'block';
      IrCocina.style.display = 'block';
      EfectoRadio.style.display = 'none';
      mensaje.innerText = '';
    }
    loadScene(currentScene); // Cargar la nueva escena
  }
});