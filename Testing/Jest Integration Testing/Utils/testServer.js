import express from 'express'
import supertest from 'supertest'

export const testServer = (route) => {
  const app = express()
  app.use(express.json())
  route(app)
  return supertest(app)
}