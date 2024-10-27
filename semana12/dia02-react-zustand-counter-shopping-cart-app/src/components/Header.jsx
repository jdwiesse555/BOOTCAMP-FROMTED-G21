import { useState } from "react"
import { useCartStore } from "../store/cart"
import { TbTrash, TbX, TbShoppingCart } from "react-icons/tb";

const Header = () => {
  const { cart, removeFromCart, cleanCart } = useCartStore()

  const [open, setOpen] = useState(false)

  const classSidebar = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-96 text-gray-600'

  const classShowCart = open ? 'translate-none' : 'translate-x-full'

  const total = cart.reduce((acc, product) => {
    const subtotal = product.quantity * product.price

    return acc + subtotal
  }, 0)

  return (
    <header className="bg-lime-600 text-white py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">Shopping Cart (v1.1)</h1>

        <button
          className="text-3xl relative"
          onClick={() => setOpen(!open)}
        >
          <TbShoppingCart />
          {cart.length > 0 &&
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-3">
              {cart.length}
            </div>
          }
        </button>

        <div
          className={`${classSidebar} ${classShowCart}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="text-2xl font-semibold">
              Cart
            </h5>

            <button onClick={() => setOpen(false)}>
              <TbX size="2rem" />
            </button>
          </div>

          { cart.length === 0 && ( 
            <div className="my-3">
              No hay productos en el carrito
            </div>
          )}

          {/* DONE: Renderizar los productos del carrito de compras en la tabla de abajo */}

          { cart.length > 0 && ( 
            <>
              <div className="py-3">
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
                  onClick={cleanCart}
                >
                  Clean Cart
                </button>
              </div>

              <div className="my-3">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Title / Price</th>
                      <th className="px-6 py-3">Qty</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart && cart.map(product => {
                      return (
                        <tr className="bg-white border-b" key={product.id}>
                          <td className="px-6 py-4 font-semibold">
                            {product.title} - S/ {product.price}
                          </td>
                          <td className="px-6 py-4 font-semibold">
                            {product.quantity}
                          </td>
                          <td className="px-6 py-4">
                            <button onClick={() => removeFromCart(product.id)}>
                              <TbTrash className="text-red-600" size="1.3rem" />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* DONE: Añadir el total de la compra usando la cantidad y el precio */}
              <div className="flex justify-between">
                <span className="text-2xl">TOTAL</span>
                <span className="text-2xl">S/ {total.toFixed(2)}</span>
              </div>
            </>
          )}
          
          
          {/* {JSON.stringify(cart)}2 */}
        </div>
      </div>
    </header>
  )
}

export default Header