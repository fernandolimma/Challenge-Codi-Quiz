import { Router } from 'express'
import { CreatePerguntaControllers } from './controllers/createPerguntaControllers.js'
import { ListPerguntaControllers } from './controllers/listPerguntaControllers.js'
import { DeletePerguntaControllers } from './controllers/deletePerguntaControllers.js'
import { UserDelete } from './controllers/userDelete.js'


import { CreateUser } from './controllers/userCreate.js'
import { ListUsers } from './controllers/listUsers.js'
import { LoginControllers } from './controllers/loginControllers.js'

const router = Router()

const createPergunta = new CreatePerguntaControllers()
const listPergunta = new ListPerguntaControllers()
const deletePergunta = new DeletePerguntaControllers()
const deleteUsuario = new UserDelete()

const createUser = new CreateUser()
const listUsers = new ListUsers()

const login = new LoginControllers()

router.post('/quiz', createPergunta.handle)
router.get('/quiz', listPergunta.handle)
router.delete('/quiz/:id', deletePergunta.handle)

router.post('/cadastro', createUser.handle)
router.get('/usuarios', listUsers.handle)
router.delete('/usuarios/:id', deleteUsuario.handle)

router.post('/login', login.handle)

// pages
router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/cPanel', (req, res) => {
  return res.render('cPanel')
})

router.get('/perguntas', (req, res) => {
  return res.render('quiz')
})

router.get('/usuarios', (req, res) => {
  return res.render('usuarios')
})

router.get('/sucesso', (req, res) => {
  return res.render('createPergunta')
})

router.get('/cadastro', (req, res) => {
  return res.render('cadastro')
})


export { router }
