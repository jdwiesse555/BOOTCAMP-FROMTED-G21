import { Link, Outlet } from "react-router-dom"

const LayoutBase = () => {
  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className="container mx-auto flex justify-between">
          <h1 className='font-bold'>Sistemas de Tanques</h1>

          <nav className="flex gap-4">
            <Link to='/'>Login</Link>
            <Link to='/home'>Home</Link>
            <Link to='/Tanques'>Tanques</Link>
            <Link to='/Metricas'>Metricas</Link>
            <Link to='/Usuarios'>Usuarios</Link>
          </nav>
        </div>
      </header>
      <main className='container mx-auto my-6 px-6'>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutBase