import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { useMedidas } from "../components/home-page/services/medidas"
import { collection, query, getDocs, addDoc, doc, deleteDoc,where } from 'firebase/firestore'
import { db } from '../components/home-page/services/firebase'

const NewMediciones = () =>{
  const { id } = useParams()
  const navigate = useNavigate()
  const [medidas, setMedidas] = useState([])
  const [form, setForm] = useState({
   
    fecha: '',
    tanque: '',
    metrica:'',
    crudo_pies:'',
    crudo_pul:'',
    agua_pies:'',
    agua_pul:'',
    stock_crudo:'',
    stock_agua:''
  })

  let titulo = "Nueva Medicion"
  const { fetchMedida ,createMedidas,editMedidas} = useMedidas()

    
 

  if (id  !== 'null') {
    titulo = "Corregir Medicion"
   
   
    useEffect(() => {
      fetchMedida(id)
        .then(data => {
          setForm(data)})
    }, [])
    
   
 
  } else {
    const { createMedidas } = useMedidas()

    
  }






  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    if (id  !== 'null') {
      const response = await editMedidas(id,form)

    } else {
    const response = await createMedidas(form)
    }

    navigate('/Medidas')
    

    console.log('saving...')
  
  }

  return (
    <div>
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        <Link to='/Medidas' className="underline">
          ⬅ Back to User
        </Link>

        <h2 className="text-3xl">{titulo}</h2>

        <input
          type="text"
          name="tanque"
          placeholder="Tanque"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.tanque}
        />
        <input
          type="text"
          name="metrica"
          placeholder="Metrica"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.metrica}
        />
        <input
          type="text"
          name="stock_crudo"
          placeholder="fecha"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.stock_crudo}
        />

        <input
          type="submit"
          value="Save"
          className="text-white border px-3 py-2 bg-emerald-400"
        />

        <pre>{JSON.stringify(form)}</pre>
      </form>
    </main>
    </div>
  )
}

export default NewMediciones