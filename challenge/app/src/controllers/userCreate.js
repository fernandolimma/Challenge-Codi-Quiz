import { prisma } from '../database/prismaClient.js'
import bcrypt from 'bcrypt'

export class CreateUser {
  async handle(req, res) {
    try {
      const { name, email, password } = req.body

      const hashPassword = await bcrypt.hash(password, 6)

      await prisma.users.create({
        data: {
          name,
          email,
          password: hashPassword,
        },
      })

      return res
      .status(200)
      .render('createUser')
    } catch (error) {

      console.log(error)
      
      return res
      .status(400)
      .json({ Mensagem: 'Erro ao criar usuário.' })
    }
  }
}
