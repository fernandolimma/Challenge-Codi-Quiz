document.addEventListener("DOMContentLoaded", function () {
// limita os caracteres do cpf
$(document).ready(function(){
    $('#cpf').inputmask();
    });

//style para caixa de seleção de deficiencia

function mostrarCaixaTexto() {
    document.getElementById('outra_deficiencia').style.display = 'block';
    }

function ocultarCaixaTexto() {
    document.getElementById('outra_deficiencia').style.display = 'none';
    }


function mostrarCaixaTextoGen() {
     document.getElementById('outrogen_text').style.display = 'block';
    }
function ocultarCaixaTextoGen() {
    document.getElementById('outrogen_text').style.display = 'none';
    }

    function mostrarCaixaTextoRac() {
        document.getElementById('outrorac_text').style.display = 'block';
       }
   function ocultarCaixaTextoRac() {
       document.getElementById('outrorac_text').style.display = 'none';
       }


    // Formulario Configurações

    // Selecionando form e input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Deixando a senha visivel
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});


// pop-up

var overlay = document.getElementById("overlay");

function showOverlay() {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
}

function hideOverlay() {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
}

  var termosPopup = document.getElementById("termos-popup");
  var politicaPopup = document.getElementById("politica-popup");
  var contatoPopup = document.getElementById("contato-popup");
  var closeTermosPopup = document.getElementById("close-termos-popup");
  var closePoliticaPopup = document.getElementById("close-politica-popup");
  var closeContatoPopup = document.getElementById("close-contato-popup");

  var openTermosLinks = document.querySelectorAll("#termos-foot, #termos-link");
  var openPoliticaLink = document.getElementById("politica-foot");
  var openContatoLink = document.getElementById("contato-foot");

  openTermosLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          termosPopup.style.display = "block";
          showOverlay();
      });
  });

  openPoliticaLink.addEventListener("click", function (e) {
      e.preventDefault();
      politicaPopup.style.display = "block";
      showOverlay();
  });

  openContatoLink.addEventListener("click", function (e) {
      e.preventDefault();
      contatoPopup.style.display = "block";
      showOverlay();
  });

  closeTermosPopup.addEventListener("click", function () {
     termosPopup.style.display = "none";
     hideOverlay();
  });

  closePoliticaPopup.addEventListener("click", function () {
      politicaPopup.style.display = "none";
      hideOverlay();
  });

  closeContatoPopup.addEventListener("click", function () {
      contatoPopup.style.display = "none";
      hideOverlay();
  });

});