import { useParams } from "react-router-dom"

const BASE_URL = 'http://127.0.0.1:3000'



export const useMetricas = () => {


const fetchMetrica = async (id1) => {
  
  const options = {
    method: 'POST',
   
    headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
    },
    body: JSON.stringify({id:id1}),
    

  }

  const response = await fetch(`${BASE_URL}/devmetrica`, options)

  console.log(response.content)

  return await response.json()
}

  const fetchMetricas= async (page,perPage) => {
    
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
     
  
    }
    console.log(options)
    const response = await fetch(`${BASE_URL}/metricas?page=${page}&perPage=${perPage}`,options)
  
    return await response.json()
  }



  const createMetricas = async (form) => {
    
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({data:form})
    }

    const response = await fetch(`${BASE_URL}/metrica`, options)
    
    return await response.json()
  }



   const removeMetricas = async (id1) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({id:id1})
    }
  
    const response = await fetch(`${BASE_URL}/delmetrica`, options)
    
    return await response.json()
  }
  

 const editMetricas = async (id,form) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
       'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`

    },
    body: JSON.stringify({id:id,data:form})
  }
  
  const response = await fetch(`${BASE_URL}/actmetrica`, options)
  
  return await response.json()
}

const fetchvol = async(valor,valor1) => {

  const options = {
    method: 'POST',
   
    headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
    },
    body: JSON.stringify({medida:valor,metrica:valor1}),
    

  }

  const response = await fetch(`${BASE_URL}/devmetrica`, options)

  console.log(response.content)

  return await response.json()

 
}
  return {
    fetchMetricas,
    createMetricas,
    removeMetricas,
    fetchMetrica,
    editMetricas
  }
}