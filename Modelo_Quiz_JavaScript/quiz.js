let currentQuestion = 0;
let score = 0;

const quizData = [
    {
        pergunta: "Qual é a capital da França?",
        respostas: ["Londres", "Paris", "Berlim", "Madrid", "Roma"],
        resposta_correta: 1
    },
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        respostas: ["Terra", "Júpiter", "Marte", "Vênus", "Saturno"],
        resposta_correta: 1
    },
    {
        pergunta: "Onde podemos achar cabeça de bacalhau?",
        respostas: ["Juiz de Fora", "Noruega", "Varginha", "Mathias Barbosa", "3 Rios"],
        resposta_correta: 1
    },
    {
        pergunta: "Quem descobriu o Brasil foi Pedro Alvares Ca...?",
        respostas: ["bral", "brel", "bril", "brol", "brul"],
        resposta_correta: 0
    },
    {
        pergunta: "Qual a cor do cavalo branco de Napoleão?",
        respostas: ["branco", "negro", "cinza claro", "castanho", "bege"],
        resposta_correta: 2
    },
    // Aqui pode ser adicionado mais perguntas para o quiz
];

function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const answerList = document.getElementById("answer-list");

    questionText.textContent = quizData[currentQuestion].pergunta;
    answerList.innerHTML = "";

    quizData[currentQuestion].respostas.forEach((answer, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = answer;
        listItem.onclick = () => checkAnswer(index);
        answerList.appendChild(listItem);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].resposta_correta;

    if (selectedIndex === correctIndex) {
        showPopup("correct-popup");
        score++;
    } else {
        showPopup("wrong-popup");
    }
}

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";

    if (popupId === "correct-popup" || popupId === "wrong-popup") {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }
}

function showScore() {
    const scorePopup = document.getElementById("score-popup");
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = score;
    scorePopup.style.display = "block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    closePopup("score-popup");
}

// Aqui inicializa o Quiz
loadQuestion();
