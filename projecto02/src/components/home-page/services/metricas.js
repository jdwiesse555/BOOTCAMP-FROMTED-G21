const BASE_URL = import.meta.env.VITE_API_URL

export const fetchMetricas = async () => {
    const url = `${BASE_URL}/metricas`
  
    const response = await fetch(url)
    console.log("3",response)
    return await response.json()
  }

  export const getMetricas = async (id) => {
    const URL = `${BASE_URL}/metricas/${id}`
  
    const response = await fetch(URL)
  
    return await response.json()
  }
  export const createMetricas= async (data) => {
   const url = `${BASE_URL}/metricas`
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
  export const updateMetricas = async  (data) => {
  const url = `${BASE_URL}/metricas/${data.id}`
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Mimetypes
      },
      body: JSON.stringify({
        metrica: data.metrica,
        medida:  data.medida, 
        vol_bbls: data.vol_bbls     
      }
        )
  }
  const response = await fetch(url, options)
  
  return await response.json()
}

export const delMetricas = async (id) => {
  const url = `${BASE_URL}/metricas${id}`

 
  
    const options = {
      method: 'DELETE'
    }
  
    const response = await fetch(url, options)
  
    return await response.json()
  }

