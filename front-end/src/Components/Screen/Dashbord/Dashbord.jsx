import { useState, useEffect } from "react";
import "./Dashbord.css";
import StdNav from "../../../Students/components/StdNav/StdNav";

const Dashbord = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [attendanceCount, setAttendanceCount] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/attendance/${username}`)
      .then((response) => response.json())
      .then((data) => setAttendanceCount(data.attendanceCount))
      .catch((error) =>
        console.error("Error fetching attendance count:", error)
      );
  }, [username]);

  const handleAttendance = (type) => {
    fetch(`http://localhost:3001/api/markAttendance/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAttendanceCount(data.attendanceCount);
        console.log(data.message);
      })
      .catch((error) => console.error("Error marking attendance:", error));
  };

  return (
    <>
      <StdNav />
      <div className="suio">
        <h1>Student Information</h1>
        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Addmision No</th>
              <th>Date of Birth</th>
              <th>Role Number</th>
              <th>Attendence Count</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{student.password}</td>
                <td>{student.roll_no}</td>
                <td>{student.attendance}</td>

              </tr>
            ))}
          </tbody>
        </table>

        <div>
              <div className="ansh">
              <p>
            Attendance Count for {username}: {attendanceCount}
          </p>
          <input
            type="text"
            placeholder="Enter Admisiion No"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
              </div>
            
          <button id="red" onClick={() => handleAttendance("A")}>A (Absent)</button>
          <button id="green" onClick={() => handleAttendance("P")}>P (Present)</button>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
