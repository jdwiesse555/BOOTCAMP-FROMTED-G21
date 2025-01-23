import { useEffect,useState } from "react"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import { useMedidas } from "../components/home-page/services/medidas"
import { useMetricas } from "../components/home-page/services/metricas"
import { useTanques } from "../components/home-page/services/tanques"
import Swal from 'sweetalert2'
import dateFormat, { masks } from "dateformat";


const NewMediciones = () =>{
  const { id } = useParams()
  const navigate = useNavigate()

  const [medidas, setMedidas] = useState([])
  const [metricas1, setMetricas1] = useState([])
  const [tanques1, setTanques1] = useState([])
  const [tanques2, setTanques2] = useState([])
  let filtrotanque =tanques1
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
  const { fetchTanques,fetchTanque } = useTanques()
  const { fetchvol} = useMetricas()
    
  useEffect(() => {
    fetchTanques()
      .then(data => {
        setTanques1(data.content)})
  }, [])

  if (id  !== 'null') {
    titulo = "Corregir Medicion"
   
   
    useEffect(() => {
      fetchMedida(id)
        .then(data => {
          setForm(data.content)})
    }, [])
    

 
  } else {
    titulo = "Nueva Medicion"

    
  }

 







  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
   
  }

  const handleSave = async (event) => {
    event.preventDefault();

    
  

    if (id  !== 'null') {
      const response = await editMedidas(id,form)
      if (response.message.includes("Error")) {alert(response.message)}
      else {alert(response.message)
        navigate('/Medidas')}

    } else {

      //console.log("datovol",dato,form.crudo_pies+form.crudo_pul,form.metrica)
    const response = await createMedidas(form)
    if (response.message.includes("Error")) {alert(response.message)}
    else {alert(response.message)
      navigate('/Medidas')}
    }
    
   
    

    
  
  }

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
        {(() =>  {if (id  !== 'null')  {return ( 
        <select disabled id="tanque" name="tanque" value={form.tanque} onChange={handleChange} > 
          <option>   </option>
        {tanques1.map(tanques => {
              return (
        <option value={tanques.id}>{tanques.codigo} </option>
                
              )})}
              
        </select>
        )}
           else {return ( 
            <select id="tanque" name="tanque" value={form.tanque} onChange={handleChange} > 
            <option>   </option>
          {tanques1.map(tanques => {
                return (
          <option value={tanques.id}>{tanques.codigo} </option>
                  
                )})}
                
          </select>

           )}})()}

        Fecha de la medicion
        {(() =>  {if (id  !== 'null')  {return ( 
        <a>{dateFormat(form.fecha, "d/mm/yyyy")}</a> 
        
      )}
      else {return ( 
        <input
          type="date"
          name="fecha"
          id="fecha"
          placeholder="fecha"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.fecha}
        />
      )}})()}
        Crudo en Pies
                <input
          type="number"
          name="crudo_pies"
          placeholder="crudo_pies"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.crudo_pies}
          
        />
        Crudo en Pulgadas
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
          
          placeholder="agua_pies"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.agua_pies}
          
          
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