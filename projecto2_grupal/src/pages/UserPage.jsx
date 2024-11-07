import { useEffect, useState } from "react"
import { Link ,useNavigate } from "react-router-dom"
import LayoutBase from "../layouts/LayoutBase"
import Swal from 'sweetalert2'
import UsuarioPage from "./UsuarioPage"
import { useUsuarios } from "../components/home-page/services/usuarios"

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
            localStorage.setItem('adm', JSON.stringify("ok")) // accessToken
            navigate('/user')
            paso = true
            resolve()
                
    console.log("paso",paso)
            
         



} 
else {
  reject('Error de clave')
  Swal.fire('Error de clave')
  navigate('/home')
  
}
}, 200)
})
},
allowOutsideClick: false
}).then(function (clave) {
  //UsuarioPage()
  if (!paso){
    navigate('/home')
    console.log(paso)
  }
  


console.log(paso)
})
 

}


export default UserPage