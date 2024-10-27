import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"
import { useCartStore } from "../store/cart"

const ProductList = () => {
  const { addToCart } = useCartStore()

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
  }, [])

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {products.map(product => {
        return (
          <div key={product.id} className="w-full border border-gray-200 rounded-lg min-h-80 shadow">
            <img
              className="rounded-lg h-48 object-cover w-full"
              src={product.thumbnail}
            />
            <div className="px-5 pb-5 flex flex-col gap-2 mt-4">
              <h5 className="text-xl font-semibold text-gray-900">
                {product.title}
              </h5>
              <div className="text-ellipsis overflow-hidden h-24">
                {product.description}
              </div>
              <div className="flex flex-col items-center justify-between md:flex-row gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  S/ {product.price}
                </span>
                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-3"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </section>
    // <div>{JSON.stringify(products)}</div>
  )
}

export default ProductList