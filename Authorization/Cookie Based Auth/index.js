import express from 'express'
import cookieParser from 'cookie-parser'
import jwt from "jsonwebtoken";
import {cookieVerifierMiddleware} from './middleware/cookieVerifier.js';
import { COOKIE_SECRET, JWT_SECRET } from './constansts.js';
import cors from 'cors'

const app = express()

app.use(cookieParser(COOKIE_SECRET))
app.use(express.json())
app.use(cors({ origin: ['http://127.0.0.1:5500', 'http://localhost'], credentials: true}))

const user = {
  userName: 'Pepe',
  password: 'Contraseña122'
}

app.post('/login', (req, res) => {
  try {
    const { userName, password } = req.body
    console.log(req.body)
    if(!userName || !password) throw new Error('You have to provid a userName and a password')
    if(userName != user.userName || user.password != password) throw new Error('Invalid Credentials') 
    const token = jwt.sign({data: user.userName}, JWT_SECRET, {expiresIn:'1h'} )
    console.log(token)
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 90000),
      sameSite: 'none',
      secure: true,
      signed: true 
    })
    return res.send()
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

app.get('/private', cookieVerifierMiddleware,  (req, res) => {
  try {
    const user = req.user
    console.log(user)
    res.send(user)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.listen(3000, (err, res) => {
  console.log("Running on port 3000")
})