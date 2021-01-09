import { Router } from "express";
import { createCustomerController } from "./useCases/CreateCustomer";
import { verifyCustomerController } from "./useCases/VerifyCustomer";

const router = Router()

router.post("/customers/register", (request, response) => {
  return createCustomerController.handle(request, response)
})

router.get("/customers/verify", (request, response) => {
  return verifyCustomerController.handle(request, response)
})

export { router }