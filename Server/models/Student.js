const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    username: String,
    name: String,
    roll_no: String,
    password: String,
    image: String
})

const StudentModel = mongoose.model("student", StudentSchema)
module.exports = StudentModel