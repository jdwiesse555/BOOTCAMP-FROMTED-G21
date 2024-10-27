import { create } from "zustand";

export const useCartStore = create(
  (set, get) => ({
    // Estado INICIAL
    cart: [],

    // Actions
    addToCart: (newProduct) => {
      // ¿Existe el nuevo producto en el carrito de compra?
      const productInCartIndex = get().cart.findIndex(
        product => product.id === newProduct.id
      )

      if (productInCartIndex >= 0) {
        // La lógica para cuando el producto ya existe en el carrito de compras
        // Aquí incrementaremos el campo quantity

        const newCart = get().cart.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }
          return product
        })

        set(() => ({ cart: newCart }))

        return
      }

      // Esta línea se ejecuta cuando el producto es nuevo en el carrito de compras
      set(state => ({
        cart: [...state.cart, { ...newProduct, quantity: 1 }]
      }))
    },
    removeFromCart: (id) => {
      // DONE: remover el producto usando el id que tenemos en los parámetros de la función
      set(state => {
        const newCart = state.cart.filter(product => product.id !== id)

        return { cart: newCart }
      })
    },
    cleanCart: () => {
      // DONE: limpiar el carrito de compras
      set(() => ({ cart: [] }))
    }
  })
)