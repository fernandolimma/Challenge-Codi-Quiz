import express from 'express';
import bodyParser from 'body-parser';
import userController from './Controllers/userController/userController'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/login', userController.login);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
