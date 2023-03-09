const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./routes/user.route');

// Middlewares 
app.use(cors());
app.use(express.json());


// routes 
app.use("/user", userRouter);



app.get('/', (req, res) => {
    res.send("Server Running");
})

app.all("*", (req, res) => {
    res.send("No Route Found");
})

app.listen(port, () => {
    console.log(`Server Running on ${port} ....`)
})