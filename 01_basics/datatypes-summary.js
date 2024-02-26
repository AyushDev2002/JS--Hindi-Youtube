// # primitive data types

// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34565654654656546546n    // bigint // 



// Reference Type or Non Premitive 

// Arrays, Objects, Functions

const heroes = ["shaktiman", "nagarjuna", "doga" ]
let myObj = {
    name: "Ayush",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heroes);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack  (Primitive), Heap (Non Primitive)

let myYoutubeName = "Future Techno"

let anotherName = myYoutubeName

anotherName = "Thexecuter"
console.log(myYoutubeName)
console.log(anotherName)  

// Anything change in string goes to stack and copies the stuff and let original value intact

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Anything change in object goes to heap and change the original value