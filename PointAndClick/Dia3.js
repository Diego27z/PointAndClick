let currentScene = 0;
//Aqui estan las fotos de las diferentes partes de la casa
const scenes = [
  { background: '1.png' },
  { background: '2.png' },
  { background: '3.png' },
  { background: '4.png' },
  { background: 'fondooscuro.png' }
];
const textos = [
  ' Y bueno pasando a otras noticias, para toda la gente que nos escucha,',
  ' Sobre todo a la gente mayor,',
  ' Informar que el indice de robos a casas ha incrementado,',
  ' Los delincuentes visualizan dentro de que horarios la casa queda sola',
  ' O con un adulto mayor para aprovechar y entrar a robar.',
  ''
];


const colores = ['blue', 'purple'];
let indiceTexto = 0; // Índice para controlar cuál texto se muestra
    let indiceLetra = 0; // Índice para controlar cuántas letras se muestran
    let escribiendo = false; 
    function escribirTextoLLamada() {
      
      if (indiceLetra < textos[indiceTexto].length) {
        mensaje.innerHTML += textos[indiceTexto][indiceLetra];
        indiceLetra++;
        setTimeout(escribirTextoLLamada, 45); // Velocidad de escritura
      } else {
        escribiendo = false; // Permitir otro clic cuando termina de escribir
        indiceTexto++; // Pasar al siguiente texto
        if (indiceTexto < textos.length) {
          // Si hay más textos, inicia el próximo automáticamente
          setTimeout(() => {
            mensaje.innerHTML = ''; // Limpia el mensaje
           // mensaje.style.color = 'black'; // Reinicia el color (si aplica)
            indiceLetra = 0; // Reinicia el índice de la letra
            escribirTextoLLamada(); // Llama al siguiente texto
          }, 1000); // Espera 1 segundo antes de continuar
        }
      }
    }

    //Funcion para escribir texto que se puede reutilizar
function escribirTexto(textoCompleto) {
  if (indice < textoCompleto.length) {
    //mensaje.style.color = 'blue';
    mensaje.innerText += textoCompleto[indice];
    indice++;
    setTimeout(() => escribirTexto(textoCompleto, indice), 60); // Llamada recursiva con el texto y el nuevo índice
  }else {
    escribiendo = false; // Permitir otro clic cuando termina de escribir
  }
}

//Funcion para escribir texto que solo saldrá una vez
function escribirTexto2(textoCompleto) {
  if (indice < textoCompleto.length) {
    mensaje.style.color = 'purple';
    mensaje.innerText += textoCompleto[indice];
    indice++;
    setTimeout(() => escribirTexto2(textoCompleto, indice), 60); // Llamada recursiva con el texto y el nuevo índice
  }else {
    escribiendo = false; // Permitir otro clic cuando termina de escribir
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

const playButton = document.getElementById('empezar');

const Button = document.getElementById('boton-estilizado');
Button.style.display = 'none';

const IrLiving = document.getElementById('IrLiving');
IrLiving.style.display = 'none';

const IrCocina = document.getElementById('IrCocina');
IrCocina.style.display = 'none';

const IrAfuera = document.getElementById('IrAfuera');
IrAfuera.style.display = 'none';

const Cuadro = document.getElementById('Cuadro');
Cuadro.style.display = 'none';

const Chaleco = document.getElementById('chaleco');
Chaleco.style.display = 'none';

const Silueta = document.getElementById('Silueta');
Silueta.style.display = 'none';

let IraLiving = 1;

const audio2 = new Audio('AudioLLamada.mp3');
const ARadio = new Audio('AudiosLLamadas/ARadio.mp3');
const AHija = new Audio('AudiosLLamadas/8.mp3');
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
  audio.play();
  audio.volume = 1.0;
  playButton.style.display = 'none';
  Cuadro.style.display = 'block';
  mensaje.style.display = 'Block';
  Button.style.display = 'block';
  Sudoku.style.display = 'block';
  //Sudoku.style.display = 'block';
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
    IrAfuera.style.display = 'none';
    mensaje.innerText = ''; // Limpia el texto anterior
    // Cargar la nueva escena
  loadScene(currentScene); 
});


IrLiving.addEventListener('click', function() {
  currentScene = 2;
  EfectoRadio.style.display = 'block';
  IrLiving.style.display = 'none';
  IrCocina.style.display = 'none';
 //   video.style.display = 'none';
 if(IraLiving==1){
  IrAfuera.style.display = 'none';
  audio.volume = 0.4;
  ARadio.play();
  if (!escribiendo) { // Solo continuar si no está escribiendo
   volver.style.display = 'none';
   mensaje.style.color = 'black';
   escribirTextoLLamada(); // Inicia el efecto de escritura
 }
     ARadio.addEventListener('ended', () => {
       mensaje.innerText = ''; // Limpia el texto anterior
       indice = 0; // Reinicia el índice para el efecto
       mensaje.style.color = 'blue';
       escribirTexto("  ¿Robos en el barrio?, ¿Y Marta está allá afuera? ¡Tengo que avisarle!");
       volver.style.display = 'block';
       audio.volume = 1.0;
       IrAfuera.style.display = 'block';
     });
     
     IraLiving=2;
     
 }
  loadScene(currentScene); // Cargar la nueva escena
});

