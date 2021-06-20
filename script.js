const randomNumber = Math.floor(Math.random()*9+1);
const userGuess = document.querySelector("#input");
const resultDiv = document.querySelector(".result");
const historyDiv = document.querySelector(".history");





let chances = 3;

let isWin = false;
let result;
function game() {
    
    let guess = userGuess.value;
    if (guess > 10 || guess < 1) {
        result = "Guess a number between 1 and 10"; 
        resultDiv.innerHTML = `<h4>${result}</h4>`;
    }else if (chances && !isWin) {
        let guess = userGuess.value;
        if (randomNumber == guess) {
            result = "You won!";
            isWin = true;
        } else if (randomNumber < guess) {
            if (chances == 1) {
                result = `Game Over!<br>The Number is ${randomNumber}`;
            }else {
                result = "You too high";
            }
        }else {
            if (chances == 1) {
                result = `Game Over!<br>The Number is ${randomNumber}`;
            }else {
                result = "You too low!";
            }
        }
        chances--;
        historyDiv.innerHTML += `<h4>You Guessed ${guess}</h4>`;
        return resultDiv.innerHTML = `<h4>${result}</h4>`;
    }
    
}


function reload() {
    if (!chances || isWin) {
        location.reload();
    }
    
}