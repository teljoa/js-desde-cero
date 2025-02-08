/*Ejercicio 2: Sistema de gestión de notas con DOM
Descripción: Extiende el sistema de gestión de notas para que sea interactivo desde el navegador. 
Los alumnos y sus notas deben mostrarse en una lista y será posible añadir alumnos o notas a través de un formulario.

Tareas:

Mostrar alumnos y notas: Al cargar la página, genera una lista de alumnos con sus respectivas notas y promedios. 
Cada alumno debe mostrarse como un elemento de lista.

Formulario de añadir alumnos: Crea un formulario que permita añadir un nuevo alumno. 
Al enviar el formulario, el nuevo alumno debe aparecer en la lista y en el objeto gradebook.

Añadir notas: Cada alumno debe tener un botón que abra un pequeño formulario para añadir una nueva nota. 
Al añadir una nueva nota, el promedio se debe recalcular automáticamente y actualizarse en la lista.

Destacar estudiantes sobresalientes: Utiliza manipulación del DOM para destacar visualmente (por ejemplo, aplicando una clase CSS) 
a los estudiantes cuya nota promedio sea mayor de 8.
*/

let gradebook = [];

function calculateAverage(notes) {
    if (notes.length === 0) return 0;
    const total = notes.reduce((acc, note) => acc + note, 0);
    return total / notes.length;
}

function renderGradebook() {
    const gradebookList = document.getElementById('gradebook');
    gradebookList.innerHTML = '';
    gradebook.forEach((student, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} - Notas:[${student.notes.join(', ')}] - Promedio: ${student.average.toFixed(2)}`;

        if (student.average > 8) {
            listItem.classList.add('student-excellent');
        }
        const addNoteButton = document.createElement('button');
        addNoteButton.textContent = 'Añadir Nota';
        addNoteButton.onclick = () => {
            if (student.notes.length < 3) {
                const note = parseFloat(prompt('Introduce la nueva nota:'));
                if (!isNaN(note)) {
                    student.notes.push(note);
                    student.average = calculateAverage(student.notes); 
                    renderGradebook();
                }
            } else {
                alert('El estudiante ya tiene 3 notas. No se pueden añadir más.');
            }
        };

        listItem.appendChild(addNoteButton);
        gradebookList.appendChild(listItem);
    });
}

document.getElementById('student-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('student-name').value;
    gradebook.push({ name, notes: [], average: 0 });
    event.target.reset();
    renderGradebook();
});

renderGradebook();

/*Ejercicio 2: Sistema de gestión de notas con Web Storage
Nuevas Tareas con Web Storage:

Guardar lista de alumnos en Local Storage: Cada vez que se añada un nuevo alumno o se actualicen sus notas, 
guarda el objeto gradebook en localStorage.

Cargar alumnos desde Local Storage: Al cargar la página, verifica si existe gradebook en localStorage. 
Si es así, carga esa información para mostrar a los alumnos y sus notas.

Botón de reset de notas: Añade un botón que permita limpiar todas las notas de los alumnos y 
reiniciar el gradebook en localStorage.
*/

document.addEventListener("DOMContentLoaded", loadGradebook);
const studentForm = document.getElementById('student-form');
const studentNameInput = document.getElementById('student-name');
const gradebookList = document.getElementById('gradebook');
const resetButton = document.getElementById('reset-btn');

function loadGradebook() {
    let storedGradebook = JSON.parse(localStorage.getItem('gradebook')) || [];
    gradebook = storedGradebook;
    displayGradebook(gradebook);
}

function displayGradebook(gradebook) {
    gradebookList.innerHTML = '';
    gradebook.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} - Nota: ${student.grade || 'No asignada'}`;
        listItem.addEventListener('click', () => editGrade(student, gradebook));
        gradebookList.appendChild(listItem);
    });
}

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = studentNameInput.value.trim();
    if (studentName) {
        let gradebook = JSON.parse(localStorage.getItem('gradebook')) || [];
        const newStudent = { name: studentName, grade: null };
        gradebook.push(newStudent);
        localStorage.setItem('gradebook', JSON.stringify(gradebook));
        displayGradebook(gradebook);
    }
    studentNameInput.value = '';
});

function editGrade(student, gradebook) {
    const grade = prompt(`Asignar o actualizar la nota para ${student.name}:`, student.grade || '');
    if (grade !== null) {
        student.grade = grade;
        localStorage.setItem('gradebook', JSON.stringify(gradebook));
        displayGradebook(gradebook);
    }
}

resetButton.addEventListener('click', function() {
    gradebook = [];
    localStorage.setItem('gradebook', JSON.stringify(gradebook));
    displayGradebook(gradebook);
});