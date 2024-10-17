import { Link, Outlet } from "react-router-dom"

const LayoutBase = () => {
  return (
    <>
      <header className='flex gap-2 bg-amber-200 py-4 px-6'>
        <h1 className='font-bold'>React Router DOM</h1>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </header>
      <main className='container mx-auto border'>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutBase