import React from 'react'
import new_collections from '../Assets/new_collections'
import './Students.css'

const Students = () => {
  return (
    <div>
      <div className="buses">
     
     <div className="bus-card">
       {new_collections.map((item) => (
      <div className="box">
       

             <span>{item.name}</span>
             <span>{item.roll_no}</span>
             <span>{item.year}</span>
             <span>{item.branch}</span>
             <span>{item.section}</span>

           </div>

         
       ))}
     </div>
     
   </div>
    </div>
  )
}

export default Students
