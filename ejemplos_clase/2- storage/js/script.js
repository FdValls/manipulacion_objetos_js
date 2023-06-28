"use strict";

console.log("----------------------------------------");
console.log("Almacenamiento local (localStorage)");

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento
// valor = valor/contenido del elemento
localStorage.setItem('bienvenida', '¡Hola Inove!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

let mensaje =  localStorage.getItem('bienvenida');
let bandera =  localStorage.getItem('esValido');
let numero  =  localStorage.getItem('unNumero');

console.log("Analizar el tipo de dato que se recupera del storage");
console.log(typeof mensaje); //string;
console.log(typeof bandera); //string;
console.log(typeof numero);  //string;

console.log("----------------------------------------");
console.log("Almacenamiento de sesión (sessionStorage)");

// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('email', 'info@inove.com.ar');

let lista = sessionStorage.getItem('seleccionados');
let email =  sessionStorage.getItem('email');

console.log("Analizar como se recuperar los datos del storage")
console.log(lista); // "1,2,3"
console.log(email); // "info@inove.com.ar"

console.log("----------------------------------------");
console.log("Recuperar el tipo de dato original");

numero = parseInt(numero);
lista = lista.split(",");

console.log(numero); // 20
console.log(lista); // ["1","2","3"]

console.log("----------------------------------------")
console.log("Eliminar datos")

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');

localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información

console.log("----------------------------------------");
console.log("Usando sintaxis de objetos");

//Guarda una clave
localStorage.numeroPrueba = 15;
 
//Leer una clave
console.log(localStorage.numeroPrueba); // 5

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}

console.log("----------------------------------------");
console.log("Almacenar objetos");

const productos = 
    [{ id: 1,  producto: "Arroz", precio: 125 },
     {  id: 2,  producto: "Fideo", precio: 70 },
     {  id: 3,  producto: "Pan"  , precio: 50},
     {  id: 4,  producto: "Flan" , precio: 100}];

console.log(productos);
 

