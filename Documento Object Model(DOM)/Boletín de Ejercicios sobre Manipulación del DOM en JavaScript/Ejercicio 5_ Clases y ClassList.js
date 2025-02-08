/*
Ejercicio 5: Clases y ClassList
5.1. Utiliza document.querySelector() para obtener un elemento de tu página web y asigna una clase 
"destacado" a este elemento utilizando la propiedad elemento.className.

5.2. Utiliza la propiedad classList para agregar la clase "nuevo-estilo" al elemento obtenido en el 
ejercicio 5.1.

5.3. Emplea la propiedad classList para eliminar la clase "destacado" del elemento obtenido en el 
ejercicio 5.1.

5.4. Comprueba si el elemento obtenido en el ejercicio 5.1 tiene la clase "nuevo-estilo" utilizando el 
método classList.contains().
*/
let elemento = document.querySelector("#miParrafo");
elemento.className = "destacado";

elemento.classList.add("nuevo-estilo");

elemento.classList.remove("destacado");

if (elemento.classList.contains("nuevo-estilo")) {
    console.log("El elemento tiene la clase 'nuevo-estilo'.");
} else {
    console.log("El elemento NO tiene la clase 'nuevo-estilo'.");
}