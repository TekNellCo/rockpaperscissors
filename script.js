
const  paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors')

const computerChoice = document.querySelector('.computerChoice');
const playerChoice = document.querySelector('.playerChoice');
const result = document.querySelector('.result');

let p = 'Paper';
let s = 'Scissors' ;
let r = 'Rock';

///scissorsBtn.addEventListener('click',scissor);
//rockBtn.addEventListener('click',rock);
///paperBtn.addEventListener('click',paper);




function scissors(){ 
    playerChoice.textContent = 'Player choice : Scissors';
    if (choice() == r){
        computerChoice.textContent = 'Computer choice : Rock';
        result.textContent = "Result : Computer wins!";

    }else if( choice()== p){
        computerChoice.textContent = 'Computer choice : Paper';
        result.textContent = "Result : You win!";

    } else {
        computerChoice.textContent = 'Computer choice : Scissors';
        result.textContent = "Result : Tie!";
    }
}

function rock(){
    playerChoice.textContent = 'Player choice : Rock';
    if (choice()== s){
        computerChoice.textContent = 'Computer choice : Scissors';
        result.textContent = "Result : You win!";

    }else if( choice()== p){
        computerChoice.textContent = 'Computer choice : Paper';
        result.textContent = "Result : Computer wins!";

    } else {
        computerChoice.textContent = 'Computer choice : Rock';
        result.textContent = "Result : Tie!";
    }
}

function paper(){
    playerChoice.textContent = 'Player choice : Paper';

    if (choice()== r){
        computerChoice.textContent = 'Computer choice : Rock';
        result.textContent = "Result : You win!";

    }else if( choice()== s){
        computerChoice.textContent = 'Computer choice : Scissors';
        result.textContent = "Result : Computer wins!";

    } else {
        computerChoice.textContent = 'Computer choice : Paper';
        result.textContent = "Result : Tie!";
    }
}





function choice(){
    
      let ran = Math.random() * 100;

      if(ran <= 33){
        return r

      }else if(ran <=67){
        return p

      }else{
      return s}
}





////function player(){
 //   let answer = prompt('rock, paper, or scissors?');
  //  if (answer === 'rock'){
 //       return r
 //   } else if (answer === 'paper'){
 //       return p
//    } else if (answer= 'scissors'){
 //       return s
//    }    
///}



/////




