 console.log("Welcome to the Game!")

 const options = ["rock", "paper", "scissor"];

 function getComputerChoice(){
    const choice =  options[Math.floor(Math.random() * options.length)];
    console.log(choice)
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")
        ){
            return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!!";
    }
    else if(result == "Player"){
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper or Scissor ?");
        if (choice == null){
            continue;
        } 
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice(); 
        const   computerSelection = getComputerChoice();
        console.log( playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection)== "Computer"){
            scoreComputer++;
        }
    }
    console.log("==============================")
    console.log("Game Over")
    if (scorePlayer > scoreComputer){
        console.log("You are the Winner!");
    }
    else if (scorePlayer < scoreComputer){
        console.log ("Computer is the winner!")
    }
    else{
        console.log("Its a Tie !!")
    }
}

game()