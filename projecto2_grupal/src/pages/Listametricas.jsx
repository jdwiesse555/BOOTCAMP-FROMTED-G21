import { useEffect, useState } from "react"
import { useListametricas } from "../components/home-page/services/listametricas"
import { Link} from 'react-router-dom'
import  LayoutBase  from '../layouts/LayoutBase'
import Swal from 'sweetalert2'

const Listametricas = () => {
    
        const { fetchListametricas, removeListametricas } = useListametricas()
        const [metricas, setMetricas] = useState([])
        let filtrometricas =[metricas]
        const [texto, setTexto] = useState('')
        const [form, setForm] = useState({
          docId : '',
          metrica: '',
          comentario: '',
         
      
        })
      
        useEffect(() => {
          fetchListametricas()
            .then(data => setMetricas(data.content))
            
        }, []) // Se ejecuta el useEffect al cargar el componente la primera vez
       
        const handleChange_V = ({target}) => {
          setTexto(target.value)
          
      //filtro(texto)
      
        }
      
        const handleRemove = async(id) => {
          console.log('Deleting ...', id)
          
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
              const response = await removeListametricas(id)
              
              fetchListametricas()
                .then(data => setMetricas(data.content))
            }
           
          })
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
              {<LayoutBase/>}
          <div className="flex space-x-4 mb-5 text-sm font-medium">
              <Link              
                                to={ `/LMetricas/null`}>
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
                        <th className="w-120">Comentario</th>
                       
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
                        <td>{metricas.comentario} 
                        </td>
                     
      
                          <td>
                              <div class="flex gap-0.5">
                              <Link 
                                key={metricas.docId}
                                to={ `/LMetricas/${metricas.id}`}>
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

export default Listametricas