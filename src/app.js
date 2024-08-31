import express from "express";
import mainRouter from "./Routers/mainRouter.js";
import { connectDb } from "./db/connect.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(express.json());

connectDb();

app.use("/api/v1",mainRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});