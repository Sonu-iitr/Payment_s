const express = require("express")
const cors = require("cors")
const app = express();
const userRouter =  require("./routes/user");
const accountRouter = require('./routes/account')

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/account",accountRouter)

app.listen(3000,()=>{
    console.log("App listening to PORT 3000");
})