import { Response, NextFunction} from 'express'
import { OpaFoodRequest, IAuthenticationTokenPayload } from '../commons/interfaces'
import jwt from 'jsonwebtoken'

const authMiddleware = (request: OpaFoodRequest, response: Response, next: NextFunction) => {
  const token = request.headers.authorization

  if (!token) return response.status(401).send()

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY) as IAuthenticationTokenPayload

    request.userId = payload._id
    next()
  } catch (error) {
    console.log(error)
    return response.status(401).send()
  }
}

export { authMiddleware }