// Inicializar el contador en 0
let contador = 0;

// Capturar los elementos del DOM
const contadorElemento = document.getElementById('contador');
const botonIncrementar = document.getElementById('incrementar');
const botonDecrementar = document.getElementById('decrementar');
const botonReiniciar = document.getElementById('reiniciar');

// Función para actualizar el contador en la página
function actualizarContador() {
    contadorElemento.textContent = contador;
}

// Evento para incrementar
botonIncrementar.addEventListener('click', () => {
    "completar"; // Pista 1
    actualizarContador();
});

// Evento para decrementar
botonDecrementar.addEventListener('click', () => {
    "completar"; // Pista 2
    actualizarContador();
});

// Evento para reiniciar
botonReiniciar.addEventListener('click', () => {
   "completar"; // Pista 3
    actualizarContador();
});
