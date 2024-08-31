import express from "express";
import { getTransactionsController } from "../Controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/getTransactions/:user_address", getTransactionsController);

export default userRouter;