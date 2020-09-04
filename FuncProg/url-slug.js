// The global variable
var globalTitle = "  Ae Is Coming";

// Only change code below this line
function urlSlug(title) {
  var t0 = title.slice()
  var t1 = t0.toLowerCase().trim().split(/\s+/)
  var t2 = t1.join("-")
//    console.log(t1)
  return t2
}
// Only change code above this line
// console.log(urlSlug(globalTitle))


function spinalCase(str) {
  str = str.split(/(?=[A-Z])|\s+|[_]+|[-]+/)
  var arr = []
  for(let x=0; x<str.length; x++){
    arr[x] = str[x].toLowerCase()
  }
  str = arr.join("-")
  return str;
}

// console.log(spinalCase("This Is Spinal Tap"))
// console.log(spinalCase("The_Andy_Griffith_Show"))
// console.log(spinalCase("Teletubbies say Eh-o"))
// console.log(spinalCase("thisIsSpinalTap"))

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex))// Returns ["q"]
console.log(quit.match(qRegex)) // Returns ["q"]
