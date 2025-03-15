const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find().populate("faculty");
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
