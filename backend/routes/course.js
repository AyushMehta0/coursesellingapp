const {Router} = require('express');
const courseRouter = Router();

courseRouter.post("/create", (req, res)=>{
    res.send("Course created");
});

courseRouter.get("/all", (req, res)=>{
    res.send("All courses fetched");
});

module.exports = {
    courseRouter
}