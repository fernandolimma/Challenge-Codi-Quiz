// modal Perfil
function openModal(title) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('openModal').addEventListener('click', () => {
    openModal('Modal Personalizado');
});

// modal quiz
function openModal_2(title) {
    document.getElementById('modalTitle_2').textContent = title;
    document.getElementById('modal_2').style.display = 'flex';
}

function closeModal_2() {
    document.getElementById('modal_2').style.display = 'none';
}

document.getElementById('openModal_2').addEventListener('click', () => {
    openModal_2('Modal Personalizado');
});

// modal Realatórios
function openModal_3(title) {
    document.getElementById('modalTitle_3').textContent = title;
    document.getElementById('modal_3').style.display = 'flex';
}

function closeModal_3() {
    document.getElementById('modal_3').style.display = 'none';
}

document.getElementById('openModal_3').addEventListener('click', () => {
    openModal_3('Modal Personalizado');
});

// modal Configurações
function openModal_4(title) {
    document.getElementById('modalTitle_4').textContent = title;
    document.getElementById('modal_4').style.display = 'flex';
}

function closeModal_4() {
    document.getElementById('modal_4').style.display = 'none';
}

document.getElementById('openModal_4').addEventListener('click', () => {
    openModal_4('Modal Personalizado');
});

// modal Vídeo Aulas
function openModal_5(title) {
    document.getElementById('modalTitle_5').textContent = title;
    document.getElementById('modal_5').style.display = 'flex';
}

function closeModal_5() {
    document.getElementById('modal_5').style.display = 'none';
}

document.getElementById('openModal_5').addEventListener('click', () => {
    openModal_5('Modal Personalizado');
});

