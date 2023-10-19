import { prisma } from '../database/prismaClient.js'
import bcrypt from 'bcrypt'

export class LoginControllers {
  async handle(req, res) {
    try {
      const { email, password } = req.body

      console.log(email)
      console.log(password)

      const emailFormat = email.replace(/ /g, '')
      const passwordFormat = password.replace(/ /g, '')
      console.log(emailFormat)
      console.log(passwordFormat)

      if (!email || !password) {
        return res.status(400).json({ Mensagem: 'Credenciais incompletas' })
      }

      const user = await prisma.users.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        return res.status(404).json({ Mensagem: 'Usuário não encontrado' })
      }

      const passwordMatch = await bcrypt.compare(password, user.password)

      if (passwordMatch) {
        // Senha correta, autenticação bem-sucedida
        return res.render('paineldecontrole')
      } else {
        return res.status(401).json({ Mensagem: 'Credenciais INVÁLIDAS' })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({ Mensagem: 'Ocorreu um erro no servidor' })
    }
  }
}