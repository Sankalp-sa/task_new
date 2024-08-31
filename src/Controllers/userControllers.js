import transactionModel from "../models/transactionModel.js";
import userModel from "../models/userModel.js";

export const getTransactionsController = async (req, res) => {
  try {
    const user_address = req.params.user_address;

    const result = await fetch(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${user_address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=CCDBJ3EFT2ABRJBCD18H4U46FGRV6J7IRU`
    );

    const data = await result.json();

    const transactions = data.result;

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
