const express = require("express")
const WorkoutModel = require("../models/workoutModel")

// /api/workouts
const router = express.Router()

router.get("/", (req,res) => {
    res.json({
        msg: "Get All workouts"
    })

})

router.get("/:id", (req,res) => {
    res.json({
        msg:"Get workout"
    })
})

router.post("/", async (req,res) => {
    const { title, load, reps } = req.body

    try {
        const workout = await WorkoutModel.create({title,load,reps})
        res.status(201).json(workout)
    }
    catch(err) {
        console.log(err)
        res.status(400).json({error: err.message})
    }

})

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