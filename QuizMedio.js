const questions = [
    {
        question: "Quem é esse vilão?",
        answers: [
            { id: 1, text: "Asmodeus", correct: false },
            { id: 2, text: "Coringa", correct: false },
            { id: 3, text: "Imperador Palpatine", correct: true },
            { id: 4, text: "Scar", correct: false }
        ]
    },
    {
        question: "Qual o nome do filme?",
        answers: [
            { id: 1, text: "Carros", correct: false },
            { id: 2, text: "Velozes e Furiosos", correct: true },
            { id: 3, text: "Invencível", correct: false },
            { id: 4, text: "Star Wars", correct: false }
        ]
    },
    {
        question: "Quem é esse personagem?",
        answers: [
            { id: 1, text: "Walter White", correct: true },
            { id: 2, text: "Heinsenberg", correct: false },
            { id: 3, text: "Steve Rogers", correct: false },
            { id: 4, text: "Rumpelstiltskin", correct: false }
        ]
    },
    {
        question: "O que é isso?",
        answers: [
            { id: 1, text: "Robo", correct: false },
            { id: 2, text: "Xenomorfo", correct: true },
            { id: 3, text: "Demônio", correct: false },
            { id: 4, text: "Skinwalker", correct: false }
        ]
    },
    {
        question: "Quem é esse homem?",
        answers: [
            { id: 1, text: "Truman", correct: false },
            { id: 2, text: "Coringa", correct: false },
            { id: 3, text: "Jim Carrey", correct: false },
            { id: 4, text: "Maskara", correct: true }
        ]
    },
    {
        question: "Qual a fala icônica deste personagem?",
        answers: [
            { id: 1, text: "“Autobots, vamos rodar”", correct: false },
            { id: 2, text: "“Não! Eu sou seu pai.”", correct: false },
            { id: 3, text: "“Eu tenho um encontro com um garoto de seis anos… e você tem um encontro com a morte.”", correct: true },
            { id: 4, text: "“Ah! Vamo nessa!”", correct: false }
        ]
    },
    {
        question: "Que filme é esse?",
        answers: [
            { id: 1, text: "A Baleia", correct: true },
            { id: 2, text: "A Espera de um Milagre", correct: false },
            { id: 3, text: "Como Treinar seu Dragão", correct: false },
            { id: 4, text: "Baywatch", correct: false }
        ]
    },
    {
        question: "Qual o nome da série?",
        answers: [
            { id: 1, text: "Round 6", correct: false },
            { id: 2, text: "Dr. House", correct: false },
            { id: 3, text: "Lucifer", correct: false },
            { id: 4, text: "The Witcher", correct: true }
        ]
    },
    {
        question: "Quem é esse médico?",
        answers: [
            { id: 1, text: "Dr. Grey", correct: false },
            { id: 2, text: "Dr. Mark", correct: false },
            { id: 3, text: "Dr. House", correct: true },
            { id: 4, text: "Dr. Stephen", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imageElement = document.getElementById("figura");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    nextButton.onclick = handleNextClick;
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
    imageElement.src = "";
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    imageElement.src = getImageByIndex(currentQuestionIndex);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.id = answer.id;
        button.onclick = () => selectAnswer(button, answer.correct);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(button, isCorrect) {
    const correctAnswer = questions[currentQuestionIndex].answers.find(ans => ans.correct).id;

    answerButtons.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.id == correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

function handleNextClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
}


function getImageByIndex(index) {
    const imagens = [
        "img/palpatine.png",
        "img/velozes e furiosos.png",
        "img/walter-white.png",
        "img/alien.jpeg",
        "img/maskara.png",
        "img/chuck.jpeg",
        "img/baleia.jpeg",
        "img/thewitcher.jpeg",
        "img/house.jpeg",
        
    ];
    return imagens[index] || "";
}


startQuiz();