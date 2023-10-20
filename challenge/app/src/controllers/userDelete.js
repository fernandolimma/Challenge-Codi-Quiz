import { prisma } from '../database/prismaClient.js'

export class UserDelete {
  async handle(req, res) {
    try {
      const { id } = req.params

      const usuario = await prisma.users.findUnique({
        where: { id: String(id) },
      })

      if (!usuario) {
        return res.status(404).json({ Mensagem: 'Usuário não encontrado.' })
      }

      await prisma.users.delete({
        where: {
          id: String(id),
        },
      })

      return res
        .status(200)
        .json({ Mensagem: 'Usuário deletada com sucesso.' })
    } catch (error) {}
  }
}
