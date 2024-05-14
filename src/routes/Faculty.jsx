import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'



function faculties() {
  const [faculties,setfaculties] = useState([])
  const [faculty,setfaculty] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAllfaculties = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/Faculty")
        setfaculties(res.data)
        console.log(faculties)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllfaculties() 
  },[])
  

  return (
    <>
    <Navbar/>

    <h1>Faculty Table</h1>
    <button><AddData fields={['emplid', 'rank', 'specialization', 'areas_of_research_interests', 'areas_of_teaching_interests']} endpoint="faculty"/></button>
    {showEdit  && <Edit fields ={faculty} endpoint={window.location.pathname.slice(1)}/>}   

    <table className='faculty-table'>
      <thead>
        <tr>
          <th>Emplid</th>
          <th>Rank</th>
          <th>Specialization</th>
          <th>Areas of Research Interests</th>
          <th>Areas of Teaching Interests</th>
        </tr>
      </thead>
      <tbody>
        {faculties.map((member, index) => (
          <tr key={index}>
            <td>{member.emplid}</td>
            <td>{member.faculty_rank}</td>
            <td>{member.specialization}</td>
            <td>{member.areas_of_research_interests}</td>
            <td>{member.areas_of_teaching_interests}</td>
            <td> <button onClick={()=>{setShowEdit(true), setfaculty(member)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, member.emplid, 'emplid')}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
        
    </>
  )
}

export default faculties
