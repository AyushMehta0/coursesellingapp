const express = require('express');

const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

