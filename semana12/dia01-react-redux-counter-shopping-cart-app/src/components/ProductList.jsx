import { useDispatch } from "react-redux"

import { addToCart } from "../store/cart"

const ProductList = ({ products }) => {
  const dispatch = useDispatch()

  return (
    <section style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
      <h3>ProductList</h3>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
        {products && products.map(product => {
          return (
            <button
              key={product.id}
              style={{ backgroundColor: '#F4F27E', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => dispatch(addToCart(product))}
            >
              <img src={product.thumbnail} width={150} />
              {product.title}
            </button>
          )
        })}
      </section>

      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </section>
  )
}

export default ProductList