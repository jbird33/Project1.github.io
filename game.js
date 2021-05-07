// These are my 3 fields for questions and 2 possible answers
let questionShow = document.querySelector('.question');
let answer1Box = document.querySelector('.answer1');
let answer2Box = document.querySelector('.answer2');

//These are the two buttons to listen for to see which answer they choose
let userAnswer1 = document.querySelector('#option1');
let userAnswer2 = document.querySelector('#option2');

let score = 0;

//Creating an array of objects here that holds my questions, answer options, and actual answers
const qNaList = [
    {
    question: 'It is time to test your Asgardian knowledge. Choose correct to win some points, or choose wrong and only get half.',
    answer1: '- Stay put and face the blip?',
    answer2: '- Use the BiFrost and enter the MCU realm?',
    Answer: '- Use the BiFrost and enter the MCU realm?'
    },
    {
    question: 'Are you ready to test your MCU Knowledge??',
    answer1: 'Excelsior!',
    answer2: 'Hulk says NOOOOOO!',
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
    },
    {
    question: "6) What is Tony Stark's daughter name?",
    answer1: 'A: Cassie',  
    answer2: 'B: Morgan',
    Answer: 'B: Morgan'
    },
    {
    question: '7) In Spide-Man: Far From Home, where was Mysterio fired from?',
    answer1: 'A: Stark Industries',  
    answer2: 'B: Oscorp',
    Answer: 'A: Stark Industries'
    },
    {
    question: '8) In Black Panther, where did Killmonger grow up?',
    answer1: 'A: Oakland, CA',  
    answer2: 'B: Brooklyn, NY',
    Answer: 'A: Oakland, CA'
    },
    {
    question: "9) In Doctor Strange, where is Dormammu's home realm?",
    answer1: 'A: Svartalfheim',  
    answer2: 'B: The Dark Dimension',
    Answer: 'B: The Dark Dimension'
    },
    {
    question: "10) Sabretooth's real name displayed first in X2: X-Men United is?",
    answer1: 'A: Victor Creed',  
    answer2: 'B: Kurt Wagner',
    Answer: 'A: Victor Creed'
    },
    {
    question: 'Here is your score!',
    answer1: score,
    answer2: 'Are you ready to Try Again? Choose A or B',
    Answer: 'reload'
    }
]
//My counter for my array position;
let y = 0;

//This puts the questions up based upon what value y is (where in the array)
//Also adds the event listener that calls to check if what they selected was correct
let runQuiz = function() {
    if(y <= 11) {
        questionShow.innerText = qNaList[y].question;
        answer1Box.innerText = qNaList[y].answer1;
        answer2Box.innerText = qNaList[y].answer2;

        userAnswer1.addEventListener('click', checkA);
        userAnswer2.addEventListener('click', checkB);        
    
    }
    else{
        //Stop the game and tally total
        questionShow.innerText = qNaList[y].question;
        answer1Box.innerText = qNaList[y].answer1;
        answer2Box.innerText = qNaList[y].answer2;
        console.log('I am at this point here in the code')

          userAnswer1.addEventListener('click', reload);
          userAnswer2.addEventListener('click', reload);
    }      
}

//Checks the answer based upon the Select A option
let checkA = function() {
    if (qNaList[y].answer1 === qNaList[y].Answer) {
        score += 1000000;
        console.log(score);
        y += 1;
        console.log(y);  //trying to find out what value y is each time
        qNaList[12].answer1 = score + '/12000000 Points!!';
        runQuiz();
    }
    else if (y <= 11) {
        score = score - 500000;
        console.log(score);
        alert('Try Again, True Believers!');
    }
}
//Checks the answer based upon the Select B option
let checkB = function() {
    if (qNaList[y].answer2 === qNaList[y].Answer) {
        score += 1000000;
        console.log(score);
        y += 1;
        console.log(y);  //trying to find out what value y is each time
        runQuiz();
    }
    else if (y <= 11) {
        score = score - 500000;
        console.log(score);
        alert('Try Again, True Believer!')
    }
}
//Function that reloads the web page once quiz is completed.
let reload = function() {
    location.reload();
 }

//Starts the whole shebang off to start taking input and giving output
runQuiz();




    
     




