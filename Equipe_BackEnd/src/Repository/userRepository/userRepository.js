// essa pasta salva as informações relacionadas a usuário no banco de dados

const users = [
  { email: 'email', password: 'senha' },
  // Outros usuários...
];

function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

module.exports = {
  findUserByEmail,
};
