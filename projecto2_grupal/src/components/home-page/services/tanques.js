//const BASE_URL = 'http://127.0.0.1:3000'

const BASE_URL = 'https://sist-tanques.onrender.com'

export const useTanques = () => {


const fetchTanque = async (id1) => {
  
  const options = {
    method: 'POST',
   
    headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
    },
    body: JSON.stringify({id:id1}),
    

  }

  const response = await fetch(`${BASE_URL}/devtanques`, options)
  
  console.log(response.content)

  return await response.json()
}

  const fetchTanques = async () => {
    
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
  
    }
  
    const response = await fetch(`${BASE_URL}/tanques`,options)
  
    return await response.json()
  }



  const createTanques = async (form) => {
    
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({data:form})
    }
    console.log("paso123")
    console.log(options)
    const response = await fetch(`${BASE_URL}/tanque`, options)
    
    return await response.json()
  }



   const removeTanques = async (id1) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
         'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
  
      },
      body: JSON.stringify({id:id1})
    }
    console.log(options)
    const response = await fetch(`${BASE_URL}/deltanques`, options)
    
    return await response.json()
  }
  

 const editTanques = async (id,form) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
       'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`

    },
    body: JSON.stringify({id:id,data:form})
  }
  console.log(options)
  const response = await fetch(`${BASE_URL}/acttanques`, options)
  
  return await response.json()
}

  return {
    fetchTanques,
    createTanques,
    removeTanques,
    fetchTanque,
    editTanques
  }
}