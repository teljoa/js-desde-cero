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