import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { useMetricas } from "../home-page/services/metricas"
import { useListametricas } from "../home-page/services/listametricas"
import { collection, query, getDocs, addDoc, doc, deleteDoc,where } from 'firebase/firestore'
import { db } from '../home-page/services/firebase'



const Metricas = () => {
  const { id } = useParams()
  const [lmetricas, setLmetricas] = useState([])
  const navigate = useNavigate()
  const [metricas, setMetricas] = useState([])
 
  const [form, setForm] = useState({
   
   
      metrica: '',
      medida:'',
      vol_bbls:''
  })

  let titulo = "Nuevo Metrica"
  const { fetchMetrica ,createMetricas,editMetricas} = useMetricas()
  const { fetchListametricas } = useListametricas()


 
  useEffect(() => {
    fetchListametricas()
      .then(data => setLmetricas(data.content))
  }, [])
 

  if (id  !== 'null') {
    titulo = "Corregir Metrica"
   
   
    useEffect(() => {
      fetchMetrica(id)
        .then(data => {
          setForm(data.content)})
    }, [])
    
   
 
  } else {
    const { createMetricas } = useMetricas()

    
  }






  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    if (id  !== 'null') {
      const response = await editMetricas(id,form)

    } else {
    const response = await createMetricas(form)
    }

    navigate('/Metricas')
    

    console.log('saving...')
  
  }

  return (
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        <Link to='/Metricas' className="underline">
          ⬅ Back 
        </Link>

        <h2 className="text-3xl">{titulo}</h2>
        Metrica
        {(() =>  {if (id  !== 'null')  {return ( 
          <select disabled id="metrica" name="metrica" onChange={handleChange} value={form.metrica} >

        
        <option></option> 
        

        {lmetricas.map(lmetricas=> {
              return (
        <option value={lmetricas.id}> {lmetricas.metrica} </option>
                
              )})}

        </select>
        )}
        else {return ( 
          <select id="metrica" name="metrica" onChange={handleChange} value={form.metrica} >

        
        <option></option> 
        

        {lmetricas.map(lmetricas=> {
              return (
        <option value={lmetricas.id}> {lmetricas.metrica} </option>
                
              )})}

        </select>

        )}})()}
        Medida 
        <input
          type="text"
          name="medida"
          placeholder="Medida"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.medida}
        />
        Volumen Bbls
        <input
          type="text"
          name="vol_bbls"
          placeholder="vol_bbls"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.vol_bbls}
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



export default Metricas