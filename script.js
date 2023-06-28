const r = "Rock";
const p = "Paper";
const s = "Scissors";



function choice(){
    
      let ran = Math.random() * 100;

      if(ran <= 33){
        return r

      }else if(ran <=67){
        return p

      }else{
      return s}
}

function player(){
    let answer = prompt('rock, paper, or scissors?');
    if (answer === 'rock'){
        return r
    } else if (answer === 'paper'){
        return p
    } else if (answer= 'scissors'){
        return s
    }    
}

function game(){
    playerSelection = player();
    computerSelection = choice();
    if (playerSelection === computerSelection){
        return "Oh wow, we tied"
    } else if (computerSelection === r && playerSelection === p){
        return "Dang beat me with paper!"
    } else if (computerSelection === p && playerSelection === s){
        return "Dang you got me with scissors!"
    } else if (computerSelection === s && playerSelection === r){
        return "Rock beats scissors, you win."
    } 
    else if (computerSelection === r && playerSelection === s){
        return "Rock beats scissor :D!"
    } else if (computerSelection === p && playerSelection === r){
        return "I win, paper beats rock"
    } else if (computerSelection === s && playerSelection === r){
        return "Sorry scissors trumps paper"
    }

    
}



console.log (game())




