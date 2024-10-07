const questions = [
    {
        question: "How many colours are there in the rainbow?",
        options: ["one", "seven", "three", "Five"],
        answer: "seven"
    },
    {
        question: "what is the capital of sri lanka?",
        options: ["vavunija", "kandy", "colombo", "Jaffna"],
        answer: "colombo"
    },
    {
        question: "how many times virat kohli scored 100 in an international match?",
        options: ["80", "50", "30", "20"],
        answer: "80"
    },
    {
        question: "what is sri lanka national flower",
        options: ["Rosa", "sunflower", "lotus", "Blue water lily flower"],
        answer: "Blue water lily flower"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    displayQuestion();
});

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });

    nextButton.classList.add('hidden');
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextButton.classList.remove('hidden');
}

function displayScore() {
    document.getElementById('quiz-container').classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

// Start the quiz
displayQuestion();
