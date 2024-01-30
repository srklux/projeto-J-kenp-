
const myButtons = document.querySelectorAll(".form")
const machineChoice = document.querySelector(".machine-choice")
const youChoice = document.querySelector(".you-choice")
const result = document.querySelector(".result")
const mayScore = document.querySelector("#score")
const computerScore = document.querySelector("#computer-Score")
let number = 0
let numberMachine = 0


 playmachine = () => {
    const machineValue = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    const machineChoiceValue = machineValue[randomNumber]

if (machineChoiceValue === "rock") {
    machineChoice.innerHTML = "Máquina : &#128074;"
}

if (machineChoiceValue === "paper") {
    machineChoice.innerHTML = "Máquina: &#128400;"
}

if (machineChoiceValue === "scissors") {
    machineChoice.innerHTML = "Máquina: &#9996;&#65039;"
}
return machineChoiceValue;
}


 myButtons.forEach(clickButton => {
    clickButton.addEventListener ("click", (event)=>{   
        playGame( event.target.id, playmachine())
       youChoice.innerHTML = "você:" + event.target.innerHTML
    })
});
const playGame = ( human, machine ) =>  {
    if(human === machine ) {
       result.innerHTML = "Empatou"
    }
   else if ( (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
     (human === "scissors" && machine === "paper") ){ 
        result.innerHTML = "Você ganhou"
        number++
        mayScore.innerHTML = number
      

    } 
    else {
        result.innerHTML = "Você perdeu"
        numberMachine++
        computerScore.innerHTML = numberMachine
    }
       

}
