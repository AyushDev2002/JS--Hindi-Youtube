let boxes = document.querySelectorAll(".box")                             // All Buttons
let resetbtn = document.querySelector("#reset")                           // Reset Button
let newGameBtn = document.querySelector('#new-btn')                       // New Game Button
let msgContainer = document.querySelector('.msg-container')               // Div for new game button
let msg = document.querySelector('#msg')                                  // winner text

let turnO = true;

const winPatterns = [
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

resetGame = () => {
    turnO = true
    enableBoxes()
    msgContainer.classList.add('hide')
}

boxes.forEach((box) => {                                               //// First
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO === true) {
            box.innerText = "O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true

        checkWinner()

    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`
    msgContainer.classList.remove('hide')
    disableBoxes()
}


checkWinner = () => {
    for (const pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText);

            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != "") {
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("Winner", pos1val);

                    showWinner(pos1val)
                }
            }
     }
}

newGameBtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)