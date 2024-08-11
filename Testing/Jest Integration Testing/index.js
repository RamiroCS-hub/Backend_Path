import express from 'express'
import cors from 'cors'
import index from './Routes/indexRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

index(app) // Patron de inversión de control

app.listen(3000, () => {
  console.log('listening on 3000')
})