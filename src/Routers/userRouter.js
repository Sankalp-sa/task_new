import express from "express";
import { getEthereumPriceController, getTransactionsController } from "../Controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/getTransactions/:user_address", getTransactionsController);
userRouter.get("/getEthereumPrice", getEthereumPriceController);

export default userRouter;