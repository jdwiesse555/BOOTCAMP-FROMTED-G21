import { useParams } from "react-router-dom"
const BASE_URL = 'http://127.0.0.1:3000'



export const useListametricas = () => {

  
  const fetchListametrica = async(id1) => {
   
    const options = {
      method: 'POST',
     
      headers: {
              'Content-type': 'application/json',
              'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
      },
      body: JSON.stringify({id:id1}),
      
  
    }
  
    const response = await fetch(`${BASE_URL}/listasmetrica`, options)
    
    console.log(response.content)
  
    return await response.json()
   }

   const fetchListametricas = async () => {
    
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
  
    }
  
    const response = await fetch(`${BASE_URL}/listasmetricas`,options)
  
    return await response.json()
  }



  const createListametricas = async (form) => {
    
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({data:form})
    }
    
    const response = await fetch(`${BASE_URL}/registralmetrica`, options)
    
    return await response.json()
    
  }

  const removeListametricas = async (id1) => {
    
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({id:id1})
    }
  
    const response = await fetch(`${BASE_URL}/borrarlmetrica`, options)
    
    return await response.json()
  
  }

  const editListametricas = async (id,form) => {

    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({id:id,data:form})
    }
    
    const response = await fetch(`${BASE_URL}/actlmetrica`, options)
    
    return await response.json()
    
  }

  return {
    fetchListametricas,
    createListametricas,
    removeListametricas,
    fetchListametrica,
    editListametricas
  }
}