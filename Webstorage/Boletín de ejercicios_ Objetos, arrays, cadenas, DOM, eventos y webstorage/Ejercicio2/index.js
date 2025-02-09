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