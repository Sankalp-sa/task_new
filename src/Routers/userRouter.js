import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("Hello User");
});

export default userRouter;