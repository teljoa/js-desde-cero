/* ENUNCIADO 

Ejercicio 1: Introducción a localStorage

a) ¿Qué es localStorage y cuál es su propósito en el desarrollo web? 
 
    El localStorage es un mecanismo para almacenar información en el navegador para un dominio específico. 

b) Explica la diferencia clave entre localStorage y sessionStorage.

    La diferencia es que, mientras que los datos almacenados en localStorage no tienen tiempo de expiración, 
    los datos almacenados en sessionStorage se borran cuando finaliza la sesión de navegación, es decir, 
    cuando se cierra el navegador.
*/

/*
Ejercicio 2: Almacenando Datos Primitivos

a) Utilizando localStorage, almacena tu nombre en el navegador bajo la clave "nombre". 
b) Recupera el nombre almacenado en localStorage y muestra su valor en la consola.
*/
localStorage.setItem("nombre", "Joaquin");
localStorage.getItem("nombre");
/*
Ejercicio 3: Eliminando Datos Primitivos

a) Utilizando localStorage, almacena tu edad bajo la clave "edad". 
b) Utiliza la función adecuada para eliminar la clave "edad" de localStorage. 
c) Verifica si la clave "edad" aún existe en localStorage.
*/
localStorage.setItem("edad", 25);
localStorage.removeItem("edad");
localStorage.getItem("edad");
/*
Ejercicio 4: Almacenando y Recuperando Objetos

a) Crea un objeto JavaScript que represente una persona con propiedades como "nombre", "edad" y "ciudad". 
b) Utiliza JSON.stringify para convertir este objeto en una cadena JSON. 
c) Almacena la cadena JSON en localStorage bajo la clave "persona". 
d) Recupera la cadena JSON de localStorage y utiliza JSON.parse para convertirla de nuevo en un objeto JavaScript. 
e) Muestra en la consola alguna propiedad del objeto recuperado.
*/
let persona = {
    nombre: "Joaquin",
    edad: 25,
    ciudad: "Sevilla"
}
localStorage.setItem("persona", JSON.stringify("persona"));
JSON.parse(localStorage.getItem("persona"));
console.log(persona.ciudad);
/*
Ejercicio 5: Eliminando Objetos

a) Utilizando localStorage, almacena un objeto cualquiera bajo una clave de tu elección. 
b) Utiliza la función adecuada para eliminar la clave que contiene el objeto. 
c) Verifica si la clave que contiene el objeto aún existe en localStorage.
*/
localStorage.setItem("persona5", "persona");
localStorage.removeItem("persona5");
console.log(localStorage.getItem("persona5"));
/*
Ejercicio 6: Lista de Usuarios con Opciones de Borrar y Editar

A partir del siguiente código HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    <title>Lista de usuarios</title>
</head>
<body>
    <form id="userForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required>
        <label for="address">Dirección:</label>
        <input type="text" name="address" id="address" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="submit">Agregar Usuario</button>
      </form>

      <h2>Lista de Usuarios</h2>
      <ul id="userList"></ul>
      <script src="script.js"></script>
</body>
</html>
a) Utiliza JavaScript para capturar los valores del formulario y agregar un nuevo usuario a una lista visible en la página. 
Cada usuario en la lista debe incluir un botón "Borrar" al lado de su nombre, dirección y dirección de correo electrónico.

b) Cuando se haga clic en el botón "Borrar" junto a un usuario, debe eliminarse ese usuario de la lista.

c) Utiliza localStorage para almacenar la lista de usuarios de manera persistente, de modo que los usuarios agregados no se 
pierdan cuando se actualice la página o se cierre el navegador.

Ampliación:

d) Ahora vamos a permitir que se puedan editar los usuarios, para ello, cuando se añada un usuario a la lista, además del botón 
borrar, tendrá también un botón editar. Cuando se haga clic en el botón "Editar" junto a un usuario, se cargarán los datos del 
usuario en los campos del formulario y el botón cambiará a Editar usuario. Al pulsar el botón se cambiarán los datos del usuario 
en el localStorage. Los cambios realizados deben reflejarse en la lista.

Este ejercicio te ayudará a practicar el uso de localStorage, así como la manipulación de datos en la interfaz de usuario. 
¡Buena suerte!
*/
const form = document.querySelector('#userForm');
const [nameField, emailField, addressField] = form.querySelectorAll('input');
const list = document.querySelector('#userList');
const users = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit', addUser);
users.forEach(user => addUserToList(user));

function addUserToList({ name, email, address }) {
    const li = document.createElement('li');
    li.dataset.name = name;
    li.innerHTML = `Nombre: ${name} - Email: ${email} - Address: ${address} 
        <button onclick="editUser(this)">Editar</button>
        <button onclick="deleteUser(this)">Borrar</button>`;
    list.appendChild(li);
}

function addUser(event) {
    event.preventDefault();
    const user = { name: nameField.value, email: emailField.value, address: addressField.value };
    
    if (!user.name || !user.email || !user.address) return alert('Todos los campos son obligatorios');

    const existingUser = users.find(u => u.name === user.name);
    if (existingUser) Object.assign(existingUser, user);
    else {
        users.push(user);
        addUserToList(user);
    }

    localStorage.setItem('users', JSON.stringify(users));
    form.reset();
}

function editUser(button) {
    const li = button.parentElement;
    const [name, email, address] = li.textContent.match(/: (.*?)(?= -|$)/g).map(t => t.slice(2));
    
    [nameField.value, emailField.value, addressField.value] = [name, email, address];
}

function deleteUser(button) {
    const li = button.parentElement;
    users.splice(users.findIndex(user => user.name === li.dataset.name), 1);
    localStorage.setItem('users', JSON.stringify(users));
    li.remove();
}