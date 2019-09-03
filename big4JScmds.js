var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', "misanthropic"];

const result = words.filter(word => word.length > 6);
console.log("Word List: " + words);
console.log("");

console.log("(.filter) Words longer than 6 letters: " + result);

const nextResult = words.map(word => word.length < 6);

console.log("");
console.log("(.map) Words less than 6 letters: " + nextResult);

const reducedWords = words.reduce((longest, word) => 
    (longest, word) > longest.length > word.length ? longest : word, "");
    
console.log("");
console.log("(.reduce) Longest word in array: " + reducedWords);
