const express= require("express");
const { User,Account } = require("../db/index");
const router = express.Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const z =require("zod")
const userMiddleware = require("../middleware/user")

const signupSchema = z.object({
    firstName : z.string(),
    lastName : z.string(),
    email : z.string().email(),
    password : z.string()
})

router.post("/signup", async (req,res)=>{
    console.log("in signup");
    const {firstName , lastName, email , password} = req.body;
    const { success } = signupSchema.safeParse(req.body);

    if(!success){
        return res.json({
            msg : "Invalid Inputs"
        })
    }

    const existing = await User.findOne({
        email,
    })
    
    if(existing){
        console.log(email)
        return res.status(411).json({
            msg: "already taken"
        })
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password
    })

    await Account.create({
        userId : user._id,
        balance : 1+Math.random()*10000 
    })

    const token = jwt.sign({
        userId : user._id
    },JWT_SECRET);

    res.json({
        msg : "User created",
        token
    })
})

const signinSchema = z.object({
    email : z.string().email(),
    password : z.string()
})

router.post("/signin" , async(req,res)=>{
    console.log("in signin");
    const { success } = signinSchema.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            msg : "Invalid Inputs"
        })
    }

    const { email , password } = req.body;

    const user = await User.findOne({
        email,
        password
    })


    if(user){

        const userId = user.id;
        const token = jwt.sign({
            userId
        },JWT_SECRET)
        return res.json({
            token
        })
    }
    res.status(403).json({
        msg : "invalid inputs"
    })
})

const updateBody = z.object({
    password : z.string().optional(),
    firstName : z.string().optional(),
    lastName:z.string().optional()
})

router.put("/update", userMiddleware, async (req, res) => {
    console.log("in update");
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            msg: "Invalid inputs"
        });
    }

    try {
        await User.updateOne({ _id: req.userId }, req.body); // Corrected `_id` field

        res.json({
            msg: "Updated Successfully"
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({
            msg: "Error",
            error: error.message
        });
    }
});

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;