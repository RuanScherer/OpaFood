import { Router } from "express";
import { OpaFoodRequest } from "./commons/interfaces";
import { authMiddleware } from "./middlewares/auth";
import { authenticateCustomerController } from "./useCases/AuthenticateCustomer";
import { createCustomerController } from "./useCases/CreateCustomer";
import { createRestaurantController } from "./useCases/CreateRestaurant";
import { getCustomerProfileDataController } from "./useCases/GetCustomerProfileData";
import { resetCustomerPasswordController } from "./useCases/ResetCustomerPassword";
import { updateCustomerPasswordController } from "./useCases/UpdateCustomerPassword";
import { verifyCustomerController } from "./useCases/VerifyCustomer";
import { verifyRestaurantController } from "./useCases/VerifyRestaurant";

const router = Router()

router.post("/customers/register", (request, response) => {
  return createCustomerController.handle(request, response)
})

router.get("/customers/verify", (request, response) => {
  return verifyCustomerController.handle(request, response)
})

router.post("/customers/authenticate", (request, response) => {
  return authenticateCustomerController.handle(request, response)
})

router.post("/customers/getPasswordResetToken", (request, response) => {
  return resetCustomerPasswordController.handle(request, response)
})

router.post("/customers/updatePassword", (request, response) => {
  return updateCustomerPasswordController.handle(request, response)
})

router.post("/restaurants/register", (request, response) => {
  return createRestaurantController.handle(request, response)
})

router.get("/restaurants/verify", (request, response) => {
  return verifyRestaurantController.handle(request, response)
})

router.use(authMiddleware)

router.get("/customers/:_id", (request: OpaFoodRequest, response) => {
  return getCustomerProfileDataController.handle(request, response)
})

export { router }