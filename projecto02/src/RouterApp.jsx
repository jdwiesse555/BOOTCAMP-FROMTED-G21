import React from "react";
import { Routes,Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TanquesPage } from "./pages/TanquesPage";
import { MetricasPage } from "./pages/MetricasPage";
import Metrica from "./pages/Metrica";
import Tanque from "./pages/Tanque";
import UserPage from "./pages/UserPage";
import NewUsuario from "./pages/NewUsuario";

const RouterApp = () => {
    return (
        <Routes>
    

     
        <Route path='/home' element={<HomePage />} />

        <Route path='/Tanques' element={<TanquesPage />} />
        <Route path='/Metricas' element={<MetricasPage />} />
        <Route path='/Metricas/:id' element={<Metrica />} />
        <Route path='/Tanques/:id' element={<Tanque />} />
        <Route path='/Usuarios' element={<UserPage />} />
        <Route path='/usuario-new/:id' element={<NewUsuario />} />
        
       
      </Routes>

    )

}

export default RouterApp