document.addEventListener('DOMContentLoaded', () => {
    const fridgeList = document.querySelector('#fridge-list');
    const shoppingList = document.querySelector('#shopping-list');
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const [nameInput, quantityInput] = form.querySelectorAll('input');
            const list = form.id.includes('fridge') ? fridgeList : shoppingList;
            addProductToList(list, nameInput, quantityInput);
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.classList.contains('delete-product')) return;
        
        const listItem = e.target.parentElement;
        const list = listItem.parentElement;
        listItem.remove();

        if (list === fridgeList) shoppingList.appendChild(listItem.cloneNode(true));
        updateLocalStorage();
    });

    function addProductToList(list, nameInput, quantityInput) {
        if (!nameInput.value || quantityInput.value <= 0) return;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${nameInput.value} (${quantityInput.value}) 
            <button class="btn btn-danger delete-product">Eliminar</button>`;
        list.appendChild(listItem);

        nameInput.value = '';
        quantityInput.value = '';
        updateLocalStorage();
    }

    function updateLocalStorage() {
        const saveList = list => [...list.children].map(item => item.innerHTML);
        localStorage.setItem('fridgeItems', JSON.stringify(saveList(fridgeList)));
        localStorage.setItem('shoppingItems', JSON.stringify(saveList(shoppingList)));
    }

    function loadFromLocalStorage() {
        const loadList = (items, list) => items.forEach(item => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item;
            addProductToList(list, { value: tempDiv.textContent.split(' (')[0] }, { value: tempDiv.textContent.match(/\d+/)[0] });
        });

        loadList(JSON.parse(localStorage.getItem('fridgeItems')) || [], fridgeList);
        loadList(JSON.parse(localStorage.getItem('shoppingItems')) || [], shoppingList);
    }

    loadFromLocalStorage();
});