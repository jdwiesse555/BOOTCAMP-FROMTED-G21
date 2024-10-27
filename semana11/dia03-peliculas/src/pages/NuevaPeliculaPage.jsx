import { useState } from "react"
import { crearPelicula } from "../services/peliculas"
import { useNavigate } from "react-router-dom"

const NuevaPeliculaPage = () => {
  // DONE: 01 - Manejar el estado del formulario.
  // TODO: 02 - Manejar el envio del formulario al endpoint peliculas mediante un POST para guardar en el endpoint.
  // TODO: 03 - Redirigir a la ruta del listado de peliculas después de guardar una película.
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
    event.preventDefault();
    
    crearPelicula(form)
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
        <h2>Nueva película</h2>

        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            placeholder="Ej. Volver al futuro"
            required
            onChange={handleChange}
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
          />
        </label>
        <label>
          Genero
          <select
            name="generoId"
            required
            onChange={handleChange}
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
          ></textarea>
        </label>
        <input type="submit" value="Guardar" />
      </form>
    
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  )
}

export default NuevaPeliculaPage