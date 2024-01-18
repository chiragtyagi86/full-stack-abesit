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




    // my bashiho

    app.get('/api/attendance/:username', async (req, res) => {
      const { username } = req.params;
    
      try {
        const students = await StudentModel.findOne({ username });
        if (!students) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ attendanceCount: students.attendance });
      } catch (error) {
        console.error('Error fetching attendance count:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
    
      // atendenca

    app.post('/api/markAttendance/:username', async (req, res) => {
      const { username } = req.params;
      const { type } = req.body;
    
      try {
        const user = await StudentModel.findOne({ username });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        if (type === 'P') {
          user.attendance += 1;
        }
    
        // Save the updated attendance to the database
        await user.save();
    
        res.json({ message: `Attendance marked as ${type}`, attendanceCount: user.attendance });
      } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
    

    // magdiuadh





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





// Endpoint to get attendance count
app.get('/api/attendance', async (req, res) => {
  try {
    const students = await StudentModel.findOne();
    res.json({ attendanceCount: students.attendance });
  } catch (error) {
    console.error('Error fetching attendance count:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to mark attendance (A for Absent, P for Present)
app.post('/api/markAttendance', async (req, res) => {
  const { type } = req.body;

  try {
    const students = await StudentModel.findOne();

    if (type === 'P') {
      students.attendance += 1;
    }

    // Save the updated attendance to the database
    await students.save();

    res.json({ message: `Attendance marked as ${type}`, attendanceCount: user.attendance });
  } catch (error) {
    console.error('Error marking attendance:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(3001, () => {
  console.log("server is running");
});
