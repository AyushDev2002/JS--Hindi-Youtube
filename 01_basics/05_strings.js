const name = "Ayush"
const repoCount = 50

// console.log(name + repoCount + "Value");     //old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ayush-at')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    Ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ayush.com/Ayush%20tomar"

console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));