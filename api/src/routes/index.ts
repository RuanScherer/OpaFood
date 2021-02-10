import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { createCustomersPrivateRoutes, createCustomersPublicRoutes } from "./customers";
import { createRestaurantsPublicRoutes } from "./restaurants";

const router = Router()

createCustomersPublicRoutes(router)

createRestaurantsPublicRoutes(router)

router.use(authMiddleware)

createCustomersPrivateRoutes(router)

export { router }