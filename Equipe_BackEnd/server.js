import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir o uso do CORS, se necessário
app.use(cors());


app.post('/login', (req, res)=> {
    const {email, password} = req.body;
    if (email == 'email' && password == 'senha') {
        res.status(200).send('Login bem sucedido.');
    }
    else {
        res.status(401).send('Credenciais inválidas.')
    }
})
// Define a pasta de arquivos estáticos (páginas HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'Equipe_LandingPage')));

// Rota para qualquer outra rota que não corresponda a um arquivo estático
app.get('*', (req, res) => {
    res.status(404).send('Página não encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});