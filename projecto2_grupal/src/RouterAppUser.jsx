import React from "react";
import { Routes,Route } from "react-router-dom";
import NewUsuario from "./pages/NewUsuario";
import UsuarioPage from "./pages/UsuarioPage";




const RouterAppUser = () => {
    return (
        <Routes>
       
        <Route path='/usuario-new/:id' element={<NewUsuario />} />
        <Route path='/User' element={<UsuarioPage />} />
        
      </Routes>

    )

}

export default RouterAppUser