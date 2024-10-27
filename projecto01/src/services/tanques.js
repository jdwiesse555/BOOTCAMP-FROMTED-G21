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
  const url = `http://localhost:3000/tanques/${data.id}`
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify({
        codigo: data.codigo, 
        metrica: data.metrica,
        capaciadad:data.capaciadad, 
        HEIGHT_PIES:data.HEIGHT_PIES      
      }
        )
  }
  const response = await fetch(url, options)
  
  return await response.json()
}

export const delTanques = async (id) => {
  const url = `http://localhost:3000/tanques/${id}`

 
  
    const options = {
      method: 'DELETE'
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }

