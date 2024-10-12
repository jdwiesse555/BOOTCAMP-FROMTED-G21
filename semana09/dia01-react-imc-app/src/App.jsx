import { useState } from 'react'

const App = () => {
  // useState hook que nos ayuda a generar un estado para manipular datos dentro de nuestro componente
  // useState devuelve un arreglo con una variable de lectura y una función de escritura para cambiar el estado
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);

  const handleWeight = (event) => {
    setWeight(event.target.value)
  }

  const handleHeight = (event) => {
    setHeight(event.target.value)
  }

  const imc = weight / ((height / 100) ** 2)

  const imcDecimal = imc.toFixed(2)

  // * Baja: < 18.5
  // * Normal: < 18.5 - 24.9
  // * Sobrepeso: < 25 - 29.9 
  // * Obeso: > 30

  const imcResult = () => {
    let result = ''

    if (imc < 18.5) {
      result = 'Baja'
    } else if (imc >= 18.5 && imc <= 24.9) {
      result = 'Normal'
    } else if (imc >= 25 && imc <= 29.9) {
      result = 'Sobrepeso'
    } else if (imc > 30) {
      result = 'Obeso'
    } else {
      result = 'Datos incorrectos'
    }

    return result
  }

  return (
    <section className="w-[400px] mx-auto bg-slate-200 p-4 mt-8">
      <h1 className="text-3xl text-red-600 font-bold text-center">IMC Calculator</h1>

      <div className="pt-4">
        <p>Weight: {weight} kg</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={handleWeight}
          value={weight}
        />
      </div>

      <div>
        <p>Height: {height} cm</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={handleHeight}
          value={height}
        />
      </div>

      <p className="font-bold ">Tu IMC es {imcDecimal}</p>

      <p className="font-bold text-2xl">Estado de IMC: {imcResult()}</p>
    </section>
  )
}

export default App