import axios from 'axios';


export default async function handleDelete(pathName, id, pkName) {

      try {
        const confirmed = window.confirm("Are you sure you want to delete this employee?");
      
        if (confirmed) {
            // If user confirms, proceed with deletion
            const res = await axios.delete(`https://request.moonrod.cc${pathName}/${id}/${pkName}`);
            if(!res.data.errorState  && res.data.index != 0){
              alert(res.data.message)
              window.location.reload()
            }else{
              alert(res.data.sqlMessage)
            }

        } else {
            // If user cancels, do nothing or provide feedback
            console.log("Deletion cancelled by user.");
        }
      
      } catch (error) {
      }
    }
    


