import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'


function Students() {
  const [students,setStudents] = useState([])
  const [student,setStudent] = useState([])
  const [showEdit, setShowEdit] = useState(false);


  useEffect(()=>{
    const fetchAllStudents = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/students")
        setStudents(res.data)
        
      }catch(err){
        console.log(err)
      }
    }
   fetchAllStudents() 
   console.log(students)
  },[])


 

  return (
    <>
    <Navbar/>

    <h1>Students Table</h1>
    <button><AddData fields={['emplid','first_name', 'middle_initial', 'last_name', 'date_of_birth', 'email', 'phone', 'address','Major']} endpoint="students"/></button>
    {showEdit  && <Edit fields ={student} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='students-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>First Name</th>
          <th>Middle Initial</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Major</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.emplid}</td>
            <td>{student.first_name}</td>
            <td>{student.middle_initial}</td>
            <td>{student.last_name}</td>
            <td>{student.date_of_birth}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.address}</td>
            <td>{student.Major}</td>
            <td> <button onClick={()=>{setShowEdit(true), setStudent(student)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, student.emplid, 'emplid')}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  )
}

export default Students
