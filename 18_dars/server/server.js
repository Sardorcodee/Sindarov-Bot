const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const courseRouter = require("./router/course.router");
const authRouter = require("./router/auth.router");


dotenv.config();

const port = process.env.PORT || 5000



const app = express();

app.use(cors({
    origin: ['http://localhost:5173']
}))
app.use(express.json())


app.use(authRouter);
app.use(courseRouter);



app.listen(port, console.log(port))