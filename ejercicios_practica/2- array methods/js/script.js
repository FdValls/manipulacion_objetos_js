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

let personsMayor18_bis = persons.filter(function (person) {
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
const body = document.querySelector("body");

personsMayor18.forEach(function (person, index) {
    //Creo 2 span, uno para el nombre y otro para edad
    let spanNombre = document.createElement("span");
    let spanEdad = document.createElement("span");
    //Creo 1 parrafo para agregarlos ahí
    let parrafo = document.createElement("p");

    //Seteo los span con los valores del array
    spanNombre.textContent = person.nombre;
    spanEdad.textContent = person.edad;

    //Seteo lso valores del parrafo y le agrego los span 
    parrafo.innerHTML = "Nombre: ";
    parrafo.appendChild(spanNombre);
    parrafo.innerHTML += "<br>Edad: ";
    parrafo.appendChild(spanEdad);

    //Inserto todo dentro del body
    body.appendChild(parrafo);

});

/* 3 - BONUS TRACK

- Su misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/

let containerDiv = document.createElement("div");
let divSeparator = document.createElement("div");
let space = document.createElement("br");

let myInput = document.createElement("input");
myInput.setAttribute("type", "text");
myInput.setAttribute("placeholder", "edad")
myInput.setAttribute("value", "")

let h1 = document.createElement("h1");
h1.innerHTML = "Ingrese una edad"

let myButton = document.createElement("button");
myButton.setAttribute("id", "enviar")
myButton.textContent = "enviar"
myButton.setAttribute("type", "button")

containerDiv.appendChild(h1)
containerDiv.appendChild(myInput)
containerDiv.appendChild(divSeparator)

divSeparator.appendChild(myButton)

body.appendChild(containerDiv)
body.appendChild(space)
body.appendChild(divSeparator)

//Presionando enter en el input
myInput.onkeydown = function (event) {
    if (event.key === "Enter") {
        var valor = myInput.value;
        if (valor > 18) {
            alert("MAYOR a 18")
        } else {
            alert("MENOR a 18")
        }
    }
}

//Presionando el boton creado "enviar"
myButton.onclick = function () {
    var valor = myInput.value;
    if (valor > 18) {
        alert("MAYOR a 18")
    } else {
        alert("MENOR a 18")
    }
}