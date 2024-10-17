export const fetchTanques = async () => {
    const url = 'http://localhost:3000/tanques'
  
    const response = await fetch(url)
    console.log("3",response)
    return await response.json()
  }

  export const createTanques= async (data) => {
   const url = 'http://localhost:3000/tanques'
    console.log("1",data)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify(data)
    }
  
    const response = await fetch(url, options)
    console.log("2",response)
    return await response.json()
  }


  // crear un registro  Crearemos una petición del tipo POST para el endpoint /students
  export const updateTanques = async  (data) => {
  const url = `http://localhost:3000/tanques`
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify({
   
        HEIGHT_PIES:data.HEIGHT_PIES      
      }
        )
  }
  const response = await fetch(url, options)
  
  return await response.json()
}

export const delPeliculas = async (id) => {
    const url = `https://670891fc8e86a8d9e42f4d14.mockapi.io/peli/${id}`
 
  
    const options = {
      method: 'DELETE'
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }

