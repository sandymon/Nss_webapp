import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'

import AddData from '../components/AddData'

function CourseSections() {
  const [courseSections,setCourseSections] = useState([])
  const [courseSection,setCourseSection] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAllCourseSections = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/course_sections")
        setCourseSections(res.data)
        console.log(courseSections)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllCourseSections() 
  },[])

  
  return (
    <>
      <Navbar/>

    <h1>Course Sections Table</h1>
    <button><AddData fields={['sectionID', 'CourseID', 'semester_year', 'room_Number', 'schedule', 'instructor_emplid']} endpoint="course_sections"/></button>
    {showEdit  && <Edit fields ={courseSection} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='course-sections-table'>
    <thead>
        <tr>
        <th>Section ID</th>
        <th>Course ID</th>
        <th>Semester Year</th>
        <th>Room Number</th>
        <th>Schedule</th>
        <th>Instructor Emplid</th>
        </tr>
    </thead>
    <tbody>
        {courseSections.map((section, index) => (
        <tr key={index}>
            <td>{section.sectionID}</td>
            <td>{section.CourseID}</td>
            <td>{section.semester_year}</td>
            <td>{section.room_Number}</td>
            <td>{section.schedule}</td>
            <td>{section.instructor_emplid}</td>
            <td> <button onClick={()=>{setShowEdit(true), setCourseSection(section)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, section.sectionID, 'sectionID')}}>Delete</button></td>
        </tr>
        ))}
    </tbody>
    </table>
        
    </>
  )
}

export default CourseSections
