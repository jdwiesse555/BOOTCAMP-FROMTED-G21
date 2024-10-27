import { useEffect, useState } from "react"

import { useParams, useNavigate } from "react-router-dom"
import { editarPelicula, obtenerPelicula } from "../services/peliculas"

const EditarPeliculaPage = () => {
  const { id } = useParams()

  // TODO: Crear un formulario para recepcionar la información de la pelicula
  // TODO: Recuperar los datos de la pelicula para llenar el formulario de peliculas
  // TODO: Enviar la data con el metodo PUT para guardar la información modificada

  useEffect(() => {
    obtenerPelicula(id)
      .then(data => {
        console.log(data)
        setForm(data)
      })
  }, [id])

  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: '',
    imagen: '',
    estreno: '',
    generoId: '',
    resumen: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = (event) => {
    // evitamos el refresh de la pagina
    event.preventDefault();
    
    editarPelicula(form, id)
      .then(data => {
        console.log(data)
        // Redirección a la lista de peliculas
        navigate('/')
      })
      .catch(error => {
        // Mostrar una alerta con el error
      })
  }

  return (
    <>
      <form onSubmit={handleSave}>
        <h2>Editando Película: {id}</h2>

        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            placeholder="Ej. Volver al futuro"
            required
            onChange={handleChange}
            value={form.nombre}
          />
        </label>
        <label>
          Imagen
          <input
            type="url"
            name="imagen"
            placeholder="Ej. https://placehold.co/100x250"
            required
            onChange={handleChange}
            value={form.imagen}
          />
        </label>
        <label>
          Estreno
          <input
            type="date"
            name="estreno"
            placeholder="Ej. 2024-10-18"
            required
            onChange={handleChange}
            value={form.estreno}
          />
        </label>
        <label>
          Genero
          <select
            name="generoId"
            required
            onChange={handleChange}
            value={form.generoId}
          >
            <option value=''>Selecciona un genero</option>
            <option value='1'>Comedia</option>
            <option value='2'>Acción</option>
            <option value='3'>Animación</option>
            <option value='4'>Aventura</option>
          </select>
        </label>
        <label>
          Resumen
          <textarea
            name="resumen"
            placeholder="Ej. mi resumen"
            required
            onChange={handleChange}
            value={form.resumen}
          ></textarea>
        </label>
        <input type="submit" value="Guardar" />
      </form>
    
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  )
}

export default EditarPeliculaPage