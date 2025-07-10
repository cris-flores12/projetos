const questions = [
    {
        question: "De qual desenho essa turma é?",
        Image: "img/scooby.jpg",
        answers: [
            { id: 1, text: "Shrek", correct: false },
            { id: 2, text: "Scooby-Doo", correct: true },
            { id: 3, text: "Salsicha", correct: false },
        ]
    },
    {
        question: "Quem é esse personagem?",
        answers: [
            { id: 1, text: "Shrek", correct: false },
            { id: 2, text: "Gato de Botas", correct: true },
            { id: 3, text: "Salsicha", correct: false },
        ],
    },
    {
        question: "De onde eles são?",
        answers: [
            { id: 1, text: "Como treinar seu dragão", correct: false },
            { id: 2, text: "Backyardigans", correct: false },
            { id: 3, text: "Tom & Jerry", correct: true },
        ],
    },
    {
        question: "De qual desenho eles participam?",
        answers: [
            { id: 1, text: "Dragon Ball", correct: false },
            { id: 2, text: "Hora de Aventura", correct: true },
            { id: 3, text: "Minions", correct: false },
        ],
    },
    {
        question: "De qual desenho essa turma é?",
        answers: [
            { id: 1, text: "Minions", correct: true },
            { id: 2, text: "Avatar", correct: false },
            { id: 3, text: "Lilo & Stitch", correct: false },
        ],
    },
    {
        question: "De onde eles são?",
        answers: [
            { id: 1, text: "Soul", correct: true },
            { id: 2, text: "O incrível mundo de gumball", correct: false },
            { id: 3, text: "Peixonauta", correct: false },
        ],
    },
    {
        question: "Qual o nome dessa dupla?",
        answers: [
            { id: 1, text: "Pokemon", correct: false },
            { id: 2, text: "Patrulha Canina", correct: false },
            { id: 3, text: "Lilo & Stitch", correct: true },
        ],
    },
    {
        question: "Quem é essa personagem?",
        answers: [
            { id: 1, text: "Scooby-Doo", correct: false },
            { id: 2, text: "Hello Kitty", correct: true },
            { id: 3, text: "Bob Esponja", correct: false },
        ],
    },
    {
        question: "De onde elas são?",
        answers: [
            { id: 1, text: "Três espiãs demais", correct: true },
            { id: 2, text: "Pica-Pau", correct: false },
            { id: 3, text: "Phineas e Ferb", correct: false },
        ],
    },
    {
        question: "Quem é esse personagem?",
        answers: [
            { id: 1, text: "Masha", correct: false },
            { id: 2, text: "Ben 10", correct: false },
            { id: 3, text: "Touro Ferdinando", correct: true },
        ],
    },
    {
        question: "Ele é famoso pelo seu relógio, ele é o?",
        answers: [
            { id: 1, text: "Goku", correct: false },
            { id: 2, text: "Gruu", correct: false },
            { id: 3, text: "Ben 10", correct: true },
        ],
    },
    {
        question: "Qual o nome dessa princesa?",
        answers: [
            { id: 1, text: "Cinderela", correct: false },
            { id: 2, text: "Branca de Neve", correct: true },
            { id: 3, text: "A bela adormecida", correct: false },
        ],
    },
    {
        question: "De onde elas são?",
        answers: [
            { id: 1, text: "Meu Malvado Favorito", correct: false },
            { id: 2, text: "Winx", correct: true },
            { id: 3, text: "Os jetsons", correct: false },
        ],
    },
    {
        question: "Quem é esse personagem?",
        answers: [
            { id: 1, text: "Frozen", correct: false },
            { id: 2, text: "Bob Esponja", correct: true },
            { id: 3, text: "Moto-moto", correct: false },
        ],
    },
    {
        question: "De onde eles são?",
        answers: [
            { id: 1, text: "Phineas e Ferb", correct: true },
            { id: 2, text: "Os flintstones", correct: false },
            { id: 3, text: "Caverna do Dragão", correct: false },
        ],
    },
    {
        question: "De qual desenho essa turma é?",
        answers: [
            { id: 1, text: "Toy Story", correct: false },
            { id: 2, text: "Up Altas Aventuras", correct: false },
            { id: 3, text: "Patrulha Canina", correct: true },
        ],
    },
    {
        question: "Qual é esse desenho?",
        answers: [
            { id: 1, text: "Kim possible", correct: true },
            { id: 2, text: "Madagascar", correct: false },
            { id: 3, text: "Jovens Titãs", correct: false },
        ],
    },
    {
        question: "Qual o nome desse anime?",
        answers: [
            { id: 1, text: "Dragon Ball", correct: false },
            { id: 2, text: "Pokémon", correct: true },
            { id: 3, text: "Naruto", correct: false },
        ],
    },
    {
        question: "De qual desenho essa turma é?",
        answers: [
            { id: 1, text: "Caverna do dragão", correct: true },
            { id: 2, text: "Viva, a vida é uma festa", correct: false },
            { id: 3, text: "Monster High", correct: false },
        ],
    },
    {
        question: "Qual o nome dessa princesa?",
        answers: [
            { id: 1, text: "Princesinha Sofia", correct: false },
            { id: 2, text: "Rapunzel", correct: false },
            { id: 3, text: "Cinderela", correct: true },
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionQuizFacil = 0;
let score = 0;

function startQuiz() {
    currentQuestionQuizFacil = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionQuizFacil];
    let questionNo = currentQuestionQuizFacil + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.dataset.id = answers.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    answers = questions[currentQuestionQuizFacil].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionQuizFacil++;
    if (currentQuestionQuizFacil < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionQuizFacil < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();