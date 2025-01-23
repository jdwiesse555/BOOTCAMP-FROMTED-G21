import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'

import { fetchUsuario,editUsuarios,createUsuarios } from "../components/home-page/services/usuarios"
import { db } from '../components/home-page/services/firebase'

const NewUsuario = () =>{
  const { id } = useParams()
  const navigate = useNavigate()
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({
   id:'',
    email: '',
    password: '',
    nombre:'',
    apellido:'',
    tipoUsuario:''
  })

  let titulo = "Nuevo Usuario"


    
 

  if (id  !== 'null') {
    titulo = "Corregir Usuario"
   
   
    useEffect(() => {
      fetchUsuario(id)
        .then(data => {
          setForm(data.content)})
    }, [])
    
   
 
  } else {
    

    
  }






  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
    
  }

  const handleSave = async (event) => {
    event.preventDefault();
    console.log(form)
    if (id  !== 'null') {
      const response = await editUsuarios(id,form)
      alert(response.message)

    } else {
    const response = await createUsuarios(form)
    alert(response.message)
    }

    navigate('/user')
    


  
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
          name="email"
          placeholder="email"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="text"
          name="nombre"
          placeholder="nombre"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="apellido"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.apellido}
        />

        <select
            name="tipoUsuario"
            required
            onChange={handleChange}
            value={form.tipoUsuario}
          >
            
            <option value="">  </option>
            <option value="USUARIO"> USUARIO </option>
            <option value="MODERADOR"> MODERADOR </option>
            <option value="ADMIN"> ADMIN </option>


          </select>


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