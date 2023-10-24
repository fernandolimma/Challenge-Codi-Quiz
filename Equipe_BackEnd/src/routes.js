import express from 'express'
import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
    return res.render('homepage.ejs')
})

router.get('/cadastro', (req, res) => {
    return res.render('cadastro.ejs')
  })

router.get('/usuario', (req, res) => {
    return res.render('cpanel.ejs')
})

router.get('/quiz', (req, res) => {
    return res.render('quiz.ejs')
})

export { router }

