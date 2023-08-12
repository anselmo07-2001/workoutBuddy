require("dotenv").config()

const express = require("express")
const workoutRoutes = require("./routes/workout")

//express app
const app = express()

//MW
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})



//routes
app.use("/api/workouts", workoutRoutes)

//listen for request
app.listen(process.env.PORT, () => {
    console.log("listen to port ", process.env.PORT)
})