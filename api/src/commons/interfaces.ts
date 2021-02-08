import { Request } from "express";

interface OpaFoodRequest extends Request {
  userId: string
}

interface IAuthenticationTokenPayload extends Object {
  _id: string
  name: string
}

export { OpaFoodRequest, IAuthenticationTokenPayload }