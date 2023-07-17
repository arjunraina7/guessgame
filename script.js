'use strict';


const randomValue = document.querySelector('.number')
const guessValue = document.querySelector('.guess')
const button = document.querySelector('.check')
const message = document.querySelector('.message')
const again = document.querySelector('.again')
let number = Math.floor(Math.random() * 20) + 1

let score = 20;
let highscore = 0;

button.addEventListener('click', function () {

    const guess = Number(guessValue.value)


    if (guess === 0) {
        message.textContent = '🚫Action not allowed, please enter a value between 1 and 20🚫'
    }

    else if (guess === number) {
        randomValue.textContent = number;
        message.textContent = '✅Right Answer✅';
        document.querySelector('body').style.backgroundColor = '#4CAF50';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highscore) {
            document.querySelector('.highscore').textContent = score;
            
        }

    } else if (guess > number) {

        if (score > 1) {
            message.textContent = `🔽Too high! Try lowering your answer🔽`;
            score--;
            document.querySelector('.score').textContent = score
            document.querySelector('body').style.backgroundColor = '#F57C00';
        } else {
            document.querySelector('.message').textContent = '😒Game Over😒'
            document.querySelector('body').style.backgroundColor = '#F44336';
        }

    } else if (guess < number) {


        if (score > 0) {
            message.textContent = `🔼Too low! Try raising your answer.🔼`;
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#F57C00'
        } else {
            document.querySelector('.message').textContent = '😒Game over 😒'
            document.querySelector('body').style.backgroundColor = '#F44336';
        }


    }
})

again.addEventListener('click', function () {

    score = 20;
    number =  Math.floor(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = 'Start guessing...'
})