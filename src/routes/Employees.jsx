import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'


function employees() {
  const [employees,setEmployees] = useState([])
  const [employee,setEmployee] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  
  useEffect(()=>{
    const fetchAllEmployees = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/employees")
        setEmployees(res.data)
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    }
    
   fetchAllEmployees() 
  },[])



  return (
    <>
      <Navbar/>
     <h1>Employees Table</h1>
      <button><AddData  fields={['emplid', 'name', 'ssn', 'phone', 'email', 'address', 'office_location', 'date_of_hire', 'role']} endpoint="employees"/></button> 
      {showEdit  && <Edit fields ={employee} endpoint={window.location.pathname.slice(1)}/>}   
     <table className='employees-table'>
        <thead>
          <tr>
            <th>Emplid</th>
            <th>Name</th>
            <th>SSN</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>office Location</th>
            <th>Date Hired</th>
            <th>Role</th>
           
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.emplid}</td>
              <td>{employee.name}</td>
              <td>{employee.ssn}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.office_location}</td>
              <td>{employee.date_of_hire}</td>
              <td>{employee.role}</td>
              <td> <button onClick={()=>{setShowEdit(true), setEmployee(employee)}}>Edit</button></td>
              <td> <button onClick={() => {handleDelete(window.location.pathname, employee.emplid, 'emplid')}}>Delete</button></td>

              {/* Add more table data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  )
}

export default employees
