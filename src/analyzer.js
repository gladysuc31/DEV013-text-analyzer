const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(/\s+/);
    // Contar la cantidad de palabras utilizando length
    const wordCount = words.length;
    // Retornar el resultado
    return wordCount;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const words = text;
    const characterCount = words.length;
    return characterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // declarar la constante que tendra el texto que se ponga en el input y separarlo en un array
    // crear el for..of loop que iterara sobre los caracteres
    // si el caracter es una letra que lo tome en cuenta
    // si no es, no tomarlo en cuenta
    const words = text;
    let count = 0;

    for (const currentletter of words) {
      if(currentletter.match(/[a-zA-Z]/)) {
        count++;
      }
    }
    return count;
  },
  getAverageWordLength: (text) => { 
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // identificar cuantas palabras hay
    // calcular la longitud de cada palabra
    // calcular el promedio 
    const words = text.split(/\s+/);

    
    let wordLength = 0;

    for (const currentWord of words) {
      wordLength += currentWord.length;
    }

    const average = wordLength / words.length;
    return parseFloat(average.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text;
    let numberCounter = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].match(/\d+/g)) {
        numberCounter++;
      }
    }
    
    return numberCounter;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // determinar cuales son los numeros
    // separarlos en un array
    // sumar los numeros
    // retornar el resultado
    const numbers = text;
    const numbersArray = [];
    let totalSum = 0;
    
    for (const num of numbers) {
      if (num.match(/\d+/g)) {
        const number = parseFloat(num);
        numbersArray.push(number);
      }
    }
  
    for (const num of numbersArray){
      totalSum += num;
    } 
    return totalSum;},
};
export default analyzer;
