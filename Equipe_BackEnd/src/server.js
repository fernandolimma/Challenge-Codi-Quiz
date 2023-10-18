import express from "express";
import path from "path";
import fs from "fs";
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const landingPageDirectory = path.join(__dirname, './Equipe_LandingPage');

// Middleware para permitir o uso do CORS, se necessário
app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs")
app.set("views", "./src/views")


app.get('/', (req, res) => {
    res.render("index");
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'email' && password === 'senha') {
        // Autenticação bem-sucedida, redirecione para a página de painel do usuário
        res.redirect('/painel_de_usuario');
    } else {
        // Credenciais inválidas, redirecione de volta para a página de login com uma mensagem de erro
        res.redirect('/login?erro=credenciais_invalidas');
    }
});

// Rota para qualquer outra rota que não corresponda a um arquivo estático
app.get('*', (req, res) => {
    res.status(404).send('Página não encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});