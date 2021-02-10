import { Router } from "express";
import { OpaFoodRequest } from "../../commons/interfaces";
import { authenticateCustomerController } from "../../useCases/AuthenticateCustomer";
import { createCustomerController } from "../../useCases/CreateCustomer";
import { getCustomerProfileDataController } from "../../useCases/GetCustomerProfileData";
import { resetCustomerPasswordController } from "../../useCases/ResetCustomerPassword";
import { verifyCustomerController } from "../../useCases/VerifyCustomer";

const createCustomersPublicRoutes = (router: Router) => {
  router.get("/customers/verify", (request, response) => {
    return verifyCustomerController.handle(request, response)
  })

  router.post("/customers/register", (request, response) => {
    return createCustomerController.handle(request, response)
  })
  
  router.post("/customers/authenticate", (request, response) => {
    return authenticateCustomerController.handle(request, response)
  })
  
  router.post("/customers/getPasswordResetToken", (request, response) => {
    return resetCustomerPasswordController.handle(request, response)
  })
  
  router.post("/customers/updatePassword", (request, response) => {
    return resetCustomerPasswordController.handle(request, response)
  })
}

const createCustomersPrivateRoutes = (router: Router) => {
  router.get("/customers/:_id", (request: OpaFoodRequest, response) => {
    return getCustomerProfileDataController.handle(request, response)
  })
}

export { createCustomersPublicRoutes, createCustomersPrivateRoutes }