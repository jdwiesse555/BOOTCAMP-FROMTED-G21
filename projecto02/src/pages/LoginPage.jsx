const BASE_URL = import.meta.env.VITE1_API_URL
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const login = async(username, password) => {
  const url = `${BASE_URL}/usuarioS?username=${username}&password=${password}`

  console.log(url)

  const response = await fetch(url)
 
  return await response.json()
}

const LoginPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleLogin = async (event) => {
    event.preventDefault();
   
    const res = await login(form.username, form.password)
    console.log("2",res) 
    if (res.length!==0) {
      console.log(res) // TOKEN
      localStorage.setItem('auth', JSON.stringify(res)) // accessToken
      navigate('/home')
    } else {
      console.log("error")
      window.alert("Usuario o contraseña invalido ");
      // Mostrar alerta cuando el suaurio no se logueo correctamente
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <main className="w-[400px] border mx-auto mt-40">
      <div className="bg-slate-600 p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-white text-center text-4xl font-bold">
          Sistemas de Tanques
        </h2>

        <p className="text-white font-light text-center">
          Ingresa un nombre de usuario y password.
        </p>

        <form onSubmit={handleLogin}>
          <label className="text-white flex flex-col gap-2 mb-4">
            <span className="font-bold">Username</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-slate-800"
              type="text"
              placeholder="jhondoe"
              name="username"
              onChange={handleChange}
            />
          </label>
          <label className="text-white flex flex-col gap-2 mb-4">
            <span className="font-bold">Password</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-slate-800"
              type="password"
              placeholder="************"
              name="password"
              onChange={handleChange}
            />
          </label>
          <input
            className="rounded-full px-5 py-4 font-bold text-white w-full bg-violet-500 hover:bg-violet-600 duration-300"
            type="submit"
            value='Login'
          />

          <pre className="text-white">{/*JSON.stringify(form)*/}</pre>
        </form>
      </div>
    </main>
  )
}

export default LoginPage