// const sentence = "JavaScript is a powerful and popular programming language";

// // 1. Convert the string to uppercase
// const ziya = sentence.toUpperCase();
// console.log("Uppercase mein hgya:", ziya);

// // 2. Convert the string to lowercase
// const lowercaseSentence = sentence.toLowerCase();
// console.log("Lowercase:", lowercaseSentence);

// 3. Find the index of the word "popular"
// const indexOfPopular = sentence.indexOf("popular")
// console.log("Index of 'popular':", indexOfPopular);

// // 4. Extract the word "powerful" using slice()
// const startIndex = sentence.indexOf("powerful");
// const endIndex = startIndex + "powerful".length;
// const powerfulWord = sentence.slice(startIndex, endIndex);
// console.log("Extracted word 'powerful':", powerfulWord);

// // 5. Replace "JavaScript" with "JS" using replace()
// const replacedSentence = sentence.replace("JavaScript", "JS");
// console.log("Replaced 'JavaScript' with 'JS':", replacedSentence);

// // 6. Check if the string contains the word "language" using includes()
// const containsLanguage = sentence.includes("language");
// console.log("Contains 'language':", containsLanguage);



const sentence="JavaScript is a powerful and popular programming language.";
const uppercae=sentence.toUpperCase();
console.log(uppercae);
const lowercase=sentence.toLowerCase();
console.log(lowercase);
const indexOfPopular = sentence.indexOf("popular")
console.log("Index of 'popular':", indexOfPopular);
const startIndex = sentence.indexOf("powerful");
const endIndex = startIndex + "powerful".length;
const powerfulWord = sentence.slice(startIndex, endIndex);
console.log("Extracted word 'powerful':", powerfulWord);
const replacedSentence = sentence.replace("JavaScript", "JS");
console.log("Replaced 'JavaScript' with 'JS':", replacedSentence);
const containsLanguage = sentence.includes("language");
console.log("Contains 'language':", containsLanguage);