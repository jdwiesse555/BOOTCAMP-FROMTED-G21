
import { useEffect, useState } from "react"

import { fetchUsuarios,removeUsuarios } from "../components/home-page/services/usuarios"
import { Link ,useNavigate } from "react-router-dom"
import  LayoutBase  from '../layouts/LayoutBase'
import Swal from 'sweetalert2'


const UsuarioPage = () => { 
 
    
  const [usuarios, setUsuarios] = useState([])

  const [mensaje, setMensaje] = useState([])

useEffect(() => {
fetchUsuarios()
  .then(data => { setUsuarios(data.content);
  setMensaje(data.message); })
}, [])


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
    
      const response = await removeUsuarios(id)
      alert(response.message)

      fetchUsuarios()
        .then(data => { setUsuarios(data.content);
          setMensaje(data.message); })
  }
})

}

return (
  <>
  {<LayoutBase/>}

  <section className="border container mx-auto flex flex-col gap-4">
    <div className="w-8/12 mx-auto flex justify-between py-3 px-6">

      <h2 className="text-3xl">{mensaje}</h2>
      </div>
      <div>
      <Link to='/usuario-new/null'>
      <button className='h-10 px-6 font-semibold rounded-full bg-violet-600 text-white' >nuevo</button>
      </Link>
      <Link              
        to={ `/home`}>
        <button className='h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900'>Home</button>
        </Link>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-auto pb-4">
      {
        usuarios && usuarios.map(usuario => {
          return (
            <div key={usuario.Id} className="bg-sky-500 p-4 flex flex-col gap-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">IMAIL:</label>
              <div className="font-semibold mb-2">{usuario.email}</div>
              <label className="block text-gray-700 text-sm font-bold mb-2" >
              APELLIDO
            </label>
            <div className="font-semibold mb-2">{usuario.apellido}</div>
              
              <label className="block text-gray-700 text-sm font-bold mb-2" >
              NOMBRE 
            </label>
              <div className="font-semibold mb-2">{usuario.nombre}</div>
              
              
              <label className="block text-gray-700 text-sm font-bold mb-2" >
              TIPO 
            </label>
              <div className="font-semibold mb-2">{usuario.tipoUsuario}</div>
              <button
                className="py-2 px-3 bg-red-600 text-white w-[120px] rounded-lg hover:bg-red-700 duration-300"
                onClick={() => handleRemove(usuario.id)}
              >Remove</button>
                 <Link              
                        key={usuario.Id}
                        to={ `/usuario-new/${usuario.id}`}>             <button
                className="py-2 px-3 bg-lime-600 text-white w-[120px] rounded-lg hover:bg-red-700 duration-300"
                
              >edit</button>
              </Link> 
            </div>
          )
        })
      }
    </div>

  </section>
  </>
)


}
export default UsuarioPage