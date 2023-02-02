import express, { type Application } from "express";
import * as ROUTER from "./components";
import connect from "./datasource";
import cors from "cors";

const app: Application = express();

app.use(cors());

connect().catch((error) => console.log(`Error database mongo: ${error}`));

app.use(express.json());

app.use("/api/v1/users", ROUTER.userRouter);
app.use("/api/v1/posts", ROUTER.postRouter);
app.use("/api/v1/students", ROUTER.studentRouter);

export default app;
