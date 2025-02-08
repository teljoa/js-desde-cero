/*
Ejercicio 3: Reemplazo y Eliminación de Nodos
3.1. Utiliza document.querySelector() para obtener el primer elemento <li> dentro de una lista en 
tu página web de ejemplo. Almacena este nodo en una variable llamada primerElemento.

3.2. Crea un nuevo elemento <li> con el texto "Nuevo elemento de lista" y almacénalo en una variable 
llamada nuevoElemento.

3.3. Utiliza el método primerElemento.replaceWith(nuevoElemento) para reemplazar el primerElemento con 
el nuevoElemento dentro de la lista.

3.4. Utiliza el método nuevoElemento.remove() para eliminar el nuevoElemento de la página.
*/
let primerElemento = document.querySelector("#miLista li");

let nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Nuevo elemento de lista";

primerElemento.replaceWith(nuevoElemento);

setTimeout(() => {
    nuevoElemento.remove();
}, 2000);