import { useEffect, useState } from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { fetchTanques,updateTanques,createTanques, delTanques,getTanques } from "./services/tanques";
import Swal from 'sweetalert2'
//import tanques from "./tanques.json"




const Tanques = () => {
    const { id } = useParams()
    let titulo = "Nuevo Tanque"
    console.log("1",id)
    if (id  !== 'null') {titulo = "Corregir Tanque"}
    
    const navigate = useNavigate()
    const [tanques, setTanques] = useState([])
    const [form, setForm] = useState({
      id : '',
      codigo: '',
      metrica: '',
      capacidad: '',
      HEIGHT_PIES:''
    })

    useEffect(() => {

      getTanques(id)
        .then(dataTanques => {
          setTanques(dataTanques)
          setForm(dataTanques)
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
      navigate('/Tanques')


    
    } else {
      // Update student
      const res = await updateTanques(form)
      console.log("7",res)
      const dataTanques = await fetchTanques()

      setTanques(dataTanques)

         }
         navigate('/Tanques')

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
    const tanquesFound = tanques.find(tanques => {
      return tanques.id === id
    })

    console.log(tanquesFound)

    setForm(tanquesFound)
  }

  
 

  return (
    <>


      <section className="container-fluid">
       

          <div className =" text-2xl text-center mt-18 container-fluid grid grid-cols-3 gap-4 border-solid border-red-500 ">
            <form id="TanquesForm"  className="border-solid border-red-500"
              onSubmit={handleSave} 
              >
              <h2 className="w-full flex-none mb-8 text-5xl leading-none text-slate-900">{titulo}</h2>
 

          
              <input className='border-4 gap-4 text-center' type="text"  name="codigo" value={form.codigo} placeholder="TK.." required onChange={handleChange}/> 
              <input className='border-4 gap-4 text-center' type="text"   name="metrica" value={form.metrica}  placeholder="TM..." required onChange={handleChange} />
              <input className='border-4 gap-4 text-center' type="text"  name="capacidad" value={form.capacidad}  placeholder="Capacidad" required onChange={handleChange} />
              <input className='border-4 gap-4 text-center' type="text"  name="HEIGHT_PIES" value={form.HEIGHT_PIES}  placeholder="Alt Pies" required onChange={handleChange} />
  
             
              <input type="submit" value="Guardar" className=" m-8 h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" />
              <Link              
                          to={ `/Tanques`}>
                        <button className='  h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900'>Cancelar</button>
          </Link>
             
               <pre>{/*JSON.stringify(form)*/}</pre>
            </form>
          </div>
       
      </section>
    </>
  )
}

export default Tanques