// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Ayush"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Ayush"
    if (username === "Ayush") {
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username)


//++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num+1
}

addTwo(5)                                   // it cannot be accessed because now we just dont declare a function instead we put it in a variable also
const addTwo = function(num){
    return num+2
}

