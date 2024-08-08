import express from 'express'
import cors from 'cors'
import { sumController } from './Controller/sumController.js'

const app = express()

app.use(cors())
app.use(express.json())
app.get('/', sumController)

app.listen(3000, () => {
  console.log('listening on 3000')
})