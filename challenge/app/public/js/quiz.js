let currentQuestion = 0
let score = 0
let previousQuestion = 0 // Variável para rastrear a pergunta anterior
let perguntas = [] // Variável para armazenar as perguntas

async function getPerguntas() {
  try {
    const response = await fetch('http://localhost:8080/quiz')
    if (!response.ok) {
      throw new Error('Não foi possível carregar as perguntas.')
    }
    const data = await response.json()
    console.log(data)

    perguntas = data.map((dado) => {
      return {
        id: dado.id,
        pergunta: dado.pergunta,
        respostas: [
          dado.resposta1,
          dado.resposta2,
          dado.resposta3,
          dado.resposta4,
        ],
        respostaCorreta: dado.respostaCorreta,
      }
    })

    loadQuestion()
  } catch (error) {
    console.error(error)
    // Lide com erros de carregamento de perguntas aqui
  }
}

function loadQuestion() {
  const questionText = document.getElementById('question-text')
  const answerList = document.getElementById('answer-list')

  questionText.textContent = perguntas[currentQuestion].pergunta
  answerList.innerHTML = ''

  perguntas[currentQuestion].respostas.forEach((answer, index) => {
    const listItem = document.createElement('li')
    listItem.textContent = answer
    listItem.onclick = () => checkAnswer(index)
    answerList.appendChild(listItem)
  })
}

function checkAnswer(selectedIndex) {
  const correctIndex = perguntas[currentQuestion].respostaCorreta

  if (selectedIndex === correctIndex) {
    showPopup('correct-popup')
    score++
  } else {
    showPopup('wrong-popup')
    document
      .getElementById('try-again-button')
      .addEventListener('click', goBackToPreviousQuestion)
    previousQuestion = currentQuestion
  }
}

function showPopup(popupId) {
  const popup = document.getElementById(popupId)
  popup.style.display = 'block'
}

function goBackToPreviousQuestion() {
  // Volte para a pergunta anterior, se houver alguma
  if (previousQuestion >= 0) {
    currentQuestion = previousQuestion
    loadQuestion()
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId)
  popup.style.display = 'none'

  if (popupId === 'correct-popup' || popupId === 'wrong-popup') {
    currentQuestion++
    if (currentQuestion < perguntas.length) {
      loadQuestion()
    } else {
      showScore()
    }
  }
}

function showScore() {
  const scorePopup = document.getElementById('score-popup')
  const scoreDisplay = document.getElementById('score')
  scoreDisplay.textContent = score
  scorePopup.style.display = 'block'
}

function restartQuiz() {
  currentQuestion = 0
  score = 0
  loadQuestion()
  closePopup('score-popup')
}

getPerguntas()
