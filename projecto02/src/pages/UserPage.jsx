
import { Link ,useNavigate } from "react-router-dom"
import LayoutBase from "../layouts/LayoutBase"
import Swal from 'sweetalert2'
import UsuarioPage from "./UsuarioPage"

const UserPage = () => {
  
  const navigate = useNavigate()
  let paso = false
  Swal.fire({
    title: 'ingrese el clave de administrador',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: function (clave) {
      return new Promise(function (resolve, reject) {
        setTimeout(function() {
          if (clave === '1234') {
            console.log("paso12")
            navigate('/user')
            paso = true
            resolve()
            
         



} 
else {
  reject('Error de clave')
  Swal.fire('Error de clave')
  navigate('/home')
  
}
}, 2000)
})
},
allowOutsideClick: false
}).then(function (clave) {
  //UsuarioPage()
  if (!paso){
    navigate('/home')
  }
  


console.log(paso)
})
 

}


export default UserPage