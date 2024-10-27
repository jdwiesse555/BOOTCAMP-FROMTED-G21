import { useSelector, useDispatch } from "react-redux"

import { clearCart, removeToCart } from "../store/cart"
import { formatNumber } from "../utils"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const total = cart.reduce((acc, product) => {
    const qty = product.quantity
    const price = product.price
    const subtotal = qty * price

    return acc + subtotal
  }, 0)

  if (cart.length === 0) {
    return (
      <section style={{ width: '100%' }}>
        <h3>Shopping Cart</h3>

        <p style={{ textAlign: 'center' }}>Shopping cart empty!</p>
      </section>
    )
  }

  return (
    <section>
      <h3>Shopping Cart</h3>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => dispatch(clearCart())}>
          Clean cart
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cart && cart.map(product => {
          return (
            <button
              key={product.id}
              style={{ backgroundColor: '#FF8080', border: 'none', cursor: 'pointer', padding: '1rem' }}
              onClick={() => dispatch(removeToCart(product.id))}
            >
              {product.title} - S/ {product.price} (Qty: {product.quantity})
            </button>
          )
        })}
      </div>
      
      {/* DONE: calcular el total de la compra en el carrito */}

      <div style={{ paddingTop: '1rem', fontSize: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        {/* <strong>TOTAL</strong> <span>S/ {total.toFixed(2)}</span> */}
        <strong>TOTAL</strong> <span>S/ {formatNumber(total)}</span>
      </div>

      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
    </section>
  )
}

export default ShoppingCart