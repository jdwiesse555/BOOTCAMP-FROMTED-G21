import { useEffect, useState } from "react"
import { useTanques } from "../home-page/services/tanques"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const TanquesList = () => {
  const { fetchTanques, removeTanques } = useTanques()
  const [tanques, setTanques] = useState([])
  const [form, setForm] = useState({
    docId:'',
    codigo: '',
      metrica: '',
      capacidad:'',
      HEIGHT_PIES:''
  })

    useEffect(() => {
      fetchTanques()
        .then(data => setTanques(data))

      
  }, []) // Se ejecuta el useEffect al cargar el componente la primera vez
  

  const handleRemove = async(id) => {
    console.log('Deleting student...', id)
    
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
      if (result.isConfirmed) {
        
        console.log("xx",id)
        const response = await removeTanques(id)
        
        fetchTanques()
          .then(data => setTanques(data))
      }
     
    })
  }
  
  


  return (
    <>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
    <Link to={ `/Tanques/null`}>
                        <button className='h-10 px-6 font-semibold rounded-full bg-violet-600 text-white' >
                          nuevo</button>
          </Link>
          <Link              
                          to={ `/home`}>
                        <button className='h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900'>Home</button>
          </Link>
          </div>
      <section className="container-fluid">
       
          <div className=" text-2xl text-center mt-2 border-8 "> 
            <table >
              <thead>
                <tr> 
                <th className="w-40">id</th>
                  <th className="w-60">Nombre</th>
                  <th className="w-60">Metrica</th>
                  <th className="w-40">Capacidad</th>
                  <th className="w-40">Altura en PIES</th>
                  <th className="w-90">Acciones</th>
                </tr>
              </thead>

              <tbody className="Tanques__list">

              {tanques.map(tanques => {
              return (
      
                <tr>
                  <td>{tanques.docId}</td>
                  <td>{tanques.codigo}</td>
                  <td>{tanques.metrica} 
                  </td>
                  <td>{tanques.capacidad} 
                  </td>
                  <td>{tanques.HEIGHT_PIES} 
                  </td>

                    <td>
                        <div class="flex gap-0.5">
                        <Link 
                          key={tanques.docId}
                          to={ `/Tanques/${tanques.docId}`}>
                        <button>✏</button>
                        </Link>
                          <button onClick={() => handleRemove(tanques.docId)}>❌</button>
                        </div>        
                  </td>
                </tr>
              
              )
            })}
            </tbody>
            
            </table>
          

        </div>
      </section>
    </>
  )
}

export default TanquesList