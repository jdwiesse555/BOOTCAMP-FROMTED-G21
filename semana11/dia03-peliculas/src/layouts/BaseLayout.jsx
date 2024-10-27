import { Link, Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <Link to='/'>
              <strong>Peliculas + React Router</strong>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/nuevo'>
              <button>Nueva pelicula</button>
            </Link>
          </li>
        </ul>
      </nav>
      <section className="container-fluid">
        <Outlet />
      </section>
    </>
  )
}

export default BaseLayout