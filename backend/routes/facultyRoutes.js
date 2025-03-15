const express = require("express");
const Faculty = require("../models/Faculty");

const router = express.Router();

// Get all faculty members
router.get("/", async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
