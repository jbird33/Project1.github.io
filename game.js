// These are my 3 fields for questions and 2 possible answers
let questions = document.querySelector('.question');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');

//These are the two buttons to listen for to see which answer they choose
let button1 = document.querySelector('#option1');
let button2 = document.querySelector('#option2');

let notReady = function() {
    alert("Come On! Face Front True Believers")
}

let runQuiz = function() {

}

let startGame = function() {
    questions.innerText = 'Ready to start?';
     answer1.textContent = 'A: Excelsior!';
     answer2.innerText = 'B: Nahhhh'
    // button1.addEventListener('click', runQuiz);
     button2.addEventListener('click', notReady);
}

startGame();

let myQuestions = [];
