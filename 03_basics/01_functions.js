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

console.log(loginUserMessage())



