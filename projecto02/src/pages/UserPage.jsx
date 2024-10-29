import { useEffect, useState } from "react"
import { useUsuarios } from "../components/home-page/services/usuarios"
import { Link } from "react-router-dom"

const UserPage = () => {
  const { fetchUsuarios, removeUsuarios } = useUsuarios()

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetchUsuarios()
      .then(data => setUsuarios(data))
  }, [])

  const handleRemove = async (id) => {
    console.log("xx",id)
    const response = await removeUsuarios(id)
    
    fetchUsuarios()
      .then(data => setUsuarios(data))
  }

  return (
    <section className="border container mx-auto flex flex-col gap-4">
      <div className="w-8/12 mx-auto flex justify-between py-3 px-6">
        <h2 className="text-3xl">Usuarios list</h2>
        <Link to='/usuario-new'>
          <button
            className="py-2 px-3 bg-green-600 text-white w-[120px] rounded-lg hover:bg-green-700 duration-300"
          >Nuevo Ususario
          </button>
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
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default UserPage