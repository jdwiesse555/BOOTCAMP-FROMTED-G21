import { useEffect, useState } from "react"
import { useUsuarios } from "../components/home-page/services/usuarios"
import { Link } from "react-router-dom"
import  LayoutBase  from '../layouts/LayoutBase'
import Swal from 'sweetalert2'
const UserPage = () => {
  const { fetchUsuarios, removeUsuarios } = useUsuarios()

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetchUsuarios()
      .then(data => setUsuarios(data))
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
 
    console.log("xx",id)
    const response = await removeUsuarios(id)
    
    fetchUsuarios()
      .then(data => setUsuarios(data))
      }
    })
  }

  return (
    <>
    {<LayoutBase/>}
    
    <section className="border container mx-auto flex flex-col gap-4">
      <div className="w-8/12 mx-auto flex justify-between py-3 px-6">
        <h2 className="text-3xl">Lista Usuarios</h2>
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto pb-4">
        {
          usuarios && usuarios.map(usuario => {
            return (
              <div key={usuario.docId} className="bg-sky-500 p-4 flex flex-col gap-2">
                <div className="font-semibold mb-2">{usuario.username}</div>
                <img src={usuario.foto ?? 'https://placehold.co/200x100'} />
                <div className="font-semibold mb-2">{usuario.password}</div>
                <button
                  className="py-2 px-3 bg-red-600 text-white w-[120px] rounded-lg hover:bg-red-700 duration-300"
                  onClick={() => handleRemove(usuario.docId)}
                >Remove</button>
                   <Link              
                          key={usuario.docId}
                          to={ `/usuario-new/${usuario.docId}`}>             <button
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

export default UserPage