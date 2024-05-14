import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'


import AddData from '../components/AddData'
function Majors() {
  const [majors,setMajors] = useState([])
  const [major,setMajor] = useState([])
  const [showEdit, setShowEdit] = useState(false);


  useEffect(()=>{
    const fetchAllMajors = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/majors")
        setMajors(res.data)
        console.log(majors)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllMajors() 
  },[])

  


  return (
    <>
      <Navbar/>

     <h1>Majors Table</h1>
     <button><AddData fields={['major_id','name', 'description', 'type_of_degree', 'total_credits_required', 'faculty_advisor_emplid']} endpoint="majors"/></button>
     {showEdit  && <Edit fields ={major} endpoint={window.location.pathname.slice(1)}/>}   

      <table className='majors-table'>
        <thead>
          <tr>
            <th>Major ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Type of Degree</th>
            <th>Total Credits Required</th>
            <th>Faculty Advisor Emplid</th>
          </tr>
        </thead>
        <tbody>
          {majors.map((major, index) => (
            <tr key={index}>
              <td>{major.major_id}</td>
              <td>{major.name}</td>
              <td>{major.description}</td>
              <td>{major.type_of_degree}</td>
              <td>{major.total_credits_required}</td>
              <td>{major.faculty_advisor_emplid}</td>
              <td> <button onClick={()=>{setShowEdit(true), setMajor(major)}}>Edit</button></td>
              <td> <button onClick={() => {handleDelete(window.location.pathname, employee.major_id, 'major_id')}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    
    </>
  )
}

export default Majors
