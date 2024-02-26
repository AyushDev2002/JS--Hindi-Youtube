// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktimaan", "Superman"]

const myArr2 = new Array(1, 2, 3, 4, 5)    // Also a way to represent array

console.log(myArr[3]);

// Array Methods 

myArr.push(6)    //pushes value at end of array and increase the length of array permanently
myArr.push(7)
myArr.pop()

myArr.unshift(9)   //pushes value at the front of array and shift other value to right and does not increase the size of array
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()   // To convert any array into string permanently

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// Slice and Spice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)       // Slice returns given values as a new array but does not change original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)      // Slice returns given values and adds or remove values from array and overwrite array, first two element pops last two pushes
console.log("C", myArr);
console.log(myn2);
