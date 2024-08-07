import express from 'express'
const app = express()
import cors from 'cors'
import fs from 'node:fs'
import { randomUUID } from 'node:crypto'

app.use(cors())
app.use(express.json())
const USERS = process.cwd() + '/user.json'
const seedUsers = async () => {
  try {
    
    console.log(data)
    const userList = []
    data.results.forEach((element) => {
      console.log(element)
      userList.push({gender: element.gender, name: element.name.first, email: element.email})
    })
    fs.writeFileSync(USERS, JSON.stringify(userList))
  } catch (error) {
    console.error(error) 
  }
}

// await seedUsers()
app.get('/users', async (req, res) => {
  const result = await fetch('https://randomuser.me/api/?results=500&format=json')
  const data = await result.json() 
  res.send(data)
})

app.get('/user/:id', (req, res) => {
  const users = fs.readFileSync(USERS)
  const user = users.filter(user => user.id === req.params.id)
  if(!user) return res.status(404).send('user not found')
  res.send(user)
})

app.post('/user', (req, res) => {
  const userToCache = {
    name: req.body.name,
    email: req.body.email,
    id: randomUUID()
  }
  console.log(req.body.name, req.body.email)
  fs.appendFileSync(USERS, JSON.stringify(userToCache))
  res.send(userToCache.id)
})

app.get('/cache', (req, res) => {
  const users = fs.readFileSync(USERS)
  res.send(users)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})