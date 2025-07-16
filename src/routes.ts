import { Router } from "express";
import authRoute from "./api/v1/auth/auth.route";

const routes = Router();

routes.use('/auth', authRoute);

export default routes;