import Avatar from "boring-avatars";
import { useState, useEffect } from "react";
import { fetchTanques,updateTanques,createTanques, delTanques } from "./services/tanques";
import Swal from 'sweetalert2'
//import tanques from "./tanques.json"




const App = () => {
  
  const [tanques, setTanques] = useState([])
  const [form, setForm] = useState({
    id : '',
    codigo: '',
    metrica: '',
    capacidad: '',
    HEIGHT_PIES:''
  })

  useEffect(() => {
    console.log("useEffect")


    fetchTanques()
      .then(dataTanques => {
        setTanques(dataTanques)
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
      const newtanque = {
        //id: crypto.randomUUID(),
    
        codigo: form.codigo,
        metrica: form.metrica,
        capacidad: form.capacidad,
        HEIGHT_PIES: form.HEIGHT_PIES

      }
      const res = await createTanques(newtanque)

      console.log("6",res)

      const dataTanques = await fetchTanques()

      setTanques(dataTanques)



    
    } else {
      // Update student
      const res = await updateTanques(form)
      console.log("7",res)
      const dataTanques = await fetchTanques()

      setTanques(dataTanques)

         }

    setForm({
      id:'',
      codigo: '',
      metrica: '',
      capaciadad: '',
      HEIGHT_PIES:''


    })
  }


 

  const handleRemove = async(id) => {
    console.log('Deleting student...', id)
    const res = await delTanques(id)
    // enviar una peticionT
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

});
  }

  const handleUpdate = (codigo) => {
    const tanquesFound = tanques.find(tanques => {
      return tanques.codigo === codigo
    })

    console.log(tanquesFound)

    setForm(tanquesFound)
  }

  


  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <h1>Listado de Tanques</h1>
          </li>
        </ul>
      </nav>

      <section className="container-fluid">
        <div className="grid">
          <div>
            <table>
              <thead>
                <tr>
                <th>id</th>
                  <th>Nombre</th>
                  <th>Metrica</th>
                  <th>Capacidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              
              <tbody className="Tanques__list">

              {tanques.map(tanques => {
              return (
      
                <tr>
                  <td>{tanques.id}</td>
                  <td>{tanques.codigo}</td>
                  <td>{tanques.metrica} 
                  </td>
                  <td>
                      
                      <div class="fs-small">
                         <strong>Capacidad:</strong> {tanques.capacidad}
                      </div>
                      <div class="fs-small">
                        <strong>HEIGHT_PIES:</strong> {tanques.HEIGHT_PIES}
                      </div>
                    </td>
                    <td>
                        <div class="flex gap-0.5">
                          <button onClick={() => handleUpdate(tanques.codigo)}>✏</button>
                          <button onClick={() => handleRemove(tanques.codigo)}>❌</button>
                        </div>        
                  </td>
                </tr>
              
              )
            })}
            </tbody>
            
            </table>
          </div>
          <div >
            <form id="TanquesForm" 
              onSubmit={handleSave} 
              >
              <h2>Nueva Tanque</h2>
 

          
              <input type="text"  name="codigo" value={form.codigo} placeholder="TK.." required onChange={handleChange}/> 
              <input type="text"   name="metrica" value={form.metrica}  placeholder="TM..." required onChange={handleChange} />
              <input type="text"  name="capacidad" value={form.capacidad}  placeholder="Capacidad" required onChange={handleChange} />
              <input type="text"  name="HEIGHT_PIES" value={form.HEIGHT_PIES}  placeholder="" required onChange={handleChange} />
  

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