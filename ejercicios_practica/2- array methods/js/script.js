"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/

// console.log(personasJSON);

let persons = JSON.parse(personasJSON);

//Otra forma de usar filter
let personsMayor18 = persons.filter(person => person.edad > 18);

let personsMayor18_bis = persons.filter(function(person) {
    return person.edad > 18;
});


/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/

//Traigo el elemento que voy a utilizar
const bodyElement = document.querySelector("body");

personsMayor18.forEach(function(person, index) {
    //Creo 2 span, uno para el nombre y otro para edad
    let nombreElemento = document.createElement("span");
    let edadElemento = document.createElement("span");
    //Creo 1 parrafo para agregarlos ahí
    let parrafoElemento = document.createElement("p");

    //Seteo los span con los valores del array
    nombreElemento.textContent = person.nombre;
    edadElemento.textContent = person.edad;

    //Seteo lso valores del parrafo y le agrego los span 
    parrafoElemento.innerHTML = "Nombre: ";
    parrafoElemento.appendChild(nombreElemento);
    parrafoElemento.innerHTML += "<br>Edad: ";
    parrafoElemento.appendChild(edadElemento);

    //Inserto todo dentro del body
    bodyElement.appendChild(parrafoElemento);

});

/* 3 - BONUS TRACK

- Su misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/


