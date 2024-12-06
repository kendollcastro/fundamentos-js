//Funciones

//¿Qué es una función?
//Una función es un bloque de código que realiza una tarea específica. Nos ayuda a reutilizar el código y hacerlo más modular 

//Ejemplo de función básica:
function saludar() {
  console.log("¡Hola a todos!");
}

//saludar();

/* ---------------------------------------------------------- */

// Sintaxis Básica de una función en Javascript

function nombreDeLaFuncion(parametros) {
  //Código que realiza la función
  return valor; //Opcional
}


/*----------------------------------------------------------- */

// 1. Funciones sin Parámetros:
// - No reciben datos para trabajar.

function saludoDos() {
  console.log("¡Hola a todos!");
}

//saludoDos();




// 2. Funciones con Parámetros:
// - Reciben datos para procesar.

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 8));



// 3. Funciones Anónimas (Asignadas a Variables)
// No tienen nombre y se asignan a una variable.

const saludo = function() {
  console.log("Hola!")
}

saludo();


// 4. Funciones tipo flecha
// Tienen una sintaxis más moderna para escribir funciones.

const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2)); 


// Ejercicio 1: Función Básica
// Crear una función llamada calcularAreaRectangulo que reciba la base y la altura de un rectangulo, calcule el área y la retorne.

// Función:
function calcularAreadelRectangulo(base, altura) {
  return base * altura;
}

console.log(calcularAreadelRectangulo(10, 20));


/* ---------------------------------------------------------- */

// Ejercicio 2: Reutilización con Funciones
// Crear una función llamada esPar que reciba un número como párametro y devuelva true si el número es par o false si es impar.

function esPar(numero){
  // % 2
  return numero % 2 === 0;
}
console.log(esPar(15));
console.log(esPar(2));


// Ejercicio: Área de un Triángulo con Función Flecha
// Descripción:
// Crear una función flecha que reciba la base y la altura de un triángulo, y devuelva su área.
// (base * altura) / 2
const calcularAreaTriangulo  = (base, altura ) => (base * altura) / 2;
console.log("El área del triangulo es: " + calcularAreaTriangulo(5, 3));