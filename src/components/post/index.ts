import { Router } from "express";
import { findAll, store } from "./controller";

const postRouter: Router = Router();

postRouter.get("/", findAll);
postRouter.post("/", store);

export default postRouter;
