import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'



function Staff() {
  const [staff,setStaff] = useState([])
  const [staffmember,setStaffmember] = useState([])
  const [showEdit, setShowEdit] = useState(false);


  useEffect(()=>{
    const fetchAllStaff = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/Staff")
        setStaff(res.data)
        console.log(staff)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllStaff() 
  },[])


  

  return (
    <>
    <Navbar/>

    <h1>Staff Table</h1>
    <button><AddData fields={['emplid', 'position']} endpoint="staff"/></button>
    {showEdit  && <Edit fields ={staffmember} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='staff-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {staff.map((member, index) => (
          <tr key={index}>
            <td>{member.emplid}</td>
            <td>{member.position}</td>
            <td> <button onClick={()=>{setShowEdit(true), setStaffmember(member)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, member.emplid, 'emplid')}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default Staff
