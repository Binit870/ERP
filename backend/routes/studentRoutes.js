const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
