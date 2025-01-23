import { Link, Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <Link to='/notas'>
              <strong>Lista de notas</strong>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/nuevanota'>
              <button>Nueva Nota</button>
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