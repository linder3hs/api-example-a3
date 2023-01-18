import express, { type Application } from "express";
import { userRouter, postRouter } from "./components";

const app: Application = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;
