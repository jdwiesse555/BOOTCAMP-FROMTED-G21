import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUsuarios } from "../components/home-page/services/usuarios"


const NewUsuario = () =>{
  const { createUsuarios } = useUsuarios()

  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
    foto:''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    
    const response = await createUsuarios(form)

    if (response.id) {
      setForm({
        username: '',
        password: '',
        foto:''
      })

      navigate('/Usuarios')
    }

    console.log('saving...')
  }

  return (
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        <Link to='/Usuarios' className="underline">
          ⬅ Back to User
        </Link>

        <h2 className="text-3xl">New Ususario</h2>

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
          name="image"
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
  )
}

export default NewUsuario