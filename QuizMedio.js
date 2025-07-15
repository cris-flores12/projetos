const questions = [
    {
        question: "Quem é esse vilão?",
        answers: [
            { id: 1, text: "Asmodeus", correct: false },
            { id: 2, text: "Coringa", correct: false },
            { id: 3, text: "Imperador Palpatine", correct: true },
            { id: 4, text: "Scar", correct: false },
        ]
    },
    {
        question: "Qual o nome do filme?",
        answers: [
            { id: 1, text: "Carros", correct: false },
            { id: 2, text: "Velozes e Furiosos", correct: true },
            { id: 3, text: "Invencivel", correct: false },
            { id: 4, text: "Star Wars", correct: false },
        ]
    },
    {
        question: "Quem é esse personagem?",
        answers: [
            { id: 1, text: "Walter White", correct: true },
            { id: 2, text: "Heinsenberg", correct: false },
            { id: 3, text: "Steve Rogers", correct: false },
            { id: 4, text: "Rumpelstiltskin", correct: false },
        ]
    },
    {
        question: "O que é isso?",
        answers: [
            { id: 1, text: "Robo", correct: false },
            { id: 2, text: "Xenomorfo", correct: true },
            { id: 3, text: "Demônio", correct: false },
            { id: 4, text: "Skinwalker", correct: false },
        ]
    },
    {
        question: "Quem é esse homem?",
        answers: [
            { id: 1, text: "Truman", correct: false },
            { id: 2, text: "Coringa", correct: false },
            { id: 3, text: "Jim Carrey", correct: false },
            { id: 4, text: "Maskara", correct: true },
        ]
    },
    {
        question: "Qual a fala icônica deste personagem??",
        answers: [
            { id: 1, text: "“Autobots, vamos rodar”", correct: false },
            { id: 2, text: "“Não! Eu sou seu pai.”", correct: false },
            { id: 3, text: "“Eu tenho um encontro com um garoto de seis anos… e você tem um encontro com a morte.”", correct: true },
            { id: 4, text: "“Ah! Vamo nessa!”", correct: false },
        ]
    },
    {
        question: "Que filme é esse?",
        answers: [
            { id: 1, text: "A baleia", correct: true },
            { id: 2, text: "A espera de um milagre", correct: false },
            { id: 3, text: "Como treinar seu dragão", correct: false },
            { id: 4, text: "Baywatch", correct: false },

        ]

    },
    {
        question: "Qual o nome da série?",
        answers: [
            { id: 1, text: "Round 6", correct: false },
            { id: 2, text: "Dr. House", correct: false },
            { id: 3, text: "Lucifer", correct: false },
            { id: 4, text: "The Witcher", correct: true },

        ]

    },
    {
        question: "Quem é esse médico??",
        answers: [
            { id: 1, text: "Dr. Grey", correct: true },
            { id: 2, text: "Dr. Mark", correct: false },
            { id: 3, text: "Dr. House", correct: false },
            { id: 4, text: "Dr. Stephen", correct: false },

        ]

    },

]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("botao-resp");
const nextButton = document.getElementById("botao-prox");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElemente("button");
    })
}
startQuiz();