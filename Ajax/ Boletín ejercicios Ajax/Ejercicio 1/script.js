/*
Ejercicio 1: Obtener una lista de usuarios
Crea un script que realice una solicitud GET mediante xmlHttpRequest para obtener una lista de usuarios desde un servidor (puedes usar un endpoint 
de un servidor como json-server que devuelva un JSON). La lista de usuarios debe mostrarse en un contenedor HTML como una lista desordenada (<ul>), 
mostrando su nombre y correo electrónico.

{
  "users": [
    { "id": 1, "name": "Alice", "email": "alice@example.com" },
    { "id": 2, "name": "Bob", "email": "bob@example.com" },
    { "id": 3, "name": "Charlie", "email": "charlie@example.com" }
  ]
}
*/

const url = 'http://localhost:3000/users';
const xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText); 
    const users = data; 
    const userList = document.getElementById('user-list');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li); 
    });
  } else {
    console.error('Error al obtener los usuarios:', xhr.statusText);
  }
};

xhr.onerror = function() {
  console.error('Error de solicitud:', xhr.statusText);
};

xhr.open('GET', url, true);
xhr.send();