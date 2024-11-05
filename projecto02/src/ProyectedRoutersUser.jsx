import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutesUser = ({children}) => {
const user=JSON.parse(localStorage.getItem('adm')) || null

if (user) {
    return children
}else {
    return <Navigate to='/home'/>
}


}

export default ProtectedRoutesUser