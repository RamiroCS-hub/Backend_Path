import { validateBody } from "../Validation/validation.js"
import { sum } from "../Service/sum.js"

export const sumController = (req, res) => {
  console.log(req.body)
  if(!validateBody(req.body)) return res.status(400).send()
  const {a, b} = req.body
  const result = sum(a, b)
  res.status(200).send({ result })
}