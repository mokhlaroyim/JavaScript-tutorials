// match literal string
let myStr = "MyNameIs";
let name = /Name/;
let result = name.test(myStr);
console.log(result);

var myStr1 = "What is it? Is t dog ?";
tipleA.test(A2); // Returns false
var find = /dog|cat|bird/;
var result1 = find.test(myStr1);
console.log(result1);

var myStr2 = "CASEinsensitive?";
var find2 = /caseINSENSITIVE/i;
var result2 = find2.test(myStr2);
console.log(result2);

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex));

let twinkle = "Twinkle, twinkle little star";
let find_twinkle = /twinkle/gi;
console.log(twinkle.match(find_twinkle));

// wilcard /./

let word = "Sun shines, gun shootes";
let count = /[uieo]/g;  //finds all vowel in the string word
let output = word.match(count);
console.log(output);

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/; // сопоставляется с началом ввода слова Ricky 
console.log(firstRegex.test(firstString));

let theEnding = "This is a never ending story";
let storyRegex = /story$/;  //сопоставляется с концом ввода слова
storyRegex.test(theEnding);

// a shortcut to match alphanumerics [A-Za-z0-9_] using \w and non alphamumeric \W
// \d match all digits [0-9] and non-digit \D 
// match whitespace \s => [\r\t\f\n\v] carriage return, tab, form feed, and new line characters

//You can specify the lower and upper number of patterns with quantity specifiers. 
//Quantity specifiers are used with curly brackets ({ and }). To match a certain range of patterns
// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4); // Returns true
// lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex))// Returns ["q"]
console.log(noquit.match(qRegex)) // Returns ["q"]

let str = "1 turkey costs 30€";

console.log(str.match(/\d+(?=€)/) ); 

