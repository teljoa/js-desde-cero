/*Ejercicio 4: Tienda de libros interactiva con Web Storage
Nuevas Tareas con Web Storage:

Guardar lista de libros en Local Storage: Cada vez que se añada o elimine un libro, guarda la lista actualizada de libros en localStorage.

Cargar libros desde Local Storage: Al cargar la página, verifica si existen libros guardados en localStorage. 
Si es así, utiliza estos datos para mostrar la lista de libros en la tabla.

Mantener filtros y ordenación en Local Storage: Puedes guardar el último filtro y orden aplicado en localStorage, de manera que, 
al recargar, se mantenga el estado de la vista.

Botón de reset para libros: Añade un botón que borre todos los libros de la lista y limpie también el localStorage.
*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('book-form');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const priceInput = document.getElementById('price');
    const categorySelect = document.getElementById('category');
    const filterCategory = document.getElementById('filter-category');
    const bookTableBody = document.querySelector('#book-table tbody');
    const resetButton = document.getElementById('reset-inventory');
    const sortAscButton = document.getElementById('sort-asc');
    const sortDescButton = document.getElementById('sort-desc');
    let books = JSON.parse(localStorage.getItem('books')) || [];
    let lastFilter = localStorage.getItem('lastFilter') || '';
    let lastSortOrder = localStorage.getItem('lastSortOrder') || '';

    function loadBooks() {
        bookTableBody.innerHTML = '';

        const filteredBooks = books.filter(book => {
            return lastFilter === '' || book.category === lastFilter;
        });

        if (lastSortOrder === 'asc') {
            filteredBooks.sort((a, b) => a.price - b.price);
        } else if (lastSortOrder === 'desc') {
            filteredBooks.sort((a, b) => b.price - a.price);
        }
        filteredBooks.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.price}€</td>
                <td>${book.category}</td>
                <td><button class="delete-btn" data-title="${book.title}">Eliminar</button></td>
            `;
            bookTableBody.appendChild(row);
        });
        localStorage.setItem('lastFilter', lastFilter);
        localStorage.setItem('lastSortOrder', lastSortOrder);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;
        const price = parseFloat(priceInput.value);
        const category = categorySelect.value;

        if (title && author && price > 0 && category) {
            const newBook = { title, author, price, category };
            books.push(newBook);
            localStorage.setItem('books', JSON.stringify(books));

            loadBooks();
            form.reset();
        } else {
            alert("Por favor, complete todos los campos correctamente.");
        }
    });

    bookTableBody.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('delete-btn')) {
            const bookTitle = e.target.getAttribute('data-title');
            books = books.filter(book => book.title !== bookTitle);
            localStorage.setItem('books', JSON.stringify(books));

            loadBooks();
        }
    });

    filterCategory.addEventListener('change', () => {
        lastFilter = filterCategory.value;
        loadBooks();
    });

    sortAscButton.addEventListener('click', () => {
        lastSortOrder = 'asc';
        loadBooks();
    });

    sortDescButton.addEventListener('click', () => {
        lastSortOrder = 'desc';
        loadBooks();
    });

    resetButton.addEventListener('click', () => {
        books = [];
        localStorage.removeItem('books');
        localStorage.removeItem('lastFilter');
        localStorage.removeItem('lastSortOrder');
        loadBooks();
    });
    loadBooks();
});