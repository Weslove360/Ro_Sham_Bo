let choice = Math.floor(Math.random() * 3);

//The choice variable will be a random number generator to represent the computers choice.

function getComputerChoice(choice) {
        
        if(choice == 0){
        choice = "Scissors";
        } else if (choice == 1){
                choice = "Rock"
        }else{
                choice ="Paper"
        }
                        
        
        return  choice;
}
//The function converts the choice to our Ro Sham Bo strings.

let playerSelection = prompt("Rock,Paper, Scissors?");
let computerSelection = getComputerChoice(choice);
console.log("Robot Chooses " + computerSelection+"!");
console.log("OMG You Chose " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +"!");
//These variables define our player selection and computer selection 
//Also prints them to the console





function playRound(playerSelection, computerSelection){
        let roundResult = "";

let playerSelection2 = playerSelection !== null && playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
                if (playerSelection2 === "Rock" && computerSelection === "Scissors") {
                 roundResult =  "Look at you big WINNER!!!"
                }else if (playerSelection2 === "Paper" && computerSelection === "Rock") {
                        roundResult =  "Look at you big WINNER!!!"
                }else if (playerSelection2 === "Scissors" && computerSelection === "Paper") {
                        roundResult =  "Look at you big WINNER!!!"
                }else if (playerSelection2 === "Rock" && computerSelection === "Paper") {
                        roundResult =  "You lose SUCKA!"
                }else if (playerSelection2 === "Paper" && computerSelection === "Scissors") {
                        roundResult =  "You lose SUCKA!"
                }else if (playerSelection2 === "Scissors" && computerSelection === "Rock") {
                        roundResult =  "You lose SUCKA!"
                }else if (playerSelection2 === computerSelection) {
                        roundResult =  "Draw Doggy!"


                } else {

                roundResult = "What????";
                


        }
        alert("Robot Chooses " + computerSelection+"!")
        alert(roundResult);
        console.log(roundResult)
        
        
}

let roundResult
let playerScore = 0;
let robotScore = 0;



function game(){
        for(let i = 0; i < 5; i++ ){
                let playerSelection = prompt("Rock,Paper, Scissors?");
                
                
                playRound(playerSelection, computerSelection);

                if(roundResult == "Look at you big WINNER!!!") {
                        playerScore ++ && console.log(`Human ${playerScore}-${robotScore} Computer`)
                 } else if (roundResult == "You lose SUCKA!"){
                        robotScore ++ && console.log(`Human ${playerScore}-${robotScore} Computer`)
                } else {console.log(`Human ${playerScore}-${robotScore} Computer`)
                
        }
        }
        }


game()
