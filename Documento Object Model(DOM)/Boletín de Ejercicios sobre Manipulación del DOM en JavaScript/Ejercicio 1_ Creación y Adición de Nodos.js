/*
Ejercicio 1: Creación y Adición de Nodos
1.1. Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML <div>. Asigna este 
elemento a una variable llamada nuevoDiv.

1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el contenido "Nuevo 
elemento de lista". Asigna este nodo a una variable llamada textoNuevo.

1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del nuevoDiv. Luego, 
agrega nuevoDiv como último hijo del elemento con el id "lipsum" en tu página web de ejemplo.

1.4. Añade a la página:

Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate 
que una palabra estça en negrita)

Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el INPUT con id ‘input1bis’ 
que al cargar la página tendrá escrito “Hola”
*/
let nuevoDiv = document.createElement("div");

let textoNuevo = document.createTextNode("Nuevo elemento de lista");

nuevoDiv.appendChild(textoNuevo);

document.getElementById("lipsum").appendChild(nuevoDiv);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = 'Nuevo párrafo añadido por <strong>javascript</strong>';
document.getElementById("lipsum").appendChild(nuevoParrafo);

let form = document.getElementById("miFormulario");

let nuevaEtiqueta = document.createElement("label");
nuevaEtiqueta.setAttribute("for", "input1bis");
nuevaEtiqueta.textContent = "Dato 1 bis:";

let nuevoInput = document.createElement("input");
nuevoInput.setAttribute("type", "text");
nuevoInput.setAttribute("id", "input1bis");
nuevoInput.setAttribute("value", "Hola");

form.appendChild(nuevaEtiqueta);
form.appendChild(nuevoInput);