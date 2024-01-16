const mongoose = require("mongoose")

const FacultySchema = new mongoose.Schema({
    empID: String,
    fname: String,
    department: String,
    fpassword: String,
    image: String
})

const FacultyModel = mongoose.model("faculty", FacultySchema)
module.exports = FacultyModel