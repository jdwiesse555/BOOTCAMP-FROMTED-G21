import { createSlice } from "@reduxjs/toolkit"

// Reducer: son funciones que nos ayudan a transformar los estados que creamos

export const counterSlice = createSlice({
  name: 'counter',
  // Podemos inicializar el estado con Objetos, arreglos, tipos de datos primitivos(numeros, cadenas, boolean, etc)
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    decrement: (state) => state - 1,
    incrementByAmount: (state, action) => state + action.payload,
    decrementByAmount: (state, action) => state - action.payload,
  }
})

// Exportamos el estado inicial y los reducers del slice
export default counterSlice.reducer

// Exportamos las acciones
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} = counterSlice.actions