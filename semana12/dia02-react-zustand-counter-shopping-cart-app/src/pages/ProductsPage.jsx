import Header from "../components/Header"
import ProductList from "../components/ProductList"

const ProductsPage = () => {
  return (
    <main className="mb-10">
      <Header />

      <section className="container py-4 px-6 mx-auto border mt-5">
        <ProductList />
      </section>
    </main>
  )
}

export default ProductsPage