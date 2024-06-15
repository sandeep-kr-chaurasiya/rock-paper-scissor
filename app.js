let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let playerScore = document.querySelector("#playerscore");
let compScore = document.querySelector("#compscore");
let playerScoreValue = 0;
let compScoreValue = 0;

let playermove = document.querySelector("#playermove");
let compmove = document.querySelector("#compmove");

//------------------ computer move -----------// 

const computerchoice = () => {
    const option = [ 'paper', 'scissor','rock'];
    const randidx = Math.floor(Math.random() * option.length);
    return option[randidx];
}

//--------------- player move-----------//

choices.forEach(choice => {
    choice.addEventListener("click", function () {
        let playerchoice = choice.id;
        playgame(playerchoice);
       
    });
});

// --------------- draw GAME------------//
const drawgame =()=>{
    console.log("Match draw!");
    message.innerText = "Match draw!";
    message.style.backgroundColor = 'yellow';
    message.style.color = 'black';
}
//------- show winner-----//
const showwinner=(userwin,playerchoice,computer)=>{
    if (userwin) {
        message.innerText = `You win! ${playerchoice} beats ${computer}`;
        message.style.backgroundColor = 'green';
        message.style.color = 'white';
        playerScoreValue++;
        playerScore.innerText = playerScoreValue;

    } else {
        message.innerText = `Computer win! ${computer} beats ${playerchoice}`;
        message.style.backgroundColor = 'red';
        message.style.color = 'white';
        compScoreValue++;
        compScore.innerText = compScoreValue;
    } 
}
// --------------- TO PLAY THE GAME------------//
const playgame = (playerchoice) => {
    // to print player move 
    console.log(playerchoice);
    playermove.innerText = `${playerchoice}`;
    // to print computers move
    let computer = computerchoice();
    console.log(computer);
    compmove.innerText = `${computer}`;
    
    if (playerchoice === computer) {
       drawgame();
    } else {
        let userwin = true;
        if (playerchoice === 'rock') {
            userwin = computer === 'paper' ? false : true;
        } else if (playerchoice === 'paper') {
            userwin = computer === 'scissors' ? false : true;
        } else {
            userwin = computer === 'rock' ? false : true;

        } 
        showwinner(userwin,playerchoice,computer)
    }
}
