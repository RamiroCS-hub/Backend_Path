import express from 'express'
import indexController from '../Controller/indexController.js'
const router = express.Router()

router.get('/', indexController.sum)

export default (app) => app.use('/index', router) // Patron de inversión de control