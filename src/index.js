import express from "express";
import mainRouter from "./Routers/mainRouter.js";
import { connectDb } from "./db/connect.js";

const app = express();

app.use(express.json());

connectDb();

app.use("api/v1",mainRouter);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});