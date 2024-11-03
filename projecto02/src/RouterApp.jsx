import React from "react";
import { Routes,Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TanquesPage } from "./pages/TanquesPage";
import { MetricasPage } from "./pages/MetricasPage";
import Metrica from "./pages/Metrica";
import Tanque from "./pages/Tanque";
import UserPage from "./pages/UserPage";
import NewUsuario from "./pages/NewUsuario";
import MedicionesPage from "./pages/MedicionesPage";
import NewMediciones from "./pages/newMediciones";
import UsuarioPage from "./pages/UsuarioPage";
import NewLmetricas from "./components/home-page/NewLmetricas";
import Listametricas from "./pages/Listametricas";



const RouterApp = () => {
    return (
        <Routes>
    

     
        <Route path='/home' element={<HomePage />} />
        <Route path='/Medidas' element={<MedicionesPage />} />
        <Route path='/Medidas/:id' element={<NewMediciones />} />
        <Route path='/Tanques' element={<TanquesPage />} />
        <Route path='/Metricas' element={<MetricasPage />} />
        <Route path='/Metricas/:id' element={<Metrica />} />
        <Route path='/LMetricas/:id' element={<NewLmetricas />} />
        <Route path='/LMetricas' element={<Listametricas />} />
        <Route path='/Tanques/:id' element={<Tanque />} />
        <Route path='/Usuarios' element={<UserPage />} />
        <Route path='/usuario-new/:id' element={<NewUsuario />} />
        <Route path='/User' element={<UsuarioPage />} />
        
      </Routes>

    )

}

export default RouterApp