import { useParams } from "react-router-dom"

const BASE_URL = 'http://127.0.0.1:3000'

import { useMetricas } from "./metricas"

export const useMedidas = () => {


  
  const fetchMedida = async(id1) => {
    const options = {
      method: 'POST',
     
      headers: {
              'Content-type': 'application/json',
              'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
      },
      body: JSON.stringify({id:id1}),
      
  
    }
  
    const response = await fetch(`${BASE_URL}/medicion`, options)
  
    console.log(response.content)
  
    return await response.json()
   }



  const fetchMedidas = async() => {
   // const q = query(reference,where("username","==","jdwiesse"))
     
   const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
   

  }
  console.log(options)
  const response = await fetch(`${BASE_URL}/listasmediciones`,options)

  return await response.json()
}








  const createMedidas = async (dato) => {
    //console.log(fetchvol(form.crudo_pies+form.crudo_pul,form.metrica))
    //const { fetchvol} = useMetricas()
    //let vol = fetchvol(form.crudo_pies+form.crudo_pul,form.metrica)

    const newMedidas = {
        fecha: dato.fecha ,
        tanque: dato.tanque,
        metrica:dato.metrica,
        crudo_pies:dato.crudo_pies.padStart(2,0),
        crudo_pul:dato.crudo_pul,
        agua_pies:dato.agua_pies.padStart(2,0),
        agua_pul:dato.agua_pul,
        stock_crudo:0,
        stock_agua:0
    }
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({data:newMedidas})
    }
    
    const response = await fetch(`${BASE_URL}/registramedicion`, options)
    
    return await response.json()
    

  }

  const removeMedidas = async (id1) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({id:id1})
    }
  
    const response = await fetch(`${BASE_URL}/borrarmedicion`, options)
    
    return await response.json()
  
  
  }

  const editMedidas = async (id,form) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({id:id,data:form})
    }
    
    const response = await fetch(`${BASE_URL}/actlmedicion`, options)
    
    return await response.json()
    

  


  }
  return {
    fetchMedidas,
    createMedidas,
    removeMedidas,
    fetchMedida,
   
    editMedidas
  }
}