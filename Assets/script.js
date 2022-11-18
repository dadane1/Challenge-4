var opener = document.querySelector(".opener")
var startBtn = document.querySelector(".startBtn")
var quiz = document.querySelector(".quiz")
var question = document.querySelector(".question")
var choices = document.querySelector(".choices")
var timer = document.querySelector(".timer")
var score = 0;
var time = 60;
var timePen = 5;
var index = 0;

var qAndA = [
    {
        question: "How do you create a function?",
        answers: ["A. Var = function()", "B. function = myFunction", "C. function myFunction()", "D. myFUnction"],
        correct: "C. function myFunction()" 
    },
    {
        question: "How do you create a variable?",
        answers: ["A. var name = expression", "B. var = name", "C. expression = name", "D. expression = name"],
        correct: "A. var name = expression" 
    },
    {
        question: "what is the correct syntax for a for loop?",
        answers: ["A. for (i=0; i<5; i++)", "B. for (i=0)", "C. for (i++)", "D. (i=0; i<5; i++)"],
        correct: "A. for (i=0; i<5; i++)" 
    },
    {
        question: "what does DOM stand for?",
        answers: ["A. Doc Occur Model", "B. Day of Month", "C. Deter Object Meaning", "D. Document Object Model"],
        correct: "D. Document Object Model" 
    },
    {
        question: "Is Javascript case sensitive?",
        answers: ["A. yes", "B. no"],
        correct: "A. yes" 
    }
]

function startQuiz(index) {
    question.innerHTML = "";
    choices.innerHTML = "";
    var currentQuestion = qAndA[index].question;
    question.innerHTML = currentQuestion;
    var currentAnswers = qAndA[index].answers
    currentAnswers.forEach(function(answerIndex) {
        var listItem = document.createElement("li")
        listItem.innerHTML = answerIndex;
        choices.appendChild(listItem)
        listItem.addEventListener("click", (compare))
    })
}

function compare(event) {
    let choice = event.target;
    if(choice.innerHTML === qAndA[index].correct) {
        console.log("Correct!")
        score = score + 20
    } else {
        score = score
        time = time - timePen
        console.log("Wrong!")
    }
    index++
    if(score <= 0) {
        score = 0
    }
    if(index >= qAndA.length) {
        question.innerHTML = "Quiz Over!"
        choices.innerHTML = "You got a score of: " + score
    } else {
        startQuiz(index)
    }
}

startBtn.addEventListener("click", function() {
    opener.style.display= "none";
    setInterval(function() {
        time--
        timer.innerHTML = "Time: " + time;
        if(time <= 0) {
            clearInterval()
            index = qAndA.length
            timer.innerHTML = "Time's Up!";
            question.innerHTML = "Quiz Over!"
        choices.innerHTML = "You got a score of: " + score
        }
    }, 1000)
    startQuiz(index)
})
