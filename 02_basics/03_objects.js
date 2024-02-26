// singleton

// object literals
// Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name: "Ayush",
    "Full name": "Ayush Tomar",  // This cannot be obtained out by . function
    [mySym]: "myKey1",         // to use a symbol put it in sq brackets
    age: 23,
    location: "Ghaziabad",
    email: "Ayush.at7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)     //this shows a string, not as a symbol
console.log(JsUser[mySym])    

JsUser.email = "Ayush54490@gmail.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
