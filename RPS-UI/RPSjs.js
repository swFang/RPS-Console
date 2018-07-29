var playerScore = 0;
var computerScore = 0; 
var line = 0; 


function computerPlay(){
    var play = Math.round(Math.random(3) * (3 - 1) + 1) ;
    console.log ("random num = " + play); 
    if(play == 1){
        document.getElementById("console").value = "computer plays Rock!" + "\n";
    } else if (play == 2){
        document.getElementById("console").value = "computer plays Paper!" + "\n";
    } else {
        document.getElementById("console").value = "computer plays Scissor!" + "\n";
    }
    return play; 
   /* if (play == 1){
        return 'Rock'; 
    } else if (play == 2){
        return 'Paper';
    } else {
        return 'Scissors'
    }*/
}

function playRound(playerSelection){
    //var areEqual = string1.toUpperCase() === string2.toUpperCase();
    
    //1 = rock
    //2 = paper
    //3 = scissor
    

    //W/L in players perspective
    var comp = computerPlay(); 
    if(playerSelection.toUpperCase() === 'Rock'.toUpperCase()){
        if(comp == 1) {
            return "t";
        }else if(comp == 2) {
            return "l";
        } else {
            return "w";
        }
    } else if(playerSelection.toUpperCase() === 'scissor'.toUpperCase()){
        
        if(comp == 1) {
            return "l";
        }else if(comp == 2) {
            return "w";
        } else {
            return "t";
        }

    }else {
        if(comp == 1) {
            return "w";
        }else if(comp == 2) {
            return "t";
        } else {
            return "l";
        }

    }
    }


    /*Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    At this point you should still just be using console.log() to display the results of each round and the winner at the end.
    Use prompt() to get input from the user. Read the docs here if you need to.
    Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    Feel free to create more “helper” functions if you think it would be useful. */
            
    
    function playGame(played){ 

        
        //var playerSelection = prompt("What are you going to play?", "Rock? Paper? Scissors?"); 
        //console.log("you played" + playerSelection); 
        var res = playRound(played); 
        
        
        if(res == 'l') {
            computerScore ++; 
           
        } else if ( res == 'w'){
            playerScore ++; 
           
        } else {
           
        }
        
        document.getElementById("console").value +=  "score is Player " + playerScore + " : Comp " + computerScore + "\n";
    
    }



    var rock = document.querySelector('#rock');
        rock.addEventListener('click', () => {
        playGame("rock");
    });

    var scissor = document.querySelector('#sci');
        scissor.addEventListener('click', () => {
        playGame("scissor"); 
    });

    var paper = document.querySelector('#paper');
        paper.addEventListener('click', () => {
        playGame("paper");
    });