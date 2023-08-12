const express = require("express")

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

router.post("/", (req,res) => {
    res.json({
        msg:"create workout"
    })
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