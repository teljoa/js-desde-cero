/*Ejercicio 3: Generador de acrónimos interactivo con Web Storage
Nuevas Tareas con Web Storage:

Guardar lista de acrónimos en Local Storage: Cada vez que se genere un acrónimo, guarda la lista de acrónimos en localStorage.

Cargar lista de acrónimos desde Local Storage: Al cargar la página, verifica si existe una lista de acrónimos en localStorage. 
Si es así, muestra los acrónimos guardados previamente.

Botón de reset con Web Storage: Cuando el usuario haga clic en el botón de reset, borra también los acrónimos del localStorage.
 */
document.addEventListener("DOMContentLoaded", () => {
    const acronymForm = document.getElementById("acronym-form");
    const phraseInput = document.getElementById("phrase");
    const acronymList = document.getElementById("acronym-list");
    const resetButton = document.getElementById("reset");
    loadAcronyms();

    acronymForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const phrase = phraseInput.value.trim();
        
        if (phrase) {
            const acronym = generateAcronym(phrase);
            saveAcronym(acronym);
            phraseInput.value = "";
        }
    });

    function generateAcronym(phrase) {
        const words = phrase.split(" ");
        let acronym = words.map(word => word[0].toUpperCase()).join("");
        
        if (acronym.length > 5) {
            acronym = `<span class="long-phrase">${acronym}</span>`;
        }
        return acronym;
    }

    function saveAcronym(acronym) {
        let acronyms = JSON.parse(localStorage.getItem("acronyms")) || [];
        acronyms.push(acronym);
        localStorage.setItem("acronyms", JSON.stringify(acronyms));
        loadAcronyms();
    }

    function loadAcronyms() {
        const acronyms = JSON.parse(localStorage.getItem("acronyms")) || [];
        acronymList.innerHTML = acronyms.map(acronym => {
            return `<div class="acronym-item">${acronym}</div>`;
        }).join("");
    }

    resetButton.addEventListener("click", function() {
        localStorage.removeItem("acronyms");
        loadAcronyms();
    });
});