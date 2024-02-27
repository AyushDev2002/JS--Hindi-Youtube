// console.log("A");
// console.log("Y");
// console.log("U");
// console.log("S");
// console.log("H");


function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); 
// }
// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2
//     console.log("Ayush");
//     return number1 + number2                          // after return statement function stop working
// }

// addTwoNumbers(3, 4)    // (_, _) provide value to variable
// addTwoNumbers(3, "4")    // now JS conclude both as string

// What if put function in a varibale and print
  
// const result = addTwoNumbers(3, 5)   // we cannot put function call in variable until return wasnt declared

    // console.log("Result : ", result);    

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 500, 600));   // return only a single value to do all include ... in declaration

const user = {
    username: "Ayush",
    price: 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));