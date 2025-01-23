import { useEffect, useState } from "react"
import { crearNotas,fetchUsuarios } from "../services/notas"

import { useNavigate } from "react-router-dom"

const NuevaNota = () => {
  // DONE: 01 - Manejar el estado del formulario.
  // TODO: 02 - Manejar el envio del formulario al endpoint peliculas mediante un POST para guardar en el endpoint.
  // TODO: 03 - Redirigir a la ruta del listado de peliculas después de guardar una película.
  const navigate = useNavigate()
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({
    titulo: '',
    descripcion: '',
    estado: '',
    usuarioId: ''

  })

  useEffect(() => {
    fetchUsuarios()
      .then(data => setUsuarios(data))
  }, [])


  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = (event) => {
    event.preventDefault();
    
    crearNotas(form)
      .then(data => {
        console.log(data)
        // Redirección a la lista de peliculas
        navigate('/notas')
      })
      .catch(error => {
        // Mostrar una alerta con el error
      })
  }

  return (
    <>
      <form onSubmit={handleSave}>
        <h2>Nueva nota</h2>

        <label>
          Titulo
          <input
            type="text"
            name="titulo"
            placeholder="nota"
            required
            onChange={handleChange}
          />
        </label>

        <label>
          Descripcion
          <input
            type="text"
            name="descripcion"
            placeholder="descripcion"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          estado
          <select
            name="estado"
            required
            onChange={handleChange}
          >
            <option value=''>Selecciona un estado</option>
            <option value='POR_HACER'>POR_HACER</option>
            <option value='HACIENDO'>HACIENDO</option>
            <option value='REALIZADO'>REALIZADO</option>
          </select>
        </label>
        <label>
          Usuario
          <select
            name="usuarioId"
            required
            onChange={handleChange}
          >
            <option value=''>Selecciona el usuario</option>
            {usuarios.map(usuario => {
            return (
            <option value={usuario.id}>{usuario.nombre}</option>

            )})}
          </select>
        </label>
        <input type="submit" value="Guardar" />
      </form>
    
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  )
}

export default NuevaNota