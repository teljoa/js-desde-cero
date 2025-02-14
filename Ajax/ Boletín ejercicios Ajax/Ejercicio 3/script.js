/*
Ejercicio 3: Crear un juego
Diseña un formulario HTML para recoger los datos de un nuevo juego, incluyendo:

Título del juego
Género
Descripción
Precio

<form id="gameForm">
    <input type="text" name="title" placeholder="Título del juego" required>
    <input type="text" name="genre" placeholder="Género" required>
    <textarea name="description" placeholder="Descripción del juego" required></textarea>
    <input type="number" name="price" placeholder="Precio (€)" step="0.01" required>
    <button type="submit">Crear Juego</button>
</form>
<div id="status"></div>

Cuando se envíe el formulario, usa xmlHttpRequest con el método POST y FormData para enviar los datos al servidor.
El servidor debe guardar los datos del juego en un archivo JSON (o base de datos) y devolver un mensaje de confirmación. Muestra ese mensaje en la página.

La url del servidor es https://intranetjacaranda.es/Ejercicios/games.php
*/


const form = document.getElementById('gameForm');
const statusDiv = document.getElementById('status');

const serverUrl = 'https://intranetjacaranda.es/Ejercicios/games.php';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText); 
            statusDiv.textContent = response.message; 
            statusDiv.style.color = 'green'; 
        } else {
            
            statusDiv.textContent = 'Error al enviar los datos: ' + xhr.statusText;
            statusDiv.style.color = 'red'; 
        }
    };
  
    xhr.onerror = function() {
        statusDiv.textContent = 'Error de conexión al servidor.';
        statusDiv.style.color = 'red';
    };

    xhr.open('POST', serverUrl, true);
    xhr.send(formData);
});