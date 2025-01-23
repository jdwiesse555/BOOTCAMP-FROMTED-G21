import { useEffect, useState } from "react"

import { useParams, useNavigate } from "react-router-dom"
import { editarNota, obtenernota,fetchUsuarios } from "../services/notas"

const EditNotas = () => {
  const { id } = useParams()
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({
 
  })
  // TODO: Crear un formulario para recepcionar la información de la nota
  // TODO: Recuperar los datos de la nota para llenar el formulario de notas
  // TODO: Enviar la data con el metodo PUT para guardar la información modificada
  useEffect(() => {
    fetchUsuarios()
      .then(data => setUsuarios(data))
  }, [])

  useEffect(() => {
    obtenernota (id)
      .then(data => setForm(data))
  }, [id])

  const navigate = useNavigate()



  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = (event) => {
    // evitamos el refresh de la pagina
    event.preventDefault();
    
    editarNota(form, id)
      .then(data => {
        console.log(data)
        // Redirección a la lista de notas
        navigate('/notas')
      })
      .catch(error => {
        // Mostrar una alerta con el error
      })
  }
  console.log(form)
  return (
    <>
      <form onSubmit={handleSave}>
        <h2>Editando Notas: {id}</h2>

        <label>
          Nota
          <input
            type="text"
            name="titulo"
            placeholder="titulo"
            required
            onChange={handleChange}
            value={form.titulo}
          />
        </label>

        <label>
          descripcion
          <input
            type="text"
            name="descripcion"
            placeholder="descripcion"
            required
            onChange={handleChange}
            value={form.descripcion}
          />
        </label>
        <label>
          Estado
          <select
            name="estado"
            required
            onChange={handleChange}
            value={form.estado}
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
            value={form.usuarioId}
          >
            
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

export default EditNotas