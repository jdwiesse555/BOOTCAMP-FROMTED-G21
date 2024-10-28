import { useState, useEffect } from "react";
import { fetchMetricas,updateMetricas,createMetricas, delMetricas } from "./services/metricas";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
//import tanques from "./tanques.json"




const MetricasList = () => {
  
  const [metricas, setMetricas] = useState([])
  let filtrometricas =[metricas]
  const [texto, setTexto] = useState('')
  const [form, setForm] = useState({
    id : '',
    metrica: '',
    medida: '',
    vol_bbls: '',

  })

  useEffect(() => {
    console.log("useEffect")


    fetchMetricas()
      .then(dataMetricas => {
        setMetricas(dataMetricas)
      })
  }, []) // Se ejecuta el useEffect al cargar el componente la primera vez
 
  const handleChange_V = ({target}) => {
    setTexto(target.value)
    
//filtro(texto)

  }

 
  const filtro  = (valor) => {
    
    if(valor=="") {   
      filtrometricas =metricas.filter(metricas =>
        metricas.metrica.includes(metricas.metrica))}

    
      else {
        filtrometricas =metricas.filter(metricas =>
    metricas.metrica.toLowerCase().includes(valor.toLowerCase()))}
    console.log("valor",valor,filtrometricas)
    
    }


    filtro(texto)
 

 

 
  return (
    <>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
        <Link              
                          to={ `/Metricas/null`}>
                        <button className='h-10 px-6 font-semibold rounded-full bg-violet-600 text-white' >nuevo</button>
          </Link>
          <input
      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="TM-....."   onChange={handleChange_V}
    />

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

                  <th className="w-60">Metrica</th>
                  <th className="w-40">medida</th>
                  <th className="w-40">vol_bbls</th>
                  <th className="w-90">Acciones</th>
                </tr>
              </thead>

              <tbody className="Metricas__list">

              {filtrometricas.map(metricas => {
              return (
      
                <tr>
                  <td>{metricas.id}</td>

                  <td>{metricas.metrica} 
                  </td>
                  <td>{metricas.medida} 
                  </td>
                  <td>{metricas.vol_bbls} 
                  </td>

                    <td>
                        <div class="flex gap-0.5">
                        <Link 
                          key={metricas.id}
                          to={ `/Metricas/${metricas.id}`}>
                        <button>✏</button>
                        </Link>
                          <button onClick={() => handleRemove(metricas.id)}>❌</button>
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

export default MetricasList