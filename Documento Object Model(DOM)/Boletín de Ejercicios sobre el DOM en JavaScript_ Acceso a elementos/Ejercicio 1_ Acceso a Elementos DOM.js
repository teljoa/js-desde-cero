/*
Ejercicio 1: Acceso a Elementos del DOM
1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu página web de ejemplo. Imprime el nodo en la consola.

1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la clase "error" en tu página web de ejemplo. Imprime la colección en la consola.

1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> de tu página web de ejemplo. Imprime la colección en la consola.

1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase "error" en tu página. Imprime el nodo en la consola.

1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase "error" en tu página. Imprime la colección en la consola.

1.6. Obtén por consola, al menos de 2 formas diferentes:

El elemento con id ‘input2’
La colección de párrafos
Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
El formulario (ojo, no la colección con el formulario sino sólo el formulario)
Todos los inputs
Sólo los inputs con nombre ‘sexo’
Los items de lista de la clase ‘important’ (sólo los LI)
*/
let nodo = document.getElementById('main');
console.log(main);

let error = document.getElementsByClassName('error');
console.log(error);

let parrafos = document.getElementsByTagName('p');
console.log(p);

let error1 = document.querySelector('p.error');
console.log(error1);

let error2 = document.querySelectorAll('p.error');
console.log(error2);

const input = document.getElementById('input2');

const parrafos2 = document.getElementsByClassName('p');

const lipsumParagraphs = document.querySelectorAll('#lipsum p');

const etiForm = document.querySelector('form');

const allInputs = document.querySelectorAll('input');

const sexInputs = document.getElementsByName('sexo');

const importantItems = document.querySelectorAll('li.important');