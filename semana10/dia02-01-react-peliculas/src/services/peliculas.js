export const fetchPeliculas = async () => {
    const url = 'https://670891fc8e86a8d9e42f4d14.mockapi.io/peli'
  
    const response = await fetch(url)
  
    return await response.json()
  }
  export const createPeliculas = async (data) => {
    const url = 'https://670891fc8e86a8d9e42f4d14.mockapi.io/peli'
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify(data)
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }


  // crear un registro  Crearemos una petición del tipo POST para el endpoint /students
  export const updatePeliculas = async  (data) => {
    const url = `https://670891fc8e86a8d9e42f4d14.mockapi.io/peli/${data.id}`
  
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify({
        nombre : data.nombre,
        imagen: data.imagen,
        estreno: data.estreno,
        generoId:data.generoId,
        resumen:data.resumen
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