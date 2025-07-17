const questions = [
    {
        question: "Qual o vírus do guerra mundial z?",
        answers: [
            { id: 1, text: "Solanum", correct: true },
            { id: 2, text: "Cordyceps", correct: false },
            { id: 3, text: "Wildfire", correct: false },
        ]
    },
    {
        question: "Quem é esse personagem?",
        answers: [
            { id: 1, text: "Dewey Finn", correct: true },
            { id: 2, text: "Steve", correct: false },
            { id: 3, text: "Carl Denham", correct: false },
        ],
    },
    {
        question: "Que animal é esse?",
        answers: [
            { id: 1, text: "Fiuu", correct: false },
            { id: 2, text: "Fênix", correct: false },
            { id: 3, text: "Pelúcio", correct: true },
        ],
    },
    {
        question: "De que filme esse personagem é ?",
        answers: [
            { id: 1, text: "Gente grande", correct: false },
            { id: 2, text: "Wendigo", correct: true },
            { id: 3, text: "Superstição", correct: false },
        ],
    },
    {
        question: "Qual o nome desse personagem?",
        answers: [
            { id: 1, text: "Desmond Doss", correct: true },
            { id: 2, text: "Homem aranha", correct: false },
            { id: 3, text: "Barry Allen", correct: false },
        ],
    },
    {
        question: "De onde é esse objeto?",
        answers: [
            { id: 1, text: "Peaky blinders", correct: true },
            { id: 2, text: "Vingadores guerra infinita", correct: false },
            { id: 3, text: "Harry Potter", correct: false },
        ],
    },
    {
        question: "Qual o vilão pricipal do filme doutor estranho(2016)?",
        answers: [
            { id: 1, text: "Kaecilius", correct: false },
            { id: 2, text: "Doutor destino", correct: false },
            { id: 3, text: "Dormammu", correct: true },
        ],
    },
    {
        question: "Quem é esse personagem?",
        answers: [
            { id: 1, text: "Homem aranha", correct: false },
            { id: 2, text: "Indiana Jones", correct: true },
            { id: 3, text: "latrel", correct: false },
        ],
    },
    {
        question: "De onde esse personagem é?",
        answers: [
            { id: 1, text: "Interestelar", correct: true },
            { id: 2, text: "Extraordinário", correct: false },
            { id: 3, text: "Wendigo", correct: false },
        ],
    },
    {
        question: "De qual filme é esse carro?",
        answers: [
            { id: 1, text: "Velozes e furiosos", correct: false },
            { id: 2, text: "Need for speed", correct: false },
            { id: 3, text: "Transformers", correct: true },
        ],
    },
]    


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionQuizFacil = 0;
let score = 0;

var imgAtual = "img/guerra z.jpg";
var img2 = "img/escola de rock.jpg";
var img3 = "img/pelucio.webp";
var img4 = "img/tim.jpg";
var img5 = "img/até o ultimo homem.webp";
var img6 = "img/boina.webp";
var img7 = "img/dormammu.webp";
var img8 = "img/indiana jones.jpeg";
var img9 = "img/cooper.jpg";
var img10 = "img/bugatti.jpeg";
var parabens = "gif/Bob Dançando.gif";
var aux ="img/guerra z.jpg";

function trocar(){
    imgAtual = img2;
    document.getElementById("figura").src = imgAtual;
    img2 = img3;
    img3 = img4;
    img4 = img5;
    img5 = img6;
    img6 = img7;
    img7 = img8;
    img8 = img9;
    img9 = img10;
    img10 = parabens;
    parabens = aux;
    aux = imgAtual;
}

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