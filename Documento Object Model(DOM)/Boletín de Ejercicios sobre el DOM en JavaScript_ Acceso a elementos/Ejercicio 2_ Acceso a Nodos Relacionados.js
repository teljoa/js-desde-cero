/*
2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.

2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.

2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo obtenido en el ejercicio 2.2. Imprime el nodo en la consola.

2.4. Obtén por consola, al menos de 2 formas diferentes:

El primér párrafo que hay dentro del div ‘lipsum’
El segundo párrafo de ‘lipsum’
El último item de la lista
La label de ‘Escoge sexo’
*/

const firstLipsumParagraph = document.querySelector('#lipsum p');

const nextSibling = firstLipsumParagraph.nextElementSibling;

const parentElement = nextSibling.parentElement;

const firstParaLipsum = document.querySelector('#lipsum p');

const secondParaLipsum = document.querySelectorAll('#lipsum p')[1];

const lastListItem = document.querySelector('ul li:last-child');

const sexLabel = document.querySelector('label[for="sexo"]');