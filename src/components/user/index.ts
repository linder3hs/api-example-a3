import { Router } from "express";
import { findAll, store } from "./controller";

const userRouter: Router = Router();

userRouter.get("/", findAll);
userRouter.post("/", store);

export default userRouter;
