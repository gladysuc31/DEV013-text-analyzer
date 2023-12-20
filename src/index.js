import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// boton de reset 
const resetButton = document.getElementById("reset-button");
const areabox = document.querySelector("textarea");

resetButton.addEventListener("click",function() {
    areabox.value = "";
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
    const updatedText = analyzer.getWordCount(inputText)
    wordCount.textContent = "Palabras " + updatedText
})

areabox.addEventListener("input",function(){
    //guardar el input ingresado
    const inputText = areabox.value;
    //llamar al analyzer con el valor del argumento guardado
    const updatedText = analyzer.getCharacterCount(inputText)
    characterCount.textContent = "Caracteres " + updatedText
})

areabox.addEventListener("input",function(){
    //guardar el input ingresado
    const inputText = areabox.value;
    //llamar al analyzer con el valor del argumento guardado
    const updatedText = analyzer.getCharacterCountExcludingSpaces(inputText)
    characterNoSpacesCount.textContent = "Caracteres sin espacio " + updatedText
})

areabox.addEventListener("input",function(){
    //guardar el input ingresado
    const inputText = areabox.value;
    //llamar al analyzer con el valor del argumento guardado
    const updatedText = analyzer.getNumberCount(inputText)
    numberCount.textContent = "Numeros " + updatedText
})

areabox.addEventListener("input",function(){
    //guardar el input ingresado
    const inputText = areabox.value;
    //llamar al analyzer con el valor del argumento guardado
    const updatedText = analyzer.getNumberSum(inputText)
    numberSum.textContent = "Suma numeros " + updatedText
})

areabox.addEventListener("input",function(){
    //guardar el input ingresado
    const inputText = areabox.value;
    //llamar al analyzer con el valor del argumento guardado
    const updatedText = analyzer.getAverageWordLength(inputText)
    wordLength.textContent = "Promedio Longitud " + updatedText
})