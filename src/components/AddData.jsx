import axios from 'axios';
import React, { useState } from 'react';

function AddData({ fields, endpoint }) {
  const initialState = {};
  fields.forEach(field => {
    initialState[field] = '';
  });

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://request.moonrod.cc/${endpoint}`, formData);
      console.log(res.request);  
      if(!res.data.errorState  && res.data.index != 0){        
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
    <div className='add-data'>
      <form onSubmit={handleSubmit}>
        {fields.map((field,index) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            onChange={handleChange}
            name={field}
            required= {index === 0 && 'required'}
          />
        ))}
        <button type="submit">Add {endpoint}</button>
      </form>
    </div>



  );
}

export default AddData;
