import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// boton de reset 
const resetButton = document.getElementById("reset-button");
const areabox = document.querySelector("textarea");

resetButton.addEventListener("click",function() {
    areabox.value = "";
    wordCount.textContent = "Palabras "
    characterCount.textContent = "Caracteres "
    characterNoSpacesCount.textContent = "Caracteres sin espacio "
    numberCount.textContent = "Numeros "
    numberSum.textContent = "Suma numeros "
    wordLength.textContent = "Promedio Longitud "
})

//para las funciones de los elementos
const wordCount = document.querySelector("[data-testid=word-count]")
const characterCount = document.querySelector("[data-testid=character-count]")
const characterNoSpacesCount = document.querySelector("[data-testid=character-no-spaces-count]")
const numberCount = document.querySelector("[data-testid=number-count]")
const numberSum = document.querySelector("[data-testid=number-sum]")
const wordLength = document.querySelector("[data-testid=word-length-average]")


// agregar un event listener
areabox.addEventListener("input",function(){
    //guardar el input ingresado
    const inputText = areabox.value;
    //llamar al analyzer con el valor del argumento guardado
    const wordCountText = analyzer.getWordCount(inputText)
    wordCount.textContent = "Palabras " + wordCountText

    const characterCountText = analyzer.getCharacterCount(inputText)
    characterCount.textContent = "Caracteres " + characterCountText

    const characterCountExcludingSpacesText = analyzer.getCharacterCountExcludingSpaces(inputText)
    characterNoSpacesCount.textContent = "Caracteres sin espacio " + characterCountExcludingSpacesText

    const numberCountText = analyzer.getNumberCount(inputText)
    numberCount.textContent = "Numeros " + numberCountText

    const numberSumText = analyzer.getNumberSum(inputText)
    numberSum.textContent = "Suma numeros " + numberSumText

    const averageWordLengthText = analyzer.getAverageWordLength(inputText)
    wordLength.textContent = "Promedio Longitud " + averageWordLengthText
})