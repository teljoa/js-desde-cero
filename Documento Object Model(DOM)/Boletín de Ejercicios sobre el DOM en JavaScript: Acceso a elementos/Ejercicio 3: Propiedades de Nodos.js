/*
3.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable.

3.2. Utiliza la propiedad innerHTML para obtener el contenido HTML completo del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.

3.3. Emplea la propiedad textContent para obtener el contenido de texto del párrafo obtenido en el ejercicio 3.1. Imprime el contenido en la consola.

3.4. Utiliza document.querySelector() para obtener el primer input de tipo "text" en tu página web de ejemplo. Almacena este nodo en una variable.

3.5. Usa la propiedad value para obtener el valor del input obtenido en el ejercicio

3.6. Imprime el valor en la consola, al menos de 2 formas:

El innerHTML de la etiqueta de ‘Escoge sexo’

El textContent de esa etiqueta

El valor del primer input de sexo

El valor del sexo que esté seleccionado (difícil, búscalo por Internet)
*/

const lipsumPara = document.querySelector('#lipsum p');

console.log(lipsumPara.innerHTML);

console.log(lipsumPara.textContent);

const textInput = document.querySelector('input[type="text"]');

console.log(textInput.value);

const sexLabelHTML = document.querySelector('label[for="sexo"]').innerHTML;
console.log(sexLabelHTML);

const sexLabelText = document.querySelector('label[for="sexo"]').textContent;
console.log(sexLabelText);

const firstSexInputValue = document.querySelector('input[name="sexo"]').value;
console.log(firstSexInputValue);

const selectedSex = document.querySelector('input[name="sexo"]:checked');
console.log(selectedSex ? selectedSex.value : 'Ninguno seleccionado');