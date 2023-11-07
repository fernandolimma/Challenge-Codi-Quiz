import { prisma } from '../database/prismaClient.js'

export class DeletePerguntaControllers {
  async handle(req, res) {
    try {
      const { id } = req.params

      const pergunta = await prisma.quiz.findUnique({
        where: { id: String(id) },
      })

      if (!pergunta) {
        return res.status(404).json({ Mensagem: 'Pergunta não encontrada.' })
      }

      await prisma.quiz.delete({
        where: {
          id: String(id),
        },
      })

      return res
        .status(200)
        .json({ Mensagem: 'Pergunta deletada com sucesso.' })
    } catch (error) {}
  }
}
