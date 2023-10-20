import express from 'express'
import cors from 'cors'
import { router } from './routes.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(router)

app.set('view engine', 'ejs')
app.set('views', './src/views/pages')

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Seu servidor está rodando em http://localhost:${port}`);
});