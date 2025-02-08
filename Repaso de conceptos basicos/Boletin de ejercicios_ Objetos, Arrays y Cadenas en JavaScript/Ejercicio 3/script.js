/*
Ejercicio 3: Generador de acrónimos
Escribe una función que tome un array de objetos, donde cada objeto representa una frase, y genere un 
acrónimo para cada frase. El acrónimo debe formarse tomando la primera letra de cada palabra de la frase y 
convirtiéndola a mayúscula.

Ejemplo:

let phrases = [
  { phrase: "Hyper Text Markup Language" },
  { phrase: "Cascading Style Sheets" },
  { phrase: "Object Oriented Programming" }
];
Tareas:

1.Crea una función que genere el acrónimo para cada frase y lo añada como una nueva propiedad acronym en 
cada objeto.

2.Utiliza map() para devolver un array de objetos con los acrónimos ya generados.

3.Filtra las frases que contengan más de tres palabras y devuelve solo esas frases con su acrónimo.
*/
let phrases = [
    { phrase: "Hyper Text Markup Language" },
    { phrase: "Cascading Style Sheets" },
    { phrase: "Object Oriented Programming" }
];
  
//1 y 2
  
function generateAcronyms(phrases) {
    return phrases.map(obj => {
      const acronym = obj.phrase
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
      return { ...obj, acronym };
    });
}
  
const phrasesWithAcronyms = generateAcronyms(phrases);
console.log(phrasesWithAcronyms);
  
//3
  
const filteredPhrases = phrasesWithAcronyms.filter(obj => obj.phrase.split(' ').length > 3);
console.log(filteredPhrases);