import  {useState, useEffect} from 'react'
import './Dashbord.css'
// import  { useState, useEffect } from 'react';
const Dashbord = () => {
    const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3001/students')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='suio'>
     <h1>Student Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Role Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.password}</td>
              <td>{student.roll_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashbord
