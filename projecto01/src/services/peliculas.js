//const fs = require('fs')
import fs from 'fs'
 
export const fetchPeliculas = async () => {

  }
  export const createtanques =  (tanques,data) => {
    
    
    tanques.push(data)
    const json_tanque = JSON.stringify(data)
    fs.writeFileSync('src/tanques.json',json_tanque,'utf-8')
    //FileSystem.writeFileSync('src/tanques.json',json_tanque,'utf-8')
  }


  // crear un registro  Crearemos una petición del tipo POST para el endpoint /students
  export const updatetanques =   (tanques,data) => {
  const updatedata = tanques.find(tanques => tanques.codigo===data.codigo)
  
  updatedata.HEIGHT_PIES=data.HEIGHT_PIES;
  updatedata.capacidad=data.capacidad
  updatedata.metrica=data.metrica



}

