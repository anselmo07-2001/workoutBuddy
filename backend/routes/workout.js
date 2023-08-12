const express = require("express")
const WorkoutModel = require("../models/workoutModel")
const workoutController = require("../controller/workoutController")

// /api/workouts
const router = express.Router()

router.get("/", workoutController.getWorkouts)
router.get("/:id", workoutController.getWorkout)
router.post("/", workoutController.createWorkout)
router.patch("/:id", workoutController.updateWorkout)
router.delete("/:id", workoutController.deleteWorkout)


module.exports = router