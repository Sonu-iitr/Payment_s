const express= require("express");
const { User,Account } = require("../db/index");
const router = express.Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const z =require("zod")
const userMiddleware = require("../middleware/user");
const { route } = require("./user");
const mongoose = require("mongoose")

router.get("/balance", userMiddleware, async (req,res)=>{
    console.log("in balance");

    const account = await Account.findOne({
        userId : req.userId
    })
    console.log(account);

    if(!account){
        return res.status(403).json({
            msg : "invalid Inputs"
        })
    }
    res.json({
        balance : account.balance
    })
})


router.post ("/transfer",userMiddleware,async(req,res)=>{
    console.log("in transfer");

    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});


module.exports = router;