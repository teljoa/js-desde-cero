/*
Ejercicio 2: Añadir un nuevo usuario con JSON
Desarrolla un formulario HTML que permita añadir un nuevo usuario con los campos de nombre y correo electrónico.
Cuando el formulario se envíe, utiliza xmlHttpRequest con el método POST para enviar los datos en formato JSON al servidor.
El servidor debe guardar el nuevo usuario en la lista y devolver un mensaje de éxito. Muestra el mensaje recibido en la página.
*/

const form = document.getElementById('user-form');
const responseMessage = document.getElementById('response-message');

const url = 'http://localhost:3000/users'; 

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const newUser = {
    name: name,
    email: email
  };

  const xhr = new XMLHttpRequest();

  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json'); 

  xhr.onload = function() {
    if (xhr.status === 201) { 
      const response = JSON.parse(xhr.responseText); 
      responseMessage.textContent = `Usuario agregado con éxito: ${response.name} - ${response.email}`;
      responseMessage.style.color = 'green'; 
    } else {
      responseMessage.textContent = `Error al agregar el usuario: ${xhr.statusText}`;
      responseMessage.style.color = 'red'; 
    }
  };

  xhr.onerror = function() {
    responseMessage.textContent = 'Error de conexión al servidor.';
    responseMessage.style.color = 'red';
  };

  xhr.send(JSON.stringify(newUser));
});