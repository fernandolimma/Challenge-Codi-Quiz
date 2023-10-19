import { prisma } from '../database/prismaClient.js'

export class CreateUser {
  async handle(req, res) {
    try {
      const { name, email, password } = req.body

      await prisma.users.create({
        data: {
          name,
          email,
          password,
        },
      })

      return res.status(200).render('createUser')
    } catch (error) {
      console.log(error)
      return res.status(400).json({ Mensagem: 'Erro ao criar usuário.' })
    }
  }
}
