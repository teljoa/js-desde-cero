/*Ejercicio 1: Sistema de gestión de inventario con Web Storage
Nuevas Tareas con Web Storage:

Guardar inventario en Local Storage: Cada vez que se añada o elimine un artículo, guarda el inventario actualizado en localStorage. 
Así, si el usuario recarga la página, el inventario se mostrará como estaba antes.

Cargar inventario desde Local Storage: Al cargar la página, revisa si existe un inventario en localStorage. 
Si es así, usa esos datos para inicializar la tabla de inventario.

Botón de reset de inventario: Añade un botón que permita limpiar todo el inventario y también eliminar los datos guardados en localStorage.
*/ 
let inventory = [];

function renderTable() {
    const tableBody = document.querySelector('#inventory-table tbody');
    tableBody.innerHTML = '';

    inventory.forEach((item, index) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);
        const priceCell = document.createElement('td');
        priceCell.textContent = item.price;
        row.appendChild(priceCell);

        if (item.price > 50) {
            row.classList.add('tr-expensive');
        }
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => {
            inventory.splice(index, 1);
            saveToLocalStorage();
            renderTable();
        };
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function loadFromLocalStorage() {
    const savedInventory = localStorage.getItem('inventory');
    if (savedInventory) {
        inventory = JSON.parse(savedInventory);
        renderTable();
    }
}

loadFromLocalStorage();

document.getElementById('inventory-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('item-name').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const price = parseFloat(document.getElementById('item-price').value);

    inventory.push({ name, quantity, price });

    saveToLocalStorage();

    event.target.reset();
    renderTable();
});

document.getElementById('reset-inventory').addEventListener('click', () => {
    inventory = [];
    localStorage.removeItem('inventory');
    
    renderTable();
});