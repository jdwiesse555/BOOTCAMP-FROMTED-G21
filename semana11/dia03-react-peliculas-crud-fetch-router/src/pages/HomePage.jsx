import { useEffect, useState } from "react";
import { TbEdit, TbTrash } from "react-icons/tb";

import { fetchPeliculas } from "../services/peliculas";

const HomePage = () => {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetchPeliculas()
      .then(data => setPeliculas(data))
  }, [])

  // DONE: Renderizar las peliculas en la tabla de abajo usando el estado peliculas

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map(pelicula => {
            return (
              <tr key={pelicula.id}>
                <td>{pelicula.id}</td>
                <td>
                  <img
                    src={pelicula.imagen}
                    width="100"
                    height="250"
                  />
                </td>
                <td>
                  <strong>{pelicula.nombre}</strong>
                  <div className="fs-small">
                    <strong>Estreno:</strong> {pelicula.estreno}
                  </div>
                  <div className="fs-small">
                    <strong>Genero:</strong> {pelicula.generoId}
                  </div>
                  <div className="fs-small">
                    <strong>Resumen:</strong> {pelicula.resumen}
                  </div>
                </td>
                <td>
                  <div className="flex gap-0.5">
                    <button><TbEdit /></button>
                    <button><TbTrash /></button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <pre>{JSON.stringify(peliculas, null, 2)}</pre>
    </>
  )
}

export default HomePage