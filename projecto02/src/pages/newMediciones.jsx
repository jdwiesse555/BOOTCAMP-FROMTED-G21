import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { useMedidas } from "../components/home-page/services/medidas"
import { useMetricas } from "../components/home-page/services/metricas"
import { useTanques } from "../components/home-page/services/tanques"
import { collection, query, getDocs, addDoc, doc, deleteDoc,where } from 'firebase/firestore'
import { db } from '../components/home-page/services/firebase'
import Swal from 'sweetalert2'


const NewMediciones = () =>{
  const { id } = useParams()
  const navigate = useNavigate()
  const [medidas, setMedidas] = useState([])
  const [metricas1, setMetricas1] = useState([])
  const [tanques1, setTanques1] = useState([])
  const [tanques2, setTanques2] = useState([])
  //const tanques = [];
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
  const { fetchTanques} = useTanques()
  const { fetchvol} = useMetricas()
    
  useEffect(() => {
    fetchTanques(id)
      .then(data => {
        setTanques1(data)})
  }, [])

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

 




  const handleChange1 = (event) => {
    let cod = document.getElementById("tanque").value
    let combo = document.getElementById("tanque")
    let tex = combo.options[combo.selectedIndex].text
    console.log(cod,tex)
    setForm({ ...form,metrica:cod,tanque:tex})
  }


  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
   
  }

  const handleSave = async (event) => {
    event.preventDefault();
 
   const datovolcrudo = await fetchvol(form.crudo_pies.padStart(2,0)+form.crudo_pul,form.metrica)
    const datovolagua = await fetchvol(form.agua_pies.padStart(2,0)+form.agua_pul,form.metrica)
    if (datovolcrudo == 0 || datovolagua==0) {
      Swal.fire("error en medida")
    } else {

    if (id  !== 'null') {
      const response = await editMedidas(id,form,datovolcrudo,datovolagua)

    } else {

      //console.log("datovol",dato,form.crudo_pies+form.crudo_pul,form.metrica)
    const response = await createMedidas(form,datovolcrudo,datovolagua)
    console.log("sds")
    }

    navigate('/Medidas')
    

    console.log('saving...')
  
  }}

  return (
    <div>
    <main className="w-8/12 mx-auto flex justify-center">
    <form>
      


    </form>
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        
        <Link to='/Medidas' className="underline">
          ⬅ Back 
        </Link>
        <h2 className="text-3xl">{titulo}</h2>
        Tanque
        <select id="tanque" name="tanque" onChange={handleChange1} > 
          <option>   </option>
        {tanques1.map(tanques => {
              return (
        <option value={tanques.metrica}>{tanques.codigo} </option>
                
              )})}
             
      </select>
      <input
          type="text"
          name="tanque"
          placeholder="Tanque"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.tanque}
          disabled="false"
        />

        <input
          type="text"
          name="metrica"
          placeholder="Metrica"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.metrica}
          disabled="false"
        />
        fecha de la medicion
        <input
          type="date"
          name="fecha"
          placeholder="fecha"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.fecha}
        />
        crudo en Pies
                <input
          type="number"
          name="crudo_pies"
          placeholder="crudo_pies"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.crudo_pies}
          
        />
        crudo en Pulgadas
        <select name="crudo_pul" onChange={handleChange} value={form.crudo_pul}> 
        <option value='00'>00</option>
<option value='01'>01</option>
<option value='02'>02</option>
<option value='03'>03</option>
<option value='04'>04</option>
<option value='05'>05</option>
<option value='06'>06</option>
<option value='07'>07</option>
<option value='08'>08</option>
<option value='09'>09</option>
<option value='10'>10</option>
<option value='11'>11</option>


</select>
          Agua en Pies
          <input
          type="number"
          name="agua_pies"
          min="2" 
          placeholder="agua_pies"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          
          
        />
        Agua en Pulgadas
        <select name="agua_pul" onChange={handleChange} value={form.agua_pul}> 
        <option value='00'>00</option>
              <option value='01'>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              
             
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

export default NewMediciones