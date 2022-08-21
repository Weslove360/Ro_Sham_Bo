let choice = Math.floor(Math.random() * 3);

//The choice variable will be a random number generator to represent the computers choice.

function getComputerChoice(choice) {
        
        if(choice == 0){
        choice = "scissors";
        } else if (choice == 1){
                choice = "rock"
        }else{
                choice ="paper"
        }
                        
        
        return  choice;
}
//The function converts the choice to our Ro Sham Bo strings.

let playerSelection = "Rock";
let computerSelection = getComputerChoice(choice);






function playRound(playerSelection, computerSelection){
        let roundResult = "";

//let playerSelection = playerSelection.chartAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase(;)
                if (playerSelection === "Rock" && computerSelection === "scissors") {
                 roundResult =  "Look at you big WINNER!!!"
                } else {

                roundResult = "You lose SUCKA!";
                


        }

        return roundResult;
        console.log()
}


console.log(playRound(playerSelection,computerSelection));

