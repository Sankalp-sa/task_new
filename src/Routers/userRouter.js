import express from "express";
import { getEthereumPriceController, getTransactionsController, getUserExpensesController } from "../Controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/getTransactions/:user_address", getTransactionsController);
userRouter.get("/getEthereumPrice", getEthereumPriceController);
userRouter.get("/totalExpenses/:user_address", getUserExpensesController);

export default userRouter;  