import Counter from "./components/Counter"

import { Provider } from 'react-redux'
import { store } from "./store"

import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"

import { useProducts } from "./hooks/useProducts"

const App = () => {
  const { products } = useProducts()

  return (
    <Provider store={store}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <ProductList products={products} />
        
        <ShoppingCart />
      </div>

      <hr />

      <Counter />
    </Provider>
  )
}

export default App