import transactionModel from "../models/transactionModel.js";
import userModel from "../models/userModel.js";
import { calculateTotalExpenses, fetchTransactions } from "../utils/utils.js";

export const getTransactionsController = async (req, res) => {
  try {
    const user_address = req.params.user_address;

    const transactions = await fetchTransactions(user_address);

    // check if user exists in the database

    let user = await userModel.findOne({ address: user_address });

    if (!user) {
      user = new userModel({ address: user_address });

      await user.save();
    }

    // insert all transactions in the database

    transactions.forEach(async (transaction) => {
      // check if transaction already exists in the database

      const tx = await transactionModel.findOne({ hash: transaction.hash });

      if (!tx) {
        const trans = { ...transaction, user: user._id };

        const newTransaction = new transactionModel(trans);

        await newTransaction.save();
      }
    });

    res.status(200).json({ user_address, transactions });

  } catch (error) {

    console.log(error)

    res.status(500).json({ error, message: "Internal server error" });
  }
};


export const getEthereumPriceController = async (req, res) => {

    try {

        const result = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr");

        const data = await result.json();

        res.status(200).json({
            ethereumPrice: data.ethereum.inr
        });
        
    } catch (error) {
        
        res.status(500).json({ error, message: "Internal server error" });

    }

}

export const getUserExpensesController = async (req, res) => {

    try {
        
        const transaction = await fetchTransactions(req.params.user_address);

        const totalExpenses = calculateTotalExpenses(transaction);

        const result = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr");

        const data = await result.json();
        
        const ethereumPrice = data.ethereum.inr;

        res.status(200).json({
            user_address: req.params.user_address,
            totalExpenses,
            ethereumPrice,
        });

    } catch (error) {
        
        res.status(500).json({ error, message: "Internal server error" });

    }

}