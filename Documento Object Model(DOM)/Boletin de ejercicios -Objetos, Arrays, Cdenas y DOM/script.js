//Boletín de Ejercicios: Objetos, Arrays, Cadenas y DOM en JavaScript

/*Ejercicio 1: Sistema de gestión de inventario con DOM

Descripción: Extiende el sistema de gestión de inventario anterior añadiendo 
interacción con el DOM. El inventario se mostrará en una tabla HTML y el usuario 
podrá añadir o eliminar artículos usando formularios.

Tareas:

Crear la tabla del inventario: Al cargar la página, genera dinámicamente una tabla 
que muestre los artículos del inventario, incluyendo sus nombres, cantidades y 
precios.*/

let inventory=[];

const inventoryTable=document.getElementById('inventory').getElementsByTagName('table')[0];
const addItem=document.getElementById('item-add');

function createTable(){
    inventoryTable.innerHTML = '';

    inventory.forEach((item, index) => {
        const row = inventoryTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td><button onclick="deleteItem(${index})">Eliminar</button></td>
        `;
        destace(item);
    })
}
/*Formulario de añadir artículos: Añade un formulario con los campos necesarios 
(nombre, cantidad, precio) para que el usuario pueda agregar nuevos artículos al 
inventario. Al enviar el formulario, se debe actualizar la tabla y el objeto 
inventory en JavaScript.*/

function addItem(event) {
    event.preventDefault();

    const name = document.getElementById('item-name').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const price = parseFloat(document.getElementById('item-price').value);

    inventory.push({ name, quantity, price });
    renderTable();

    addItemForm.reset();
}

/*Eliminar artículo: Añade un botón "Eliminar" junto a cada artículo en la tabla. 
Al hacer clic, se debe eliminar el artículo tanto de la tabla como del objeto 
inventory.*/

function deleteItem(){
    inventory.splice(index, 1);
    renderTable();
}

/*Destacar artículos caros: Usa manipulación del DOM para aplicar una clase CSS 
que destaque visualmente (por ejemplo, con un color de fondo diferente) 
los artículos cuyo precio sea mayor de 50.*/

function destace(item){
    if (item.price > 50) {
            row.classList.add('caro');
        }
}

/*Ejercicio 2: Sistema de gestión de notas con DOM

Descripción: Extiende el sistema de gestión de notas para que sea interactivo 
desde el navegador. Los alumnos y sus notas deben mostrarse en una lista y 
será posible añadir alumnos o notas a través de un formulario.

Tareas:

Mostrar alumnos y notas: Al cargar la página, genera una lista de alumnos con sus 
respectivas notas y promedios. Cada alumno debe mostrarse como un elemento de 
lista.*/

const gradebook = [];

document.getElementById('student-form')

function addStudent(name) {
    const student = { name, grades: [],average};
    gradebook.push(student);
    renderStudents();
}


function calculateAverage(){
  gradebook.students.forEach(student => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    student.average = total / student.grades.length;
  });
}

/*Formulario de añadir alumnos: Crea un formulario que permita añadir un nuevo alumno. 
Al enviar el formulario, el nuevo alumno debe aparecer en la lista y en el objeto 
gradebook.*/

function renderStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    gradebook.forEach((student, index) => {
        const li = document.createElement('li');
        li.className = 'student';
        
        const average = calculateAverage(student.grades);
        li.innerHTML = `
            ${student.name} - average: ${average.toFixed(3)}
            <button onclick="showGradeForm(${index})">Añadir Nota</button>
        `;
        destaceAlum();
    });
}

/*Añadir notas: Cada alumno debe tener un botón que abra un pequeño formulario para 
añadir una nueva nota. Al añadir una nueva nota, el promedio se debe recalcular 
automáticamente y actualizarse en la lista.*/
function showGradeForm(studentIndex) {
    const grade = prompt('Introduce la nota:');
    if (grade !== null) {
        addGrade(studentIndex, parseFloat(grade));
    }
}


/*Destacar estudiantes sobresalientes: Utiliza manipulación del DOM para destacar 
visualmente (por ejemplo, aplicando una clase CSS) a los estudiantes cuya nota 
promedio sea mayor de 8.*/

function destaceAlum(item){
    if (average > 8) {
            li.classList.add('sobreling');
        }
}

/*Ejercicio 3: Generador de acrónimos interactivo

Descripción: Añade una interfaz gráfica al generador de acrónimos. 
El usuario podrá introducir frases en un formulario y el acrónimo se 
generará y mostrará automáticamente en pantalla.

Tareas:

Formulario de entrada: Crea un formulario donde el usuario pueda introducir una 
frase.

Generar acrónimos dinámicamente: Al enviar el formulario, genera el acrónimo de 
la frase ingresada y muéstralo debajo del formulario.

Filtrar frases largas: Si la frase tiene más de tres palabras, aplícale una clase 
CSS diferente para destacarla.

Botón de reset: Añade un botón que permita borrar la lista de acrónimos generados 
y reiniciar el formulario.*/
function generateAcronym() {
    const input = document.getElementById('phraseInput');
    const phrase = input.value.trim();
    if (phrase === '') return;

    const acronym = phrase.split(' ').map(word => word[0].toUpperCase()).join('');
    const acronymList = document.getElementById('acronymList');

    const newItem = document.createElement('p');
    newItem.textContent = `${acronym} - ${phrase}`;

    if (phrase.split(' ').length > 3) {
        newItem.classList.add('highlight');
    }

    acronymList.appendChild(newItem);
    input.value = ''; 
}

function resetAcronyms() {
    document.getElementById('acronymList').innerHTML = '';
    document.getElementById('phraseInput').value = '';
}
/*Ejercicio 4: Tienda de libros interactiva

Descripción: Extiende el sistema de la tienda de libros para que sea interactivo 
desde el navegador. Los libros deben mostrarse en una tabla y se debe poder 
agregar, eliminar y filtrar libros mediante la interfaz gráfica.

Tareas:

Mostrar libros: Al cargar la página, muestra una tabla con los libros disponibles, 
incluyendo su título, autor, precio y categoría.

Añadir libros: Añade un formulario para que el usuario pueda añadir nuevos libros 
a la tienda. Al enviar el formulario, el libro debe añadirse tanto al objeto 
bookStore como a la tabla.

Filtrar por categoría: Añade un campo de selección que permita filtrar los 
libros por categoría. Al seleccionar una categoría, solo los libros de esa categoría 
deben aparecer en la tabla.

Ordenar por precio: Añade botones para ordenar los libros en la tabla de mayor a 
menor precio y viceversa.*/
let bookStore = [
    { title: "1984", author: "George Orwell", price: 12.99, category: "Ficción" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 15.50, category: "Historia" },
    { title: "El origen de las especies", author: "Charles Darwin", price: 18.75, category: "Ciencia" }
];

function renderBooks(filteredBooks = bookStore) {
    const table = document.getElementById("bookTable");
    table.innerHTML = "";
    filteredBooks.forEach((book, index) => {
        const row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>$${book.price.toFixed(2)}</td>
            <td>${book.category}</td>
            <td><button class="delete" onclick="deleteBook(${index})">X</button></td>
        </tr>`;
        table.innerHTML += row;
    });
}

function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const category = document.getElementById("category").value;

    if (title && author && !isNaN(price)) {
        bookStore.push({ title, author, price, category });
        renderBooks();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("price").value = "";
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
}

function deleteBook(index) {
    bookStore.splice(index, 1);
    renderBooks();
}

function filterBooks() {
    const selectedCategory = document.getElementById("filterCategory").value;
    if (selectedCategory === "all") {
        renderBooks();
    } else {
        const filtered = bookStore.filter(book => book.category === selectedCategory);
        renderBooks(filtered);
    }
}

function sortBooks(ascending) {
    bookStore.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
    renderBooks();
}

renderBooks();