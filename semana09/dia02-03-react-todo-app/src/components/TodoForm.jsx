import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Añadiendo una nueva tarea...')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    onSubmit(newTodo)

    setInput('')
  }

  const handleChange = (event) => {
    // Vamos a capturar lo que escribimos en la caja de texto
    setInput(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full border my-3 p-2 rounded-lg"
        type="text"
        placeholder="¿Qué deseas hacer hoy?"
        required
        onChange={handleChange}
        value={input}
      />
    </form>
  )
}

export default TodoForm
