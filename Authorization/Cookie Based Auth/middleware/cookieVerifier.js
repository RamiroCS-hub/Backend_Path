import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constansts.js";


export const cookieVerifierMiddleware = (req, res, next) => {
  try {
    const { token } = req.signedCookies
    console.log("Cookie: ", req.signedCookies)

    const decodedToken = jwt.verify(token, JWT_SECRET)
    if(typeof decodedToken === "string") throw new Error('Invalid Token')
    req.user = decodedToken
    next()
  } catch (err) {
    res.status(401).send(err.message)
  }
}
