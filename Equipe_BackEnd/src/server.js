import express from 'express';
import cors from 'cors';
import { router } from './routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(router)

app.set('view engine', 'ejs')
app.set('views', './src/views');

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
