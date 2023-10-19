//essa pasta lida com regra de negócio relacionada ao usuário

const repository = require('./userRepository.js');

function loginUser(email, password) {
    const user = repository.findUserByEmail(email);
    if (user.email === email && user.password === password) {
        return { success: true, message: 'Autenticação bem-sucedida' };
    } else {
        return { success: false, message: 'Credenciais inválidas' };
        
    }
}

module.exports = {
    loginUser,
};


