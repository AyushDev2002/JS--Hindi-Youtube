const myObject = {
    JS : 'javascript',
    cpp: 'C++',
    Rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["JS", "Ruby", "python", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}