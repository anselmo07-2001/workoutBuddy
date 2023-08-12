const express = require("express")
const WorkoutModel = require("../models/workoutModel")
const workoutController = require("../controller/workoutController")

// /api/workouts
const router = express.Router()

router.get("/", workoutController.getWorkouts)
router.get("/:id", workoutController.getWorkout)
router.post("/", workoutController.createWorkout)

router.patch("/:id", (req,res) => {
    res.json({
        msg:"update workout"
    })
})

router.delete("/:id", (req,res) => {
    res.json({
        msg:"delete workout"
    })
})


module.exports = router