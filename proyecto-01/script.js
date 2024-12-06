// Capturar los elementos del DOM
document.getElementById('calcular').addEventListener('click', () => {
  // Obtener valores de los inputs
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  const operacion = document.getElementById('operacion').value;

  // Validar entradas
  if (isNaN(numero1) || isNaN(numero2)) {
      alert('Por favor, ingresa números válidos.');
      return;
  }

  // Realizar la operación
  let resultado;
  if (operacion === 'suma') {
      resultado = numero1 + numero2;
  } else if () {
      ;
  } else if () {
      ;
  } else if () {
      if (numero2 === 0) {
          alert('No se puede dividir entre 0.');
          return;
      }
      resultado = numero1 / numero2;
  }

  // Mostrar el resultado
  document.getElementById('completar').textContent = completar;
});
