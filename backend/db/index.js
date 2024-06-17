const mongoose = require("mongoose");
const { JWT_SECRET } = require("../config")

mongoose.connect("mongodb+srv://Luv2004:2004S@cluster0.lzfyn9b.mongodb.net/paytm")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

const UserSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required : true
    },
    lastName :{
        type:String,
        required : true
    },
    email :{
        type : String,
        required : true
    } ,
    password :{
        type : String,
        required :true,
        minLenght : 6
    },
    

})

const User = mongoose.model('User',UserSchema);

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const Account = mongoose.model("Account", accountSchema)
module.exports = {
    User,
    Account
}