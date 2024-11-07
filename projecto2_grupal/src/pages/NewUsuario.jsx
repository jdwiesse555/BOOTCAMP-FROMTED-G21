import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { useUsuarios } from "../components/home-page/services/usuarios"
import { collection, query, getDocs, addDoc, doc, deleteDoc,where } from 'firebase/firestore'
import { db } from '../components/home-page/services/firebase'

const NewUsuario = () =>{
  const { id } = useParams()
  const navigate = useNavigate()
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({
   
    username: '',
    password: '',
    foto:''
  })

  let titulo = "Nuevo Usuario"
  const { fetchUsuario ,createUsuarios,editUsuarios} = useUsuarios()

    
 

  if (id  !== 'null') {
    titulo = "Corregir Usuario"
   
   
    useEffect(() => {
      fetchUsuario(id)
        .then(data => {
          setForm(data)})
    }, [])
    
   
 
  } else {
    const { createUsuarios } = useUsuarios()

    
  }






  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    if (id  !== 'null') {
      const response = await editUsuarios(id,form)

    } else {
    const response = await createUsuarios(form)
    }

    navigate('/user')
    

    console.log('saving...')
  
  }

  return (
    <div>
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        <Link to='/user' className="underline">
          ⬅ Back to User
        </Link>

        <h2 className="text-3xl">{titulo}</h2>

        <input
          type="text"
          name="username"
          placeholder="Name username"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="text"
          name="foto"
          placeholder="Image Ex. https://placehold.co/200x100"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.foto}
        />

        <input
          type="submit"
          value="Save"
          className="text-white border px-3 py-2 bg-emerald-400"
        />

        <pre>{/*JSON.stringify(form)*/}</pre>
      </form>
    </main>
    </div>
  )
}

export default NewUsuario