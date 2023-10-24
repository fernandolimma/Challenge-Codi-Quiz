const service = require('../userService');

function login(req, res) {
    const { email, password } = req.body;

    const result = service.loginUser(email, password);

    if (result.success) {
        
        res.redirect('');
    } else {
        
        res.redirect('/login?erro=credenciais_invalidas');
    }
}

module.exports = {
    login,
};
