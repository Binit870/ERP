const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    enrollmentNumber: { type: String, required: true, unique: true },
    course: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);
