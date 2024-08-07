import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

export const sum = (a, b) => a + b

app.get('/', (req, res) => {
  const result = sum(2, 2)
  res.send(result)
})

app.listen(3000, () => {
  console.log('listening on 3000')
})