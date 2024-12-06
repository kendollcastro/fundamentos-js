//Estructuras de Control de Flujo

//1. Condicionales
//Los condicionales permiten que el programa tome decisiones basadas en una condición.

//Estructura básica de if y else

/* if (condicion) {
  //Código que se ejecuta si la condición es verdadera
} else {
  //Código que se ejecuta si la condición es falsa
} */

let age = 17;

if (age >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}


//2. Condicionales if...else if...else
//Se usan para manejar múltiples condiciones.

let nota = 10;

if (nota >= 90) {
  console.log("Sobresaliente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}


/* Ejercicio 1: Condicionales

Instrucciones:

1. Pregunta al usuario su edad.
2. Si es menor de 18 años, muestra "No puedes manejar."
3. Si tiene entre 18 y 21 años, muestra "Puedes manejar con supervisión."
3. Si tiene más de 21 años, muestra "Puedes manejar sin restricciones." */


let edad = 23;

if (edad < 18) {
    console.log('o puede manejar');
} else if (edad >= 18 && edad < 21) {
    console.log('puede manejar con supervisión');
} else {
    console.log('puede manejar sin restricciones');
}


// 2. Bucles
// Se usa para repetir un bloque de código un número específico de veces.

/* for (inicialización; condición; incremento) {
  Código que se ejecuta en cada iteración.
} */

//Ejemplo: 

for (let i = 1; i <= 5; i++) {
  console.log("Numero: " + i);
}

/* __________________________________________________________________________________________ */

// 2.2 Bucle While
// Se usa para repetir un bloque de código mientras una condición sea verdadera.

/* while (condición) { 
  // Código que se ejecuta mientras la condición sea verdadera
} */

let j = 1
while (j <= 5) {
  console.log("Numero: " + j);
  j++
}

/* __________________________________________________________________________________________ */

// 2.3 Control de Bucles: break y continue
// break: Detiene un bucle antes de que termine.
// continue: Salta a la siguiente iteración del bucle.


// Ejemplo del break:
for (let x = 1; x <= 10; x++) {
  if (x === 5) {
    break; // Detiene el bucle cuando x es igual a 5
  }
  console.log ("Número: " + x);
}


//Ejemplo del continue:
for (let a = 1; a <= 10; a++) {
  if (a % 2 === 0) {
    continue; // Salta los números pares.
  }
  console.log ("Número: " + a);
}

/* __________________________________________________________________________________________ */


//Crea un programa que:

//Pregunte al usuario su nombre y cuántas veces quiere que se imprima.
//Use un bucle para imprimir el nombre esa cantidad de veces.
// (****** Hacer todo con variables ******)

let nombre = "Juan"; // Aquí podrías cambiar el nombre
let veces = 5; // Aquí defines cuántas veces imprimir

// Bucle para imprimir el nombre 'veces' veces
for (let y = 1; y <= veces; y++) {
  console.log(nombre);
}