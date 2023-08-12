require("dotenv").config()

const express = require("express")

//express app
const app = express()

//MW
app.use((req,res,next) => {
    console.log(req.path, req.method)
})

//routes
app.get("/", (req,res) => {
    res.json({
        msg: "Hello World!"
    })  
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log("listen to port ", process.env.PORT)
})