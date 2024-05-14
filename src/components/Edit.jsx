import React from 'react'
import axios from 'axios';

import { useState } from 'react';

function Update({fields, endpoint}) {
    const initialState = {};


    const vArr = Object.values(fields) // get values fro json 
    const kArr = Object.keys(fields) // get keys from json

    const [entityPk, setEntityPk] = useState("");
  
    const [formData, setFormData] = useState(initialState);
  
    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
      console.log(formData);
    }
    console.log(vArr[0]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const res = await axios.put(`https://request.moonrod.cc/${endpoint}/${kArr[0]}/${vArr[0]}`, formData);
        console.log(res);  
        if(res.data.index != 0){
          alert(res.data)
          window.location.reload()
        }else(
          alert(res.data.sqlMessage)
        )
  
      } catch (err) {
        alert(err);
      }
    }



  return (
<div className='update-data'>
      <form onSubmit={handleSubmit}>
        {kArr.map((field,index) => (
            
          <input
            key={field}
            type="text"
            placeholder={vArr[index]}
            
            onChange={handleChange}
            name={field}
          />
        ))}
        <button type="submit">Update {endpoint}</button>
      </form> 

    </div>  )
}

export default Update