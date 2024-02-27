const user = {                        // Object
    username: "Ayush",
    price: 999,

    welcomeMessage: function(){         // function inside a object
        console.log(`${this.username} , Welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//         let username = "Ayush"
//         console.log(this.username)          //this. is only work if function is inside a object
// }

// chai()

// const chai = function (){
//     let username = "Ayush"
//     console.log(this.username);
// }


const chai = () => {                 //
    let username = "Ayush"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                             //  Explicit return

// }

// const addTwo = (num1, num2) =>  num1 + num2       // Implicit return function

// const addTwo = (num1, num2) =>  (num1 + num2)       // Implicit return function

const addTwo = (num1, num2) => ({username: "Ayush"})

console.log(addTwo(3, 4))

const myArray = [2, 5, 7, 8, 9]

myArray.forEach(() => ())