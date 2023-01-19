import express, { type Application } from "express";
import * as ROUTER from "./components";

const app: Application = express();

app.use(express.json());

app.use("/api/v1/users", ROUTER.userRouter);
app.use("/api/v1/posts", ROUTER.postRouter);

export default app;
