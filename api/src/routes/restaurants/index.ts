import { Router } from "express";
import { createRestaurantController } from "../../useCases/CreateRestaurant";
import { verifyRestaurantController } from "../../useCases/VerifyRestaurant";

const createRestaurantsPublicRoutes = (router: Router) => {
  router.get("/restaurants/verify", (request, response) => {
    return verifyRestaurantController.handle(request, response)
  })

  router.post("/restaurants/register", (request, response) => {
    return createRestaurantController.handle(request, response)
  })
}

export { createRestaurantsPublicRoutes }