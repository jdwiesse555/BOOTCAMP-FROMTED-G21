const BASE_URL = import.meta.env.VITE_API_URL_1

export const fetchCharacters = async () => {
  const URL = `${BASE_URL}/tanques`

  const response = await fetch(URL)

  return await response.json()
}

export const getCharacter = async (id) => {
  const URL = `${BASE_URL}/tanques/${id}`

  const response = await fetch(URL)

  return await response.json()
}