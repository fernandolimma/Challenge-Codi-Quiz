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
    document.addEventListener('DOMContentLoaded', function () {
    // Selecionando form e input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Deixando a senha visivel
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);

});