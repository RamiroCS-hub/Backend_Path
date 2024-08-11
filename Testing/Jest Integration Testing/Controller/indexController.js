import { validateBody } from "../Validation/validation.js"
import indexService from '../Service/indexService.js'
export default class indexClass {

  static sum (req, res) {
    console.log(req.body)
    if(!validateBody(req.body)) return res.status(400).send()
    const {a, b} = req.body
    const result = indexService.sum(a, b)
    res.status(200).send({ result })
  }
}

