const WorkoutModel = require("../models/workoutModel")
const mongoose = require("mongoose")

exports.getWorkouts = async (req,res) => {
    const workouts = await WorkoutModel.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}


exports.getWorkout = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await WorkoutModel.findById(id)

    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}


exports.createWorkout = async (req,res) => {
    const { title, load, reps } = req.body

    try {
        const workout = await WorkoutModel.create({title,load,reps})
        return res.status(201).json(workout)
    }
    catch(err) {
        console.log(err)
        return res.status(400).json({error: err.message})
    }

}

exports.deleteWorkout = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await WorkoutModel.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}


exports.updateWorkout = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await WorkoutModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}