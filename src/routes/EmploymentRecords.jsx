import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'

import AddData from '../components/AddData'

function EmployementRecords() {
  const [employmentRecords,setEmploymentRecords] = useState([])
  const [employmentRecord,setEmploymentRecord] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAllEmploymentRecords = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/employment_records")
        setEmploymentRecords(res.data)
        console.log(employmentRecords)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllEmploymentRecords() 
  },[])

  
  return (
    <>
    <Navbar/>

    <h1>Employment Records Table</h1>
    <button><AddData fields={['record_id','emplid','employer_id','start_date', 'end_date', 'job_title_or_position']} endpoint="employment_records"/></button>
    {showEdit  && <Edit fields ={employmentRecord} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='employment-records-table'>
      <thead>
        <tr>
          <th>Record ID</th>
          <th>Emplid</th>
          <th>Employer ID</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Job Title or Position</th>
        </tr>
      </thead>
      <tbody>
        {employmentRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.record_id}</td>
            <td>{record.emplid}</td>
            <td>{record.employer_id}</td>
            <td>{record.start_date}</td>
            <td>{record.end_date}</td>
            <td>{record.job_title_or_position}</td>
            <td> <button onClick={()=>{setShowEdit(true), setEmploymentRecord(record)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, record.record_id, 'record_id')}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  )
}

export default EmployementRecords
