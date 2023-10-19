import express from 'express'
import cors from 'cors'
import { router } from './routes.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(router)

app.set('view engine', 'ejs')
app.set('views', './src/views/pages')

app.listen(8080, () => {
  console.log('Server running on port 8080')
})
