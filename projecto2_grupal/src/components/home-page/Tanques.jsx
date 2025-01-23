import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { useTanques } from "../home-page/services/tanques"
import { useListametricas } from "../home-page/services/listametricas"
import { collection, query, getDocs, addDoc, doc, deleteDoc,where } from 'firebase/firestore'
import { db } from '../home-page/services/firebase'

const NewTanque = () =>{
  const { id } = useParams()
  const navigate = useNavigate()
  const [lmetricas, setLmetricas] = useState([])
  const [tanques, setTanques] = useState([])
  const [mensaje, setMensaje] = useState([])
  const [form, setForm] = useState({
   
  
    codigo: '',
      metrica: '',
      capacidad:'',
      HEIGHT_PIES:''
  })

  let titulo = "Nuevo Tanque"
  const { fetchTanque ,createTanques,editTanques} = useTanques()
  const { fetchListametricas } = useListametricas()

  useEffect(() => {
    fetchListametricas()
      .then(data => setLmetricas(data.content))
  }, [])
 

  if (id  !== 'null') {
    titulo = "Corregir Tanque"
   
   
    useEffect(() => {
      fetchTanque(id)
        .then(data => {
          setForm(data.content)})
    }, [])
    
   
 
  } else {
    const { createTanques } = useTanques()

    
  }






  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    if (id  !== 'null') {
      const response = await editTanques(id,form)

    } else {
      console.log(form)
    const response = await createTanques(form)
    }

    navigate('/Tanques')
    

    console.log('saving...')
  
  }

  return (
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        <Link to='/Tanques' className="underline">
          ⬅ Back 
        </Link>

        <h2 className="text-3xl">{titulo}</h2>
        Codigo
        <input
          type="text"
          name="codigo"
          placeholder="Codigo"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.codigo}
        />
        Tabla de Metrica
        <select id="metrica" name="metrica" onChange={handleChange} value={form.metrica} > 
         <option>  </option>
         {lmetricas.map(lmetricas=> {
               return (
         <option value={lmetricas.id}> {lmetricas.metrica} </option>
                 
               )})}
 
         </select>
         Capacidad
        <input
          type="text"
          name="capacidad"
          placeholder="capacidad"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.capacidad}
        />
        Altura Pies
        <input
          type="text"
          name="HEIGHT_PIES"
          placeholder="HEIGHT_PIES"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.HEIGHT_PIES}
        />
        <input
          type="submit"
          value="Save"
          className="text-white border px-3 py-2 bg-emerald-400"
        />

        <pre>{/*JSON.stringify(form)*/}</pre>
      </form>
    </main>
  )
}

export default NewTanque