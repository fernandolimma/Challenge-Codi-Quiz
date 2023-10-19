// Importe o módulo 'userService'. Verifique o caminho correto.
const service = require('../userService');
const caminho_cpanel = './'
// Defina a função 'login' sem o par de parênteses desnecessários.
function login(req, res) {
    const { email, password } = req.body;

    const result = service.loginUser(email, password);

    if (result.success) {
        // Redirecione para a página de painel do usuário
        res.redirect('');
    } else {
        // Redirecione de volta para a página de login com uma mensagem de erro
        res.redirect('/login?erro=credenciais_invalidas');
    }
}

module.exports = {
    login,
};
