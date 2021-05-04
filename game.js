// These are my 3 fields for questions and 2 possible answers
let questionShow = document.querySelector('.question');
let answer1Box = document.querySelector('.answer1');
let answer2Box = document.querySelector('.answer2');

//These are the two buttons to listen for to see which answer they choose
let userAnswer1 = document.querySelector('#option1');
let userAnswer2 = document.querySelector('#option2');

//Creating an array of objects here
const qNaList = [
    {
    question: 'Are you ready to test your MCU Knowledge??',
    answer1: 'Excelsior!',
    answer2: 'Hulk says SMASH!',
    Answer: 'Excelsior!'
    },
    {
    question: '1) Thor got a new weapon in Infintiy War. What was it?',
    answer1: 'A: Mjolnir',
    answer2: 'B: Stormbreaker',
    Answer: 'B: Stormbreaker' 
    },
    {
    question: '2) The Flerkens are extremely dangerous but, look like what tame earth mammal from Cpt. Marvel?',
    answer1: 'A: Racoons',
    answer2: 'B: Cats',
    Answer: 'B: Cats'
    },
    {
    question: '3) Who had the Space Stone before Thanos colleted it for his Infinity Gauntlet?',
    answer1: 'A: Loki', 
    answer2: 'B: The Collector',
    Answer: 'A: Loki'
    },
    {
    question: '4) Where did Peggy want to meet Cpt. America to dance, before plunging into the ice?',
    answer1: 'A: The Cotton Club',
    answer2: 'B: The Stork Club', 
    Answer: 'B: The Stork Club'
    },
    {
    question: '5) Director Taika Waititi plays who in Thor: Ragnarok?',
    answer1: 'A: Korg',  
    answer2: 'B: Miek',
    Answer: 'A: Korg'
    }
]
//My counter for my array position and score tally;
let y = 0;
let score = 0;

//This puts the questions up based upon what value y is (where in the array)
//Also adds the event listener that calls to check if what they selected was correct
let runQuiz = function() {
    if(y <= 6) {
        questionShow.innerText = qNaList[y].question;
        answer1Box.innerText = qNaList[y].answer1;
        answer2Box.innerText = qNaList[y].answer2;

        userAnswer1.addEventListener('click', checkA);
        userAnswer2.addEventListener('click', checkB);        
    
    }
    else{
        //Stop the game and tally total
    }
}

//Checks the answer based upon what button was picked
let checkA = function() {
    if (qNaList[y].answer1 === qNaList[y].Answer) {
        score += 1000;
        console.log(score);
        y += 1;
        runQuiz();
    }
    else {
        alert('Try Again, True Believers!');
    }
}

let checkB = function() {
    if (qNaList[y].answer2 === qNaList[y].Answer) {
        score += 1000;
        console.log(score);
        y += 1;
        runQuiz();
    }
    else {
        alert('Try Again, True Believers!')
    }
}

runQuiz();




    
     




