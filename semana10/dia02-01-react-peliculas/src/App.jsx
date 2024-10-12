import Avatar from "boring-avatars";
import { useState, useEffect } from "react";
import { fetchPeliculas,delPeliculas,updatePeliculas,createPeliculas } from "./services/peliculas";
import Swal from 'sweetalert2'




const App = () => {
  const [peliculas, setPeliculas] = useState([])

  const [form, setForm] = useState({
    id: '',
    nombre: '',
    imagen: '',
    estreno: '',
    generoId:'',
    resumen:''
  })

  useEffect(() => {
    console.log("useEffect")


    fetchPeliculas()
      .then(dataPeliculas => {
        setPeliculas(dataPeliculas)
      })
  }, []) // Se ejecuta el useEffect al cargar el componente la primera vez
  
  const handleChange = (event) => {
    const { name, value } = event.target // Lo que se escribe en la caja de texto

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    console.log(event.type)
    const isNew = (form.id === '' ) 
   

    if (isNew) {
      const newPeliculas = {
        //id: crypto.randomUUID(),
    
        nombre: form.nombre,
        imagen: form.imagen,
        estreno: form.estreno,
        generoId:form.generoId,
        resumen:form.resumen
      }
      const res = await createPeliculas(newPeliculas)

      console.log(res)

      const dataPeliculas = await fetchPeliculas()

      setPeliculas(dataPeliculas)

    
    } else {
      // Update student
      const res = await updatePeliculas(form)
      console.log(res)
      const dataPeliculas = await fetchPeliculas()

      setPeliculas(dataPeliculas)
         }

    setForm({
      id: '',
      nombre: '',
      imagen: '',
      estreno: '',
      generoId:'',
      resumen:''
    })
  }


 

  const handleRemove = async(id) => {
    console.log('Deleting student...', id)
    const res = await delPeliculas(id)
    // enviar una peticion
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      // Cuando el usuario presiona el botón Yes
      if (result.isConfirmed) {
    console.log(res)
    const dataPeliculas = await fetchPeliculas()

    setPeliculas(dataPeliculas)
  }
});
  }

  const handleUpdate = (id) => {
    const peliculasFound = peliculas.find(peliculas => {
      return peliculas.id === id
    })

    console.log(peliculasFound)

    setForm(peliculasFound)
  }

  


  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <strong>CRUD de Películas con React + Fetch API</strong>
          </li>
        </ul>
      </nav>

      <section className="container-fluid">
        <div className="grid">
          <div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              
              <tbody className="peliculas__list">

              {peliculas.map(peliculas => {
              return (
      
                <tr>
                  <td>{peliculas.id}</td>
                  <td>
                      <img
                         src= {peliculas.imagen}
                         width="100"
                         height="250"
                      />
                  </td>
                  <td>
                      <strong>{peliculas.nombre}</strong>
                      <div class="fs-small">
                         <strong>Release:</strong> {peliculas.estreno}
                      </div>
                      <div class="fs-small">
                        <strong>Genero:</strong> {peliculas.generoId}
                      </div>
                      <div class="fs-small">
                           <strong>Resumen:</strong> {peliculas.resumen}
                      </div>
                    </td>
                    <td>
                        <div class="flex gap-0.5">
                          <button onClick={() => handleUpdate(peliculas.id)}>✏</button>
                          <button onClick={() => handleRemove(peliculas.id)}>❌</button>
                        </div>        
                  </td>
                </tr>
              
              )
            })}
            </tbody>
            
            </table>
          </div>
          <div>
            <form id="peliculasForm" 
              onSubmit={handleSave} 
              >
              <h2>Nueva película</h2>
 

          
              <input type="text"  name="nombre" value={form.nombre} placeholder="Mi pelicula" required onChange={handleChange}/> 
              <input type="text"   name="imagen" value={form.imagen}  placeholder="https://..." required onChange={handleChange} />
              <input type="date"  name="estreno" value={form.estreno}  placeholder="estreno" required onChange={handleChange} />
              
              <select name="generoId" value={form.generoId} required onChange={handleChange}>
                <option value="">Selecciona un genero...</option>
                <option value="1">Comedia</option>
                <option value="2">Acción</option>
                <option value="3">Animación</option>
                <option value="4">Aventura</option>
              </select>
              <textarea  name="resumen" value={form.resumen}  placeholder="Resumen de mi película" required onChange={handleChange}></textarea>

              <input type="submit" value="Guardar" />
              <pre>{JSON.stringify(form)}</pre>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default App