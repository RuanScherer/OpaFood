import { Router } from "express";
import { createCustomerController } from "./useCases/CreateCustomer";

const router = Router()

router.post("/customers/register", (request, response) => {
  return createCustomerController.handle(request, response)
})

export { router }