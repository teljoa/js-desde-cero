/*
Ejercicio 5: Eliminar usuarios con confirmación
Crea una tabla HTML que cargue y muestre todos los usuarios del servidor. Cada fila debe incluir:

ID del usuario
Nombre
Correo electrónico
Un botón "Eliminar"
Al pulsar el botón "Eliminar", muestra un cuadro de confirmación utilizando confirm para asegurarte de que el usuario realmente desea eliminar el elemento. 
Si el usuario acepta, envía una solicitud DELETE al servidor y actualiza la tabla.

<table id="userTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
Explicación de confirm
confirm es una función nativa de JavaScript que muestra un cuadro de diálogo con un mensaje y dos botones:

Aceptar: Devuelve true si el usuario confirma la acción.
Cancelar: Devuelve false si el usuario rechaza la acción.
Por ejemplo, el siguiente código muestra cómo usar confirm:

if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
    console.log('El usuario confirmó la acción.');
} else {
    console.log('El usuario canceló la acción.');
}
En este ejercicio, deberás usar confirm para evitar que un usuario elimine un elemento por error y solo ejecutar la acción de eliminación si se confirma.
*/
function cargarUsuarios() {
    fetch('/api/usuarios') 
        .then(response => response.json())
        .then(usuarios => {
            const tbody = document.querySelector('#userTable tbody');
            tbody.innerHTML = '';
            usuarios.forEach(usuario => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.email}</td>
                    <td><button onclick="eliminarUsuario(${usuario.id})">Eliminar</button></td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
}
function eliminarUsuario(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        fetch(`/api/usuarios/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                alert('Usuario eliminado correctamente');
                cargarUsuarios();
            } else {
                alert('Error al eliminar el usuario');
            }
        })
        .catch(error => console.error('Error al eliminar usuario:', error));
    } else {
        console.log('El usuario canceló la acción.');
    }
}
window.onload = function() {
    cargarUsuarios();
};