let modeBtn = document.querySelector('#mode')

let currMode = 'light'
let body = document.querySelector('body')
let p = document.querySelector("p")

// modeBtn.addEventListener("click", () => {
//     if (currMode === 'light') {
//         currMode = 'dark'
//         body.style.backgroundColor = 'black'
//         p.style.color = 'white'
//     }
//     else{
//         currMode = 'light'
//         body.style.backgroundColor = 'white'
//         p.style.color = 'black'
//     }
//     console.log(currMode);
// })


modeBtn.addEventListener("click", () => {
        if (currMode === 'light') {
            currMode = 'dark'
            body.classList.add("dark")
            body.classList.remove("light")
     
        }
        else{
            currMode = 'light'
            body.classList.add("light")
            body.classList.remove("dark")
          
        }
        console.log(currMode);

        })