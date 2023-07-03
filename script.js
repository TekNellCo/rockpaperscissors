
const  paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors')

const computerChoice = document.querySelector('.computerChoice');
const playerChoice = document.querySelector('.playerChoice');
const result = document.querySelector('.result');

let p = "paper";
let s = "scissors";
let r = "rock";

const pscore = document.querySelector('.pscore');
const score = document.querySelector('.score');
let cpuScore = 1;
let pScore = 1;








const yes = document.getElementById('yes');
let greeting = document.querySelector('.greeting');
const no = document.getElementsByClassName('.no');

function disagree(){
    greeting.style.cssText = 'display : none';
    alert('Too bad!');

}

function agree(){
    greeting.style.cssText = 'display : none';

}






function scissors(){ 
    playerChoice.textContent = 'Player choice : Scissors';
    if (choice() == r){
        computerChoice.textContent = 'Computer choice : Rock';
        result.textContent = "Result : Computer wins!";
        score.textContent = "Computer Score:" + cpuScore++; 

    }else if( choice()== p){
        computerChoice.textContent = 'Computer choice : Paper';
        result.textContent = "Result : You win!";
        pscore.textContent = 'Player score : ' + pScore++;

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
        pscore.textContent = 'Player score : ' + pScore++;

        



    }else if( choice()== p){
        computerChoice.textContent = 'Computer choice : Paper';
        result.textContent = "Result : Computer wins!";
        score.textContent = "Computer Score:" + cpuScore++; 

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
        pscore.textContent = 'Player score : ' + pScore++;

    }else if( choice()== s){
        computerChoice.textContent = 'Computer choice : Scissors';
        result.textContent = "Result : Computer wins!";
        score.textContent = "Computer Score:" + cpuScore++; 

    } else {
        computerChoice.textContent = 'Computer choice : Paper';
        result.textContent = "Result : Tie!";
    }
}





function choice(){

    if(cpuScore ==5){
        alert('You Lose!')
    }else if (pScore ==5){
        alert("You win")
    }else{
        //
    };
    
      let ran = Math.random() * 100;

      if(ran <= 33){
        return r

      }else if(ran <=67){
        return p

      }else{
      return s}
}








