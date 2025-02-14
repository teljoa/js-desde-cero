/*
Ejercicio 4: Modificar un usuario existente
Crea una interfaz para modificar los datos de un usuario existente. Esta debe incluir:

Un elemento <select> que cargue la lista de usuarios desde el servidor al cargarse la página.
Cada opción debe mostrar el nombre del usuario y almacenar su ID.
Un formulario con campos para editar el nombre y correo electrónico del usuario seleccionado.
Cuando se seleccione un usuario en el <select>, el formulario debe rellenarse automáticamente con sus datos.
Al enviar el formulario, realiza una solicitud PUT al servidor para actualizar la información del usuario y muestra un mensaje confirmando el éxito 
de la operación.

Para este ejercicio puedes utilizar el servidor json-server de los ejercicios 1 y 2.

<form id="updateUserForm">
    <select id="userSelect" required>
        <option value="" disabled selected>Seleccione un usuario</option>
    </select>
    <input type="text" name="name" placeholder="Nombre" required>
    <input type="email" name="email" placeholder="Correo electrónico" required>
    <button type="submit">Actualizar Usuario</button>
</form>
<div id="updateMessage"></div>
*/

document.addEventListener("DOMContentLoaded", function() {
    const userSelect = document.getElementById("userSelect");
    const updateUserForm = document.getElementById("updateUserForm");
    const updateMessage = document.getElementById("updateMessage");

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.name;
                userSelect.appendChild(option);
            });
        })
        .catch(error => showMessage("Error al cargar usuarios: " + error, "red"));
    
        userSelect.addEventListener("change", () => {
        const userId = userSelect.value;
        if (userId) {
            fetch(`http://localhost:3000/users/${userId}`)
                .then(response => response.json())
                .then(user => {
                    updateUserForm.name.value = user.name;
                    updateUserForm.email.value = user.email;
                })
                .catch(error => showMessage("Error al cargar los datos del usuario: " + error, "red"));
        }
    });

    updateUserForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userId = userSelect.value;
        if (!userId) return showMessage("Por favor, selecciona un usuario.", "red");

        const updatedUser = {
            name: updateUserForm.name.value,
            email: updateUserForm.email.value
        };

        fetch(`http://localhost:3000/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser)
        })
        .then(response => response.json())
        .then(user => {
            showMessage(`Usuario ${user.name} actualizado correctamente.`, "green");
            updateUserForm.reset();
        })
        .catch(error => showMessage("Error al actualizar el usuario: " + error, "red"));
    });

    function showMessage(message, color) {
        updateMessage.textContent = message;
        updateMessage.style.color = color;
    }
});