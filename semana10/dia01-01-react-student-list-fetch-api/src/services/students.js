export const fetchStudents = async () => {
    const url = 'https://67074c39a0e04071d229b837.mockapi.io/api/v1/students'
  
    const response = await fetch(url)
  
    return await response.json()
  }
  
  // crear un registro  Crearemos una petición del tipo POST para el endpoint /students
  export const createStudent = async (data) => {
    const url = 'https://67074c39a0e04071d229b837.mockapi.io/api/v1/students'
  
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

  //coregir un registro
  export const updateStudent = async  (data) => {
    const url = `https://67074c39a0e04071d229b837.mockapi.io/api/v1/students/${data.id}`
  
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify({
        name : data.name,
        city: data.city
      }
        )
  }
  const response = await fetch(url, options)
  
  return await response.json()
}

export const delStudent = async (id) => {
    const url = `https://67074c39a0e04071d229b837.mockapi.io/api/v1/students/${id}`
 
  
    const options = {
      method: 'DELETE'
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }