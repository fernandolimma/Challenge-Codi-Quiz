// modal Perfil
function openModal(title) {
  document.getElementById('modalTitle').textContent = title
  document.getElementById('modal').style.display = 'flex'
}

function closeModal() {
  document.getElementById('modal').style.display = 'none'
}

document.getElementById('openModal').addEventListener('click', () => {
  openModal('Modal Personalizado')
})

// modal quiz
function openModal2(title) {
  document.getElementById('modalTitle_2').textContent = title
  document.getElementById('modal_2').style.display = 'flex'
}

function closeModal2() {
  document.getElementById('modal_2').style.display = 'none'
}

document.getElementById('openModal_2').addEventListener('click', () => {
  openModal2('Modal Personalizado')
})

// modal Relatórios
function openModal3(title) {
  document.getElementById('modalTitle_3').textContent = title
  document.getElementById('modal_3').style.display = 'flex'
}

function closeModal3() {
  document.getElementById('modal_3').style.display = 'none'
}

document.getElementById('openModal_3').addEventListener('click', () => {
  openModal3('Modal Personalizado')
})

// modal Configurações
function openModal4(title) {
  document.getElementById('modalTitle_4').textContent = title
  document.getElementById('modal_4').style.display = 'flex'
}

function closeModal4() {
  document.getElementById('modal_4').style.display = 'none'
}

document.getElementById('openModal_4').addEventListener('click', () => {
  openModal4('Modal Personalizado')
})

// modal Vídeo Aulas
function openModal5(title) {
  document.getElementById('modalTitle_5').textContent = title
  document.getElementById('modal_5').style.display = 'flex'
}

function closeModal5() {
  document.getElementById('modal_5').style.display = 'none'
}

document.getElementById('openModal_5').addEventListener('click', () => {
  openModal5('Modal Personalizado')
})

const listPerguntas = document.querySelector('.list-perguntas')
async function getPerguntas() {
  const response = await fetch('http://localhost:8080/quiz')
  if (!response.ok) {
    throw new Error('Não foi possível carregar as perguntas.')
  }
  const data = await response.json()
  console.log(data)

  data.forEach((item) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `
      <button class="remove-pergunta" data-id="${item.id}">
        Excluir
      </button>
      ${item.pergunta}
    `
    listPerguntas.appendChild(listItem)
  })

  // Adicione um evento de clique para os botões de exclusão
  const removeButtons = document.querySelectorAll('.remove-pergunta')
  removeButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id')
      if (id) {
        const success = await excluirPergunta(id)
        if (success) {
          // Atualize a lista após a exclusão
          listPerguntas.innerHTML = ''
          getPerguntas()
        }
      }
    })
  })
}

async function excluirPergunta(id) {
  const response = await fetch(`http://localhost:8080/quiz/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    console.error(`Não foi possível excluir a pergunta com o ID ${id}.`)
    return false
  }
  return true
}

getPerguntas()
