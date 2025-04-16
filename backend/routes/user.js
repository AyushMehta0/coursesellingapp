const {Router} = require('express');
const userRouter = Router();

userRouter.post("/signup", (req, res)=>{
    res.send("User signed up");
})

userRouter.post("/login", (req, res)=>{
    res.send("User logged in");
})

module.exports = {
    userRouter
}