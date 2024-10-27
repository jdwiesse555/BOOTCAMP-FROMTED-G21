
import { useState, useEffect } from "react";
import { fetchTanques,updateTanques,createTanques, delTanques } from "./services/tanques";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
//import tanques from "./tanques.json"




const TanquesList = () => {
  
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
  


  


  return (
    <>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
        <Link              
                          to={ `/Tanques/null`}>
                        <button className='h-10 px-6 font-semibold rounded-full bg-violet-600 text-white' >nuevo</button>
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
                  <td>{tanques.id}</td>
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
                          key={tanques.id}
                          to={ `/Tanques/${tanques.id}`}>
                        <button>✏</button>
                        </Link>
                          <button onClick={() => handleRemove(tanques.id)}>❌</button>
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