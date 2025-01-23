const BASE_URL = 'http://127.0.0.1:3000'

export const fetchNotas = async () => {

  const response = await fetch(`${BASE_URL}/notas`)

  return response.json()
}

export const fetchUsuarios = async () => {

  const response = await fetch(`${BASE_URL}/usuario`)

  return await response.json()
}

export const crearNotas = async (form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(`${BASE_URL}/notas`, options)

  return await response.json()
}

export const obtenernota = async (id) => {
  const response = await fetch(`${BASE_URL}/nota/${id}`)
  
  return await response.json()
}

export const editarNota = async (form, id) => {
  const url = `${BASE_URL}/nota/${id}`

  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(url, options)

  return await response.json()
}

export const eliminarnota= async (id) => {
  const url = `${BASE_URL}/nota/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  return await response.json()
}