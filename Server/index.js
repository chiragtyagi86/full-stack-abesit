const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require("./models/Student");
const FacultyModel = require("./models/Faculty");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://root:Dabur%40123@cluster0.29yjgjn.mongodb.net/ABESIT"
);



app.post("/regis", (req, res) => {
  StudentModel.create(req.body)
    .then((student) => res.json(student))
    .catch((err) => res.json(err));
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  StudentModel.findOne({ username: username }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("success");
      } else {
        res.json("pass is incorect");
      }
    } else {
      res.json("error 404 user not found");
    }
  });
});

// for faculty api

app.post("/regis2", (req, res) => {
  FacultyModel.create(req.body)
    .then((faculty) => res.json(faculty))
    .catch((err) => res.json(err));
});

app.post("/faculty", (req, res) => {
  const { empID, fpassword } = req.body;
  FacultyModel.findOne({ empID: empID }).then((user) => {
    if (user) {
      if (user.fpassword == fpassword) {
        res.json("success");
      } else {
        res.json("pass is incorect");
      }
    } else {
      res.json(" error 404 User Not Found ");
    }
  });
});

app.get("/students", async (req, res) => {
  try {
    const students = await StudentModel.find().exec();
    res.json(students);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