IrCocina.addEventListener('click', function() {
  currentScene = 3;
  //Ocultar y Mostrar elementos correspondientes
  volver.style.display = 'block';
  IrAfuera.style.display = 'none';
  IrLiving.style.display = 'none';
  IrCocina.style.display = 'none';
  mensaje.innerText = ''; // Limpia el texto anterior
  // Cargar la nueva escena
loadScene(currentScene); 
});

let clickAfuera = 0;
IrAfuera.addEventListener('click', function() {
  //Ocultar y Mostrar elementos correspondientes
  volver.style.display = 'none';
  IrAfuera.style.display = 'block';
  IrLiving.style.display = 'none';
  IrCocina.style.display = 'none';
  EfectoRadio.style.display = 'none';

  if (!escribiendo && clickAfuera == 0) {

    escribiendo = true;
    mensaje.innerText = ''; // Limpia el texto anterior
    indice = 0; // Reinicia el índice para el efecto
    mensaje.style.color = 'blue';
    textoCompleto = "¿Alguien entró?";
    escribirTexto(textoCompleto); // Inicia el efecto de escritura
    clickAfuera++;
    }    
    if (!escribiendo && clickAfuera == 1) {
    Silueta.style.display = 'block';
    escribiendo = true;
    mensaje.innerText = ''; // Limpia el texto anterior
    indice = 0; // Reinicia el índice para el efecto
    mensaje.style.color = 'blue';
    textoCompleto = "¿Quién está ahí?";
    escribirTexto(textoCompleto); // Inicia el efecto de escritura
    clickAfuera++;
    }   
    if (!escribiendo && clickAfuera == 2) {
    escribiendo = true;
    mensaje.innerText = ''; // Limpia el texto anterior
    indice = 0; // Reinicia el índice para el efecto
    mensaje.style.color = 'blue';
    textoCompleto = "¡Me están Robando!";
    escribirTexto(textoCompleto); // Inicia el efecto de escritura
    clickAfuera++;
    } 
    if (!escribiendo && clickAfuera == 3) {
      escribiendo = true;
      mensaje.innerText = ''; // Limpia el texto anterior
      indice = 0; // Reinicia el índice para el efecto
      mensaje.style.color = 'purple';
      textoCompleto = "Papá... ¡Soy yo!";
      AHija.play();
      escribirTexto(textoCompleto); // Inicia el efecto de escritura
      clickAfuera++;
      } 
    if (!escribiendo && clickAfuera == 4) {
    escribiendo = true;
    mensaje.innerText = ''; // Limpia el texto anterior
    indice = 0; // Reinicia el índice para el efecto
    textoCompleto = "";
    escribirTexto(textoCompleto); // Inicia el efecto de escritura
    clickAfuera = 0;
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

        //Click en Cuadro de esposa
        let clickCuadro = 0;
        Cuadro.addEventListener('click', function() {
          if (!escribiendo && clickCuadro == 0) {
              escribiendo = true;
              mensaje.innerText = ''; // Limpia el texto anterior
              indice = 0; // Reinicia el índice para el efecto
              textoCompleto = "Marta, ¿dónde estás? ¿Habrá salido? Sabe que no puede salir sola.";
              escribirTexto(textoCompleto); // Inicia el efecto de escritura
              clickCuadro = 0;
          }    
        });

        //Click en Sudoku
        Sudoku.addEventListener('click', function() {
          if (!escribiendo) {
            escribiendo = true;
          mensaje.innerText = ''; // Limpia el texto anterior
          indice = 0; // Reinicia el índice para el efecto
          textoCompleto = "Hace tiempo que no ocupo esta tontera.";
          escribirTexto(textoCompleto); // Inicia el efecto de escritura
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
      IrAfuera.style.display = 'none';
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
    }
    if(currentScene==3){
      currentScene = 1;
      volver.style.display = 'block'; 
      IrLiving.style.display = 'block';
      IrCocina.style.display = 'block';
      EfectoRadio.style.display = 'none';
      mensaje.innerText = '';
    }
    if(currentScene==4){
      currentScene = 1;
      volver.style.display = 'none'; 
      IrLiving.style.display = 'none';
      IrCocina.style.display = 'none';
      EfectoRadio.style.display = 'none';
      mensaje.innerText = '';
    }
    loadScene(currentScene); // Cargar la nueva escena
  }
});
