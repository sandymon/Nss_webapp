import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

import AddData from '../components/AddData'
import handleDelete from '../components/Delete'
import Edit from '../components/Edit'


function CheatingIncidents() {
  const [cheatingIncidents,setCheatingIncidents] = useState([])
  const [cheatingIncident,setCheatingIncident] = useState([])
  const [showEdit, setShowEdit] = useState(false);

  useEffect(()=>{
    const fetchAllCheatingIncidents = async ()=>{
      try{
        const res = await axios.get("https://request.moonrod.cc/cheating_incidents")
        setCheatingIncidents(res.data)
        console.log(cheatingIncidents)
      }catch(err){
        console.log(err)
      }
    }
   fetchAllCheatingIncidents() 
  },[])


  


  return (
    <>
    <Navbar/>

    <h1>Cheating Incidents Table</h1>
    <button><AddData fields={['incident_id','emplid','sectionID','date', 'description', 'resolution']} endpoint="cheating_incidents"/></button>
    {showEdit  && <Edit fields ={cheatingIncident} endpoint={window.location.pathname.slice(1,-1)}/>}   

    <table className='cheating-incidents-table'>
      <thead>
        <tr>
          <th>Incident ID</th>
          <th>Emplid</th>
          <th>Section ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Resolution</th>
        </tr>
      </thead>
      <tbody>
        {cheatingIncidents.map((incident, index) => (
          <tr key={index}>
            <td>{incident.incident_id}</td>
            <td>{incident.emplid}</td>
            <td>{incident.sectionID}</td>
            <td>{incident.date}</td>
            <td>{incident.description}</td>
            <td>{incident.resolution}</td>
            <td> <button onClick={()=>{setShowEdit(true), setCheatingIncident(incident)}}>Edit</button></td>
            <td> <button onClick={() => {handleDelete(window.location.pathname, incident.incident_id, 'incident_id')}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default CheatingIncidents
