import express from 'express'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'

const app = express()

const delimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Define the time to wait after the limit has been reached
  limit: 2, // Define the limit of trys
  message: 'Rate limit exceeded' //Message to display when limit has been reached
})

app.use(helmet()) // -> This middleware is responsible for handling the HSTS Header in all responses
app.use(delimiter)
app.use(cors())

app.get('/', (req, res) => {
  res.send('Still running!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})