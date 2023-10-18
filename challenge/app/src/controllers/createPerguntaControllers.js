import { prisma } from '../database/prismaClient.js'

export class CreatePerguntaControllers {
  async handle(req, res) {
    try {
      const {
        pergunta,
        resposta1,
        resposta2,
        resposta3,
        resposta4,
        respostaCorreta,
      } = req.body

      const number = parseInt(respostaCorreta, 10)

      await prisma.quiz.create({
        data: {
          pergunta,
          resposta1,
          resposta2,
          resposta3,
          resposta4,
          respostaCorreta: number,
        },
      })

      return res.status(200).render('createPergunta')
    } catch (error) {
      console.log(error)
      return res.status(400).json({ Mensagem: 'Erro ao criar pergunta.' })
    }
  }
}
