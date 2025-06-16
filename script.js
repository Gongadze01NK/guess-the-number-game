'use strict';

const inputField = document.querySelector(".guess");
const checkButton = document.getElementById("checkBtn")
const randNumber = document.querySelector(".number")
const massage = document.getElementById("massage")
const highScore = document.querySelector(".highscore")
const justScore = document.querySelector(".score")
const bodyStyle = document.body
const resetBtn = document.getElementById("reset")



inputField.addEventListener("input", function () {
    let value = parseInt(this.value, 10);

    if (value > 20) {
      this.value = 20;
    } else if (value < 0) {
      this.value = 0;
    } else if (isNaN(value)) {
      this.value = '';
    }
  });



let randomNumber = Math.floor(Math.random()*21)
let currentScore = 20;
let topScore = 0;
justScore.textContent = currentScore;

function getHiddenNumber(number){
    number.textContent = randomNumber
}

checkButton.addEventListener("click",()=>{
  let inputFieldNumber = parseInt(inputField.value, 10);
  let scoreValue = parseInt(justScore.textContent, 10);
  
    if(randomNumber === inputFieldNumber){
        getHiddenNumber(randNumber)
        bodyStyle.style.backgroundColor = "green"
        massage.textContent = "You are correct"
        

        if (currentScore > topScore) {
      topScore = currentScore;
      highScore.textContent = topScore;
    }

    }else{
      if(Math.abs(inputFieldNumber - randomNumber) <= 2){
        massage.textContent = "🔥 You're close!"
        scoreValue--;
        justScore.textContent = scoreValue;
        
      }else if(currentScore <= 0){
        massage.textContent = "💥 Game over!";
      checkButton.disabled = true;
      }else{
        massage.textContent = "❄️ Too far!"
        scoreValue--;
        justScore.textContent = scoreValue;
        
      }
      
      
    }
})

resetBtn.addEventListener("click", () => {
  currentScore = 20;
  randomNumber = Math.floor(Math.random() * 21);
  justScore.textContent = currentScore;
  massage.textContent = "Start guessing...";
  inputField.value = "";
  randNumber.textContent = "?";
  bodyStyle.style.backgroundColor = "black";
  checkButton.disabled = false;
});
