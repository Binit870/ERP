const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseCode: { type: String, required: true, unique: true },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);
