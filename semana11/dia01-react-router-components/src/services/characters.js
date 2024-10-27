const BASE_URL = import.meta.env.VITE_API_URL

export const fetchCharacters = async () => {
  const URL = `${BASE_URL}/characters`

  const response = await fetch(URL)

  return await response.json()
}

export const getCharacter = async (id) => {
  const URL = `${BASE_URL}/characters/${id}`

  const response = await fetch(URL)

  return await response.json()
}