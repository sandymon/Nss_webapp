import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import AddData from '../components/AddData'
import Navbar from './Navbar'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'



function courses() {
  const [courses,setCourses] = useState([])
  const [course,setCourse] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAllCourses = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/courses")
        setCourses(res.data)
        
      }catch(err){
        console.log(err)
      }
    }
   fetchAllCourses() 
   
  },[])

  

  return (
    <>
    <Navbar/>

    <h1>Courses Table</h1>
    <button><AddData fields={['CourseID','Course_Name', 'Course_Code', 'hours', 'credits', 'description', 'department_id']} endpoint="courses"/></button>
    {showEdit  && <Edit fields ={course} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='courses-table'>
      <thead>
        <tr>
          <th>CourseID</th>
          <th>Course Name</th>
          <th>Course Code</th>
          <th>Hours</th>
          <th>Credits</th>
          <th>Description</th>
          <th>Department ID</th>
        </tr>
      </thead>
      <tbody>
        {
        courses.map((course, index) => (
          <tr key={index}>
            <td>{course.CourseID}</td>
            <td>{course.Course_Name}</td>
            <td>{course.Course_Code}</td>
            <td>{course.hours}</td>
            <td>{course.credits}</td>
            <td>{course.description}</td>
            <td>{course.department_id}</td>
            <td> <button onClick={()=>{setShowEdit(true), setCourse(course)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, course.CourseID, 'CourseID')}}>Delete</button></td>
            
          </tr>
        ))
        }{console.log(courses)}
      </tbody>
    </table>

    </>
  )
}

export default courses
