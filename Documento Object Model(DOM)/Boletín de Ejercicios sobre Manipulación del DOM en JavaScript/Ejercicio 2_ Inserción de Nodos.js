/*
Ejercicio 2: Inserción de Nodos
2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id 
"lipsum" en tu página web de ejemplo. Almacena este nodo en una variable llamada primerParrafo.

2.2. Crea un nuevo elemento <p> con el texto "Este es el nuevo segundo párrafo" y almacénalo en 
una variable llamada nuevoParrafo.

2.3. Utiliza el método primerParrafo.before(nuevoParrafo) para insertar nuevoParrafo antes del 
primer párrafo dentro del div "lipsum".
*/
let primerParrafo = document.querySelector("#lipsum p");

let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es el nuevo segundo párrafo";

primerParrafo.before(nuevoParrafo);