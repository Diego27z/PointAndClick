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
const Next = document.getElementById('Next');
Next.style.display = 'none';

const colores = ['blue', 'yellow'];
let indiceTexto = 0; // Índice para controlar cuál texto se muestra
let indiceLetra = 0; // Índice para controlar cuántas letras se muestran
let escribiendo = false;
function escribirTextoLLamada() {
  
  if (indiceLetra < textos[indiceTexto].length) {
    mensaje.innerHTML += textos[indiceTexto][indiceLetra];
    indiceLetra++;
    setTimeout(escribirTextoLLamada, 60);
  } else {
    NextCall.style.display = 'block';
    escribiendo = false; // Permitir otro clic cuando termina de escribir
  }
}

//Botones y objetos disponibles/inactivos
const mensaje = document.getElementById('mensaje');
mensaje.style.display = 'none';

const volver = document.getElementById('volver');
volver.style.display = 'none';

const Celu = document.getElementById('Celu');
Celu.style.display = 'none';

const IrLiving = document.getElementById('IrLiving');
IrLiving.style.display = 'none';

const IrCocina = document.getElementById('IrCocina');
IrCocina.style.display = 'none';

const audio2 = new Audio('AudioLLamada.mp3');
audio2.volume = 0.3;
audio2.loop = true;

// Avanzar al siguiente diálogo con NextCall
NextCall.addEventListener('click', function () {
    if (!escribiendo) {
      escribiendo = true;
      mensaje.innerHTML = ''; // Limpia el texto anterior
      indiceLetra = 0; // Reinicia el índice para el efecto
      NextCall.style.display = 'none'; // Oculta el botón hasta que termine de escribir
      escribirTextoLLamada(); // Inicia el siguiente texto
      // Cambia al siguiente texto en el arreglo
      indiceTexto = (indiceTexto + 1) % textos.length;
      // Terminar llamada cuando no quedan más textos
      if (indiceTexto == textos.length - 1) {
        volver.style.display = 'block';
        IrLiving.style.display = 'block';
        IrCocina.style.display = 'block';
        NextCall.style.display = 'none'; // Ocultar botón NextCall al finalizar la llamada
      }
    }
  });

// Click en Celular para iniciar la llamada
Celu.addEventListener('click', function () {
    audio2.play();
    if (!escribiendo) {
      escribiendo = true;
      mensaje.style.display = 'block';
      mensaje.innerHTML = ''; // Limpia el texto actual
      mensaje.style.color = colores[indiceTexto % colores.length];
      indiceLetra = 0;
      escribirTextoLLamada(); // Inicia el efecto de escritura
      Celu.style.display = 'none'; // Oculta el celular después de iniciar la llamada
    }
  });