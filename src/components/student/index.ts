import { Router } from "express";
import { findAll, store } from "./controller";

const studentRouter = Router();

studentRouter.get("/", findAll);
studentRouter.post("/", store);

export default studentRouter;
