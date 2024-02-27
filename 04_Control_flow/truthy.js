// TRUTHY VALUES AND FALSEY VALUES

const userEmail ="Ayush.at7@gmail.com"

if (userEmail) {                          
    console.log("Got user email");

} else{
    console.log("dont have user email");
}


// FALSY VALUES

// false, 0, -0, BigInt 0n, "", null, undefined, NaN     

// TRUTHY VALUES

// "0", 'false', " ", [], {}, function(){},  


// Nullish Coalescing Operator (??): null undefined  

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 =  undefined ?? 15
val1 = null ?? 10 ?? 12


console.log(val1);



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<= 80 ? console.log("less than 80") : console.log("more than 80");