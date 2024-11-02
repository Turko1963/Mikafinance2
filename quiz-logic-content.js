import { allQuestions } from './questions.js';

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft;
let currentLevel = 1;

function selectQuestionsForLevel(level) {
    const levelQuestions = allQuestions.filter(q => q.level === level);
    const shuffled = shuffleArray([...levelQuestions]);
    return shuffled.slice(0, 10);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function startQuiz() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.quiz-container').classList.add('active');
    currentQuestions = selectQuestionsForLevel(currentLevel);
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function startTimer() {
    timeLeft = 30;
    updateTimer();
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// ... (שאר הפונקציות מהקוד המקורי)

export function startNextLevel() {
    currentLevel++;
    document.querySelector('.result-screen').style.display = 'none';
    startQuiz();
}

export function restartQuiz() {
    document.querySelector('.result-screen').style.display = 'none';
    startQuiz();
}
