const BASE_URL = 'https://67074c39a0e04071d229b837.mockapi.io/api/v1/'

export const fetchPeliculas = async () => {
  const response = await fetch(`${BASE_URL}/peliculas`)

  return await response.json()
}