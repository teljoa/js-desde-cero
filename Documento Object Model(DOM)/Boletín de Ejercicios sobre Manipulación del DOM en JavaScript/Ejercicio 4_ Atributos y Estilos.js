/*
Ejercicio 4: Atributos y Estilos
4.1. Utiliza document.querySelector() para obtener un elemento de tu página web que tenga un atributo id. 
Almacena este elemento en una variable.

4.2. Usa el método elemento.setAttribute('nombreAtributo', 'valor') para agregar un atributo "data-nuevo" 
con el valor "123" al elemento obtenido en el ejercicio 4.1.

4.3. Utiliza el método elemento.removeAttribute('nombreAtributo') para eliminar el atributo "data-nuevo" 
del elemento.

4.4. Cambia el color de fondo de un elemento de tu página web utilizando la propiedad style.backgroundColor.
Asegúrate de que el cambio de estilo se realice mediante JavaScript.
*/
let elemento = document.querySelector("#miElemento");


elemento.setAttribute("data-nuevo", "123");
console.log("Atributo agregado:", elemento.getAttribute("data-nuevo"));

elemento.removeAttribute("data-nuevo");
console.log("Atributo eliminado:", elemento.getAttribute("data-nuevo")); 

elemento.style.backgroundColor = "lightblue";