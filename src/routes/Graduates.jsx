import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'

function Graduates() {
  const [graduates,setGraduates] = useState([])
  const [graduate,setGraduate] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAllGraduates = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/graduates")
        setGraduates(res.data)
        console.log(graduates)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllGraduates() 
  },[])

  


  return (
    <>
    <Navbar/>

    <h1>Graduates Table</h1>
    <button><AddData fields={['emplid','Graduation_Year', 'DegreeEarned', 'honors', 'GPA', 'current_job_title', 'employer_id']} endpoint="graduates"/></button>
    {showEdit  && <Edit fields ={graduate} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='graduates-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>Graduation Year</th>
          <th>Degree Earned</th>
          <th>Honors</th>
          <th>GPA</th>
          <th>Current Job Title</th>
          <th>Employer ID</th>
        </tr>
      </thead>
      <tbody>
        {graduates.map((graduate, index) => (
          <tr key={index}>
            <td>{graduate.emplid}</td>
            <td>{graduate.Graduation_Year}</td>
            <td>{graduate.DegreeEarned}</td>
            <td>{graduate.honors}</td>
            <td>{graduate.GPA}</td>
            <td>{graduate.current_job_title}</td>
            <td>{graduate.employer_id}</td>
            <td> <button onClick={()=>{setShowEdit(true), setGraduate(graduate)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, graduate.emplid, 'emplid')}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default Graduates
