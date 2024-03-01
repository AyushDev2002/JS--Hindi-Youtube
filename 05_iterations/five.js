const coding = ["JS", "Ruby", "Java", "pyhton", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "JS"
    }, 
    {
        languageName: "java",
        languageFile: "JAVA"
    },
    {
        languageName: "Pyhton",
        languageFile: "Py"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})