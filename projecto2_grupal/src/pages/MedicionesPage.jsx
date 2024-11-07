import { useEffect, useState } from "react"
import { useMedidas } from "../components/home-page/services/medidas"
import { Link } from "react-router-dom"
import  LayoutBase  from '../layouts/LayoutBase'
import Swal from 'sweetalert2'
const MedicionesPage = () => {
  const { fetchMedidas, removeMedidas } = useMedidas()
  const [texto, setTexto] = useState('')
  const [medidas, setMedidas] = useState([])
  let filtramedidas =[medidas]
  useEffect(() => {
    fetchMedidas()
      .then(data => setMedidas(data))
  }, [])

  console.log(medidas)

  const handleChange_V = ({target}) => {
    setTexto(target.value)
    
//filtro(texto)

  }



  const  filtro  = (valor) => {
    
    if(valor=="") {   
      filtramedidas =medidas.filter(medidas =>
        medidas.tanque.includes(medidas.tanque))}

    
      else {
        filtramedidas =medidas.filter(medidas =>
    medidas.tanque.toLowerCase().includes(valor.toLowerCase()))}
    console.log("valor",valor,filtramedidas)
    
    }
const handleRemove = async (id) => {
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
    const response = await removeMedidas(id)
    
    fetchMedidas()
      .then(data => setMedidas(data))
      }
    })
  }
filtro(texto)

  return (
    <>
     {<LayoutBase/>}
    <div className="flex space-x-4 mb-5 text-sm font-medium">
    <Link to={ `/Medidas/null`}>
                        <button className='h-10 px-6 font-semibold rounded-full bg-violet-600 text-white' >
                          nuevo</button>
          </Link>
          <input
      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="Tanque"   onChange={handleChange_V}
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
                <th className="w-60">Fecha</th>
                  <th className="w-60">Tanque</th>
                  <th className="w-60">Metrica</th>
                  <th className="w-40">stock crudo</th>
                  <th className="w-40">stock agua</th>
                  <th className="w-90">Acciones</th>
                </tr>
              </thead>

              <tbody className="Medidas__list">

              {filtramedidas.map(medidas => {
              return (
      
                <tr>
                  <td>{medidas.docId}</td>
                  <td>{medidas.fecha} 
                  </td>                  
                  <td>{medidas.tanque} 
                  </td>
                  <td>{medidas.metrica} 
                  </td>
                  <td>{medidas.stock_crudo} 
                  </td>
                  <td>{medidas.stock_agua}</td>
                    <td>
                        <div class="flex gap-0.5">
                        <Link 
                          key={medidas.docId}
                          to={ `/Medidas/${medidas.docId}`}>
                        <button>✏</button>
                        </Link>
                          <button onClick={() => handleRemove(medidas.docId)}>❌</button>
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

export default MedicionesPage