import { useEffect, useState } from "react"

import { Link, useParams } from "react-router-dom"
import { obtenerPelicula } from "../services/peliculas"

const VerPeliculaPage = () => {
  const { id } = useParams()

  const GENEROS = {
    1: "Comedia",
    2: "Acción",
    3: "Animación",
    4: "Aventura",
  }

  const [form, setForm] = useState({
    nombre: '',
    imagen: '',
    estreno: '',
    generoId: '',
    resumen: ''
  })

  useEffect(() => {
    obtenerPelicula(id)
      .then(data => {
        console.log(data)
        setForm(data)
      })
  }, [id])

  return (
    <>
      <article>
        <header>
          <h2>Detalle de la Película: {id}</h2>
        </header>
        <Link to='/'>Regresar al listado</Link>
        <div>
          <img
            src={form.imagen}
            width="100"
            height="250"
          />
        </div>
        <div>
          <strong>Nombre: </strong> {form.nombre}
        </div>
        <div>
          <strong>Estreno: </strong> {form.estreno}
        </div>
        <div>
          <strong>Genero: </strong>
          {GENEROS[form.generoId] ?? '-'}
        </div>
        <div>
          <strong>Resumen: </strong>
          {form.resumen}
        </div>
      </article>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  )
}

export default VerPeliculaPage