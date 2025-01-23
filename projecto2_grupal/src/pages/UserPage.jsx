import { useEffect, useState } from "react"
import { Link ,useNavigate } from "react-router-dom"
import LayoutBase from "../layouts/LayoutBase"
import Swal from 'sweetalert2'
import UsuarioPage from "./UsuarioPage"
import { useUsuarios } from "../components/home-page/services/usuariosold"

const UserPage = () => {


  const navigate = useNavigate()

  navigate('/user')


 
 }

export default UserPage