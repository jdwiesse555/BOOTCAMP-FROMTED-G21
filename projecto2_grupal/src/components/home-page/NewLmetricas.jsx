import { useEffect, useState } from "react"
import { useListametricas } from "./services/listametricas"
import { Link, useParams ,useNavigate} from 'react-router-dom'



const NewLmetricas = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const [lmetricas, setLmetricas] = useState([])
 
  const [form, setForm] = useState({
   
    docId:'',
      metrica: '',
      comentario:''
      
  })

  let titulo = "Nuevo Metrica"
  const { fetchListametrica ,createListametricas,editListametricas} = useListametricas()




 

  if (id  !== 'null') {
    titulo = "Corregir Metrica"
   
   
    useEffect(() => {
      fetchListametrica(id)
        .then(data => {
          setForm(data.content)})
    }, [])
    
   
 
  } else {
      titulo = "Nuevo Metrica"

    
  }






  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    if (id  !== 'null') {
      const response = await editListametricas(id,form)

    } else {
    const response = await createListametricas(form)
    }

    navigate('/lmetricas')
    

    console.log('saving...')
  
  }

  return (
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        <Link to='/Lmetricas' className="underline">
          ⬅ Back 
        </Link>

        <h2 className="text-3xl">{titulo}</h2>


      Metrica
      {(() =>  {if (id  !== 'null')  {return ( 
        <input disabled
          type="text"
          name="metrica"
          placeholder="Metrica"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.metrica}
        />
      )}
      else {return ( 
        <input
        type="text"
        name="metrica"
        placeholder="Metrica"
        className="border px-3 py-2 bg-slate-100"
        onChange={handleChange}
        value={form.metrica}
      />

        )}})()}
        Comentario
        <input
          type="text"
          name="comentario"
          placeholder="comentario"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.comentario}
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



export default NewLmetricas