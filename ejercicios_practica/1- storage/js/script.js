"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/

const buttonLogin = document.getElementById("btnIngresar")
const buttonLogout = document.getElementById("btnSalir")

const user = document.getElementById("usuario")
const email = document.getElementById("email")

const txtUserLogin = document.getElementById("usuarioLogeado")
const txtEmailLogin = document.getElementById("emailLogeado")

const login = document.getElementById("login")
const logout = document.getElementById("logout")

var valueEmail = ""
var valueUser = ""

buttonLogin.onclick = () => {
    //Leo los datos ingresados en "usuario" y "email".
    valueEmail = user.value
    valueUser = email.value

    //Almaceno en memoria permanente del explorador.
    localStorage.setItem("user", valueUser)
    localStorage.setItem("email", valueEmail)

    //Completo las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
    txtUserLogin.textContent = valueUser
    txtEmailLogin.textContent = valueEmail

    login.classList.add("hidden")
    logout.classList.remove("hidden")

};

/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/
console.log(localStorage.length)

if (localStorage.length > 0) {
    txtUserLogin.textContent = localStorage.getItem("user")
    txtEmailLogin.textContent = localStorage.getItem("email")
    login.classList.add("hidden")
    logout.classList.remove("hidden")
}

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/

buttonLogout.onclick = () => {
    localStorage.clear()
    window.location.reload()
    login.classList.remove("hidden")
    logout.classList.add("hidden")
}
