import { prisma } from '../database/prismaClient.js'

export class ListUsers {
  async handle(req, res) {
    try {
      const users = await prisma.users.findMany()

      return res.json(users)
    } catch (error) {
      return res.status(400).json({ Mensagem: 'Erro ao listar usuários.' })
    }
  }
}
