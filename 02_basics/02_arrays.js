const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)    // pushes array inside a array

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const allHeroes = marvel_heroes.concat(dc_heroes)  // to use concat, use a new variable, it joins two arrays

console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // same as concat join two arrays instead of pushing into one another

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]    // Nested array format

const real_another_array = another_array.flat(Infinity)   // use to break nested array and combine all element in one array

console.log(real_another_array);


console.log(Array.isArray("Ayush"))          // To check array exists or not
console.log(Array.from("Ayush"))            // Makes an array out of string
console.log(Array.from({name: "Ayush"}))   // interesting for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))   // Makes array out of declared variables with given value (string or numbers)