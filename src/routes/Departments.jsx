import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'



function departments() {
  const [departments,setdepartments] = useState([])
  const [department,setDepartment] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAlldepartments = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/departments")
        setdepartments(res.data)
        console.log(departments)
      }catch(err){
        console.log(err)
      }
    }
   fetchAlldepartments() 
  },[])



 
  return (
    <>
    <Navbar/>

     <h1>Departments Table</h1>
     <button><AddData fields={['department_id','name', 'phone', 'office_location', 'chairperson_emplid', 'chairperson_start_date', 'secretary_emplid', 'secretary_start_date']} endpoint="departments"/></button>
     {showEdit  && <Edit fields ={department} endpoint={window.location.pathname.slice(1)}/>}   

  <table className='departments-table'>
    <thead>
      <tr>
        <th>Department ID</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Office Location</th>
        <th>Chairperson Emplid</th>
        <th>Chairperson Start Date</th>
        <th>Secretary Emplid</th>
        <th>Secretary Start Date</th>
      </tr>
    </thead>
    <tbody>
      {departments.map((department, index) => (
        <tr key={index}>
          <td>{department.department_id}</td>
          <td>{department.name}</td>
          <td>{department.phone}</td>
          <td>{department.office_location}</td>
          <td>{department.chairperson_emplid}</td>
          <td>{department.chairperson_start_date}</td>
          <td>{department.secretary_emplid}</td>
          <td> <button onClick={()=>{setShowEdit(true), setDepartment(department)}}>Edit</button></td>
          <td> <button onClick={() => {handleDelete(window.location.pathname, department.department_id, 'department_id')}}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>

    </>
  )
}

export default departments
