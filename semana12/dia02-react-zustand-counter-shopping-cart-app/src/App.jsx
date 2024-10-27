import Counter from "./components/Counter"
import ProductsPage from "./pages/ProductsPage"

const App = () => {
  return (
    <>
      <ProductsPage />

      <section style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Counter />
      </section>
    </>
  )
}

export default App