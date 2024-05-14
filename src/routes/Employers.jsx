import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'


function employers() {
  const [employers,setEmployers] = useState([])
  const [employer,setEmployer] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAllemployers = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/Employers")
        setEmployers(res.data)
        console.log(employers)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllemployers() 
  },[])

  


  return (
    <>
    <Navbar/>

    <h1>Employers Table</h1>
    <button><AddData fields={['Employer_id','EmployerName', 'Industry', 'address']} endpoint="employers"/></button>
    {showEdit  && <Edit fields ={employer} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='employers-table'>
      <thead>
        <tr>
          <th>Employer ID</th>
          <th>Employer Name</th>
          <th>Industry</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {employers.map((employer, index) => (
          <tr key={index}>
            <td>{employer.employer_id}</td>
            <td>{employer.EmployerName}</td>
            <td>{employer.Industry}</td>
            <td>{employer.address}</td>
            <td> <button onClick={()=>{setShowEdit(true), setEmployer(employer)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, employer.employer_id, 'employer_id')}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  )
}

export default employers
