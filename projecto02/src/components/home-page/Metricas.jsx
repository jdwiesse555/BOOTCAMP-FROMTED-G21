import { useEffect, useState } from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { fetchMetricas,updateMetricas,createMetricas, delMetricas,getMetricas } from "./services/metricas";
import Swal from 'sweetalert2'
//import tanques from "./tanques.json"




const Metricas = () => {
    const { id } = useParams()
    let titulo = "Nuevo Metria"
    console.log("1",id)
    if (id  !== 'null') {titulo = "Corregir Metrica"}
    
    const navigate = useNavigate()
    const [metrica, setMetricas] = useState([])
    const [form, setForm] = useState({
        id : '',
        metrica: '',
        medida: '',
        vol_bbls: '',
    
    })

    useEffect(() => {

      getMetricas(id)
        .then(dataMetricas => {
          setMetricas(dataMetricas)
          setForm(dataMetricas)
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
    
    
        metrica: form.metrica,
        medida: form.medida,
        vol_bbls: form.vol_bbls

      }
      const res = await createMetricas(newtanque)

      console.log("6",res)

      const dataMetricas = await fetchMetricas()

      setMetricas(dataMetricas)
      navigate('/Metricas')


    
    } else {
      // Update student
      const res = await updateMetricas(form)
      console.log("7",res)
      const dataMetricas = await fetchMetricas()

      setMetricas(dataMetricas)

         }
         navigate('/Metricas')

  }


 

  const handleRemove = async(id) => {
    
    
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
      if (result.value) {
              // Cuando el usuario presiona el botón Yes
      //const res = await delTanques(id)
      //const dataTanques = await fetchTanques()
      console.log('Deleting student...', id)
      //setTanques(dataTanques)
      }


});
  }
  
  const handleUpdate = (id) => {
    const MetricasFound = Metricas.find(metricas => {
      return metricas.id === id
    })

    console.log(MetricasFound)

    setForm(MetricasFound)
  }

  
 

  return (
    <>


      <section className="container-fluid">
       

          <div className =" text-2xl text-center mt-18 container-fluid grid grid-cols-4 gap-4 border-solid border-red-500 ">
            <form id="MetricaForm"  className="border-solid border-red-500"
              onSubmit={handleSave} 
              >
              <h2 className="w-full flex-none mb-8 text-5xl leading-none text-slate-900">{titulo}</h2>
 

          
              <input className='border-4 gap-4 text-center' type="text"   name="metrica" value={form.metrica}  placeholder="nombre" required onChange={handleChange} />
              <input className='border-4 gap-4 text-center' type="text"  name="medida" value={form.medida}  placeholder="Medida" required onChange={handleChange} />
              <input className='border-4 gap-4 text-center' type="text"  name="vol_bbls" value={form.vol_bbls}  placeholder="vol_bbls" required onChange={handleChange} />
  
             
              <input type="submit" value="Guardar" className=" m-8 h-10 px-6 font-semibold rounded-full bg-violet-600 text-vol_bblswhite" />
              <Link              
                          to={ `/Metricas`}>
                        <button className='  h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900'>Cancelar</button>
          </Link>
             
               <pre>{/*JSON.stringify(form)*/}</pre>
            </form>
          </div>
       
      </section>
    </>
  )
}

export default Metricas