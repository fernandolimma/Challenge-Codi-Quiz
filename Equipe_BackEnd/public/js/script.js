document.addEventListener("DOMContentLoaded", function() {
// configuração do botão Login
const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

// animação das caixas de texto

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';

  function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight);
    target.forEach(function (element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  }

  animeScroll();

  if (target.length) {
    window.addEventListener('scroll', debounce(function () {
      animeScroll();
    }, 200));
  };


// Função para exibir o pop-up
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "block";
}

// Função para ocultar o pop-up
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "none";
}

// Event listeners para os links
document.getElementById("politica-link").addEventListener("click", function() {
  showPopup("politica-popup");
});

document.getElementById("termos-link").addEventListener("click", function() {
  showPopup("termos-popup");
});

document.getElementById("contato-link").addEventListener("click", function() {
  showPopup("contato-popup");
});

// Event listeners para os botões de fechar
document.getElementById("close-politica-popup").addEventListener("click", function() {
  closePopup("politica-popup");
});

document.getElementById("close-termos-popup").addEventListener("click", function() {
  closePopup("termos-popup");
});

document.getElementById("close-contato-popup").addEventListener("click", function() {
  closePopup("contato-popup");
});

});

// adição de ações de interação entre frontend e backend

const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Fazer uma chamada de API para o backend com os dados
  fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
      // Lidar com a resposta do servidor (por exemplo, exibir mensagens de sucesso/erro)
  })
  .catch(error => {
      console.error('Erro na chamada da API: ', error);
  });
});
