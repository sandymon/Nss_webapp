import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Employees from './routes/Employees'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
   
    

    <button ><Link to="/employees">EMPLOYEES</Link></button>
    <button ><Link to="/courses">COURSES</Link></button>
    <button ><Link to="/course_sections">COURSE SECTIONS</Link></button>
    <button ><Link to="/departments">DEPARTMENTS</Link></button>
    <button ><Link to="/employers">EMPLOYERS</Link></button>
    <button ><Link to="/faculty">FACULTY</Link></button>
    <button ><Link to="/graduates">GRADUATES</Link></button>
    <button ><Link to="/majors">MAJORS</Link></button>
    <button ><Link to="/staff">STAFF</Link></button>
    <button ><Link to="/students">STUDENTS</Link></button>
    <button ><Link to="/employment_records">EMPLOYMENT RECORDS</Link></button>
    <button ><Link to="/cheating_incidents">CHEATING INCIDENTS</Link></button>
    
    </>
  )
}

export default App
