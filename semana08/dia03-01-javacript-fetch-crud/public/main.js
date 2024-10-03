import { fetchPeliculas , crearPelicula } from './services.js'
import { renderPeliculas } from './utils.js'


const peliculasForm =  document.querySelector('#peliculasForm')

peliculasForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const peliculaForm = document.forms['peliculasForm']

  const nombre = peliculaForm.nombre.value
  const imagen = peliculaForm.imagen.value
  const estreno = peliculaForm.estreno.value
  const genero = peliculaForm.genero.value
  const resumen = peliculaForm.resumen.value

  const nuevaPelicula = {
    nombre,
    imagen,
    estreno,
    generoId: genero,
    resumen
  }

  const response = await crearPelicula(nuevaPelicula)

  if (response) {
    const peliculas = await fetchPeliculas()
    
    renderPeliculas(peliculas)

    peliculaForm.reset()
  }
})


fetchPeliculas()
  .then(peliculas => renderPeliculas(peliculas))