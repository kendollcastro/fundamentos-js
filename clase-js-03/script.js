// Declaramos las variables y pedimos datos al usuario.
//let name = prompt("Cuál es su nombre?");
//let age = parseInt(prompt("Cuántos años tiene?"));
//let driveLicense = confirm("Tiene licencia de conducir?");

//Mostramos la información en el console.log
/*console.log("Nombre: " + name);
console.log("Edad: " + age);
console.log("Tiene licencia de conducir: " + driveLicense);*/

//Operadores Básicos de Javascript.
//  1.Operadores Aritméticos

// + : Suma / Ejm 5+3
// - : Resta / ejm 10 - 4
// * : Multip / ejm 7 * 3
// / : División / ejm 20 / 5
// % : Módulo o residuo / ejm 10 % 3 = 1
// **: Exponenciación / ejm 2 ** 3 = 8 (2 elevadoa la 3 es igual a 8)

let a = 10;
let b = 3;

console.log("1. Operadores Aritméticos");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log("----------------------------------------");

// 2. Operadores de Asignación
// Los operadores de asignación permiten guardar un valor en una variable y actualizar su valor con base en operaciones matemáticas.

// = / ejm a = 5 / Asigna 5 a el a.
// += / ejm a += 2 / Incrementa a en 2
// -= / ejm a -= 3 / Disminuye a en 3
// *= / ejm a *= 4 / Multiplica a por 4
// /= / ejm a /= 2 / Divide a entre 2
// %= / ejem a %= 3 / Resto de dividir a entre 3

console.log("2. Operadores de Asignación");

let number = 10;
console.log("Valor inicial: " + number);

number += 5;
console.log("Incrementa: " + number);

number -= 4;
console.log("Disminuye: " + number);

number *= 10;
console.log("Multiplica: " + number);

number /= 6;
console.log("Divide: " + number);

number %= 9;
console.log("Resto: " + number);

console.log("---------------------------------")


// 3. Operadores de Comparación
// Estos operadores comparan dos valores y devuelven un valor booleano (true o false).

// == / Igual a / ejem 5 == 5 / true
// === / Estrictamente igual (tipo y valor) / ejm 5 === "5" / false
// != / No es igual a o es diferente a / ejm 5 != 3 / true
// !== / Estrictamente no igual / ejm 5 !== "5" / true
// > / Mayor que / ejm 7 > 3 / true
// < / Menor que / ejm 4 < 8 / true
// >= / Mayor o igual / ejm 5 >= 5 / true
// >= / Menor o igual que / 5 <= 8 / true

console.log("3. Operadores de Comparación");

let x = 10;
let y = "10";

console.log(x == y);   // true (compara solo el valor)
console.log(x === y);  // false (compara valor y tipo de dato
console.log(x != y);   // false
console.log(x !== y);  // true
console.log(x > 5);    // trueconsole.log(x <= 10);  // true

console.log("-----------------------------")


// 4. Operadores Lógicos
// Se utilizan para combinar condiciones, siendo muy útiles en estructuras condicionales.

// && / And (y) 
// || / Or (o)
// ! / Not (no)

console.log("4. Operadores Lógicos");
let edad = 28;
let tieneLicencia = true;

console.log("&& / And / y: ", edad >= 18 && tieneLicencia); // && / And (Y)
console.log("|| / Or / o: ", edad >= 18 || tieneLicencia); // Or (o)
console.log("! / Not / No: ", !tieneLicencia); // ! / Not (no)

console.log("-----------------------------")

/*Instrucciones:
- Declara una variable llamada puntos con un valor inicial de 0.
- Imagina que un usuario gana puntos en un juego. 
- Actualiza el valor de puntos tres veces, sumándole 10 cada vez, e imprime el valor actualizado después de cada cambio. */

let puntos = 0;
console.log("Número de puntos 0");

puntos += 10;
console.log("Primera fase: ", puntos);

puntos += 10;
console.log("Segunda fase: ", puntos);

puntos += 10;
console.log("Tercera fase: ", puntos);