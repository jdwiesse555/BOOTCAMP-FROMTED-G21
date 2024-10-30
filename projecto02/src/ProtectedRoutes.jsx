import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
const user=JSON.parse(localStorage.getItem('auth')) || null

if (user) {
    return children
}else {
    return <Navigate to='/'/>
}


}

export default ProtectedRoutes