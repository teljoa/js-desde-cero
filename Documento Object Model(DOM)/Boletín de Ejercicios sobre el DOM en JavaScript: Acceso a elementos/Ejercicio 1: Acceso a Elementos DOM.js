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

//1
let nodo = document.getElementById('main');

console.log(main);
//2
let error = document.getElementsByClassName('error');

console.log(error);
//3
let parrafos = document.getElementsByTagName('p');

console.log(p);
//4
let error1 = document.querySelector('p.error');

console.log(error1);
//5
let error2 = document.querySelectorAll('p.error');

console.log(error2);
//6

//a
const input = document.getElementById('input2');
//b
const parrafos2 = document.getElementsByClassName('p');
//c
const lipsumParagraphs = document.querySelectorAll('#lipsum p');
//d
const etiForm = document.querySelector('form');
//e
const allInputs = document.querySelectorAll('input');
//f
const sexInputs = document.getElementsByName('sexo');
//g
const importantItems = document.querySelectorAll('li.important');