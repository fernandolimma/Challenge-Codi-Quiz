import { prisma } from '../database/prismaClient.js'

export class ListPerguntaControllers {
  async handle(req, res) {
    try {
      const perguntas = await prisma.quiz.findMany()

      return res.json(perguntas)
    } catch (error) {
      return res.status(400).json({ Mensagem: 'Erro ao criar pergunta.' })
    }
  }
}
