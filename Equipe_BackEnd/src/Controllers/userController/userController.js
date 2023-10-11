const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Chame o serviço de autenticação para validar as credenciais
    const authService = new authService(userRepository);
    await authService.authenticateUser(username, password);

    // Se a autenticação for bem-sucedida, envie uma resposta apropriada
    res.status(200).json({ message: 'Autenticação bem-sucedida' });
  } catch (error) {
    // Em caso de erro, envie uma resposta de erro
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;