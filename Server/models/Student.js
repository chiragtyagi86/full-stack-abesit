const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    username: String,
    name: String,
    roll_no: String,
    password: String,
    image: String,
    attendance: { type: Number, default: 0 }
})

const StudentModel = mongoose.model("student", StudentSchema)
module.exports = StudentModel