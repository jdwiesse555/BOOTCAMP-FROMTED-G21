import { Link, Outlet } from "react-router-dom"

const LayoutBase = () => {
  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className="container mx-auto flex justify-between">
          <h1 className='font-bold'>React Router DOM</h1>

          <nav className="flex gap-4">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
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