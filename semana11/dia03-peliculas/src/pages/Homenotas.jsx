import { useEffect, useState } from "react";
import { TbEdit, TbTrash, TbEye } from "react-icons/tb";

import {  fetchNotas,fetchUsuarios,eliminarnota } from "../services/notas";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2'
import { toast } from "sonner";

const Homenotas = () => {
  const [notas, setNotas] = useState([])
  const [usuarios, setUsuarios] = useState([])


  useEffect(() => {
    fetchNotas()
      .then(data => setNotas(data))
  }, [])

  useEffect(() => {
    fetchUsuarios()
      .then(data => setUsuarios(data))
  }, [])

const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarnota(id)
          .then(() => {
            
            fetchNotas()
              .then(data => setNotas(data))

            toast.success('Nota has been deleted')
          })
      }
    });
  }

  // DONE: Renderizar las notas en la tabla de abajo usando el estado notas
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>nota</th>
         
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {notas.map(nota => {
            return (
              <tr key={nota.id}>
                <td>{nota.id}</td>

                <td>
                  <strong>{nota.titulo}</strong>
                  <div className="fs-small">
                    <strong>Descripcion:</strong> {nota.descripcion}
                  </div>
                  <div className="fs-small">
                    <strong>Estado:</strong> {nota.estado}
                  </div>
                 

                  {usuarios.filter(usuario => usuario.id===nota.usuarioId).map(usuario => {
                    return (
                      <div className="fs-small">
                          <strong>Usuario:</strong> {usuario.nombre}
                      </div>

                     )})}
                  
                </td>
                <td>
                  <div className="flex gap-0.5">

                    <Link to={`/editnota/${nota.id}`}>
                      <button><TbEdit /></button>
                    </Link>
                    {/* TODO: Implementar el botón de elimnar película usando una alerta que solicite confirmación al usuario (SweetAlert) */}
                    <button
                      onClick={() => handleRemove(nota.id)}
                    >
                      <TbTrash />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      
    </>
  )



}

export default Homenotas