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

const form = document.getElementById('userForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const addressField = document.getElementById('address');
const list = document.getElementById('userList');
const editFormButton = form.getElementsByTagName('button')[0];
const users = JSON.parse(localStorage.getItem('users')) || [];

console.log(users);

form.addEventListener('submit', addUser);

users.forEach(student => {
    addUserToList(student.name, student.email, student.address);
});

function addUserToList(name, email, address) {
    const student = document.createElement('li');
    student.setAttribute('data-name', name);  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', deleteUser);
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', editUser);
    student.textContent = `Nombre: ${name} - Email: ${email} - Address: ${address}`;
    student.appendChild(deleteButton);
    student.appendChild(editButton);
    list.appendChild(student);
}

function addUser(event) {
    event.preventDefault();
    let name = nameField.value;
    let email = emailField.value;
    let address = addressField.value;

    if (name.length && email.length && address.length) {
        if (editFormButton.textContent === 'Editar usuario') {
            const editStudent = users.find(student => student.name === name);
            editStudent.name = name;
            editStudent.email = email;
            editStudent.address = address;
            const studentLi = list.querySelector(`li[data-name="${name}"]`);
            studentLi.firstChild.textContent = `Nombre: ${name} - Email: ${email} - Address: ${address}`;
        } else {
            addUserToList(name, email, address);
            users.push({ name, email, address });
        }
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        alert('Todos los campos son obligatorios');
    }
}

function editUser(event) {
    const studentLi = event.target.parentElement;
    const name = studentLi.getAttribute('data-name');
    const email = studentLi.textContent.split('-')[1].split(':')[1].trim();
    const address = studentLi.textContent.split('-')[2].split(':')[1].replace('BorrarEditar', '').trim();
    nameField.value = name;
    emailField.value = email;
    addressField.value = address;
    editFormButton.textContent = 'Editar usuario';
}

function deleteUser(event) {
    const student = event.target.parentElement;
    const name = student.getAttribute('data-name');
    const index = users.findIndex(user => user.name === name);
    if (index !== -1) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
    }
    list.removeChild(student);
}