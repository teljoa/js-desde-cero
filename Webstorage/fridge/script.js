document.addEventListener('DOMContentLoaded', function () {
    const fridgeList = document.getElementById('fridge-list');
    const shoppingList = document.getElementById('shopping-list');
    const fridgeForm = document.getElementById('add-to-fridge-form');
    const fridgeProductNameInput = document.getElementById('product-name-fridge');
    const fridgeProductQuantityInput = document.getElementById('product-quantity-fridge');
    const shoppingForm = document.getElementById('add-to-shopping-list-form');
    const shoppingProductNameInput = document.getElementById('product-name-shopping');
    const shoppingProductQuantityInput = document.getElementById('product-quantity-shopping');

    fridgeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addProductToList(fridgeList, fridgeProductNameInput, fridgeProductQuantityInput);
    });

    shoppingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addProductToList(shoppingList, shoppingProductNameInput, shoppingProductQuantityInput);
    });

    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('delete-product')) {
            const listItem = e.target.parentElement;
            const list = listItem.parentElement;
            list.removeChild(listItem);

            if (list === fridgeList) {
                const shoppingListItem = listItem.cloneNode(true);
                shoppingList.appendChild(shoppingListItem);
            }
            updateLocalStorage();
        }
    });

    function addProductToList(list, nameInput, quantityInput) {
        const productName = nameInput.value;
        const productQuantity = quantityInput.value;

        if (productName && productQuantity > 0) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${productName} (${productQuantity}) <button class="btn btn-danger delete-product">Eliminar</button>`;
            listItem.className = 'list-group-item';
            list.appendChild(listItem);
            nameInput.value = '';
            quantityInput.value = '';
            updateLocalStorage();
        }
    }

    function updateLocalStorage() {
        const fridgeItems = [];
        const shoppingItems = [];

        for (const item of fridgeList.children) {
            fridgeItems.push(item.innerHTML);
        }
        for (const item of shoppingList.children) {
            shoppingItems.push(item.innerHTML);
        }
        localStorage.setItem('fridgeItems', JSON.stringify(fridgeItems));
        localStorage.setItem('shoppingItems', JSON.stringify(shoppingItems));
    }

    function loadFromLocalStorage() {
        const fridgeItems = JSON.parse(localStorage.getItem('fridgeItems')) || [];
        const shoppingItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];

        for (const item of fridgeItems) {
            const listItem = document.createElement('li');
            listItem.innerHTML = item;
            listItem.className = 'list-group-item';
            listItem.innerHTML += ' <button class="btn btn-danger delete-product">Eliminar</button>';
            fridgeList.appendChild(listItem);
        }
        for (const item of shoppingItems) {
            const listItem = document.createElement('li');
            listItem.innerHTML = item;
            listItem.className = 'list-group-item';
            listItem.innerHTML += ' <button class="btn btn-danger delete-product">Eliminar</button>';
            shoppingList.appendChild(listItem);
        }
    }
    loadFromLocalStorage();
});