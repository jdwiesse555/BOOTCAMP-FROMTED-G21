import { useState } from "react"

import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"
import TodoStats from "./components/TodoStats"
import TodoList from "./components/TodoList"

const App = () => {
  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender JS',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwindcss',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  const handleSubmit = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleRemoveTodo = (event) => {
    const id = event.target.dataset.id

    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  const handleCompleted = (event) => {
    const { id } = event.target.dataset
    const isChecked = event.target.checked

    console.log(id, isChecked)

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: isChecked
        }
      }

      return todo // Deja el objeto sin modificaciones
    })

    setTodos(updatedTodos)
  }

  // TODO: RETO2 - Completar la funcionalidad del botón Limpiar completadas
  const handleClearTodos = (event) => {
    const imcompletedTodos = todos.filter(todo => !todo.completed)
    
    setTodos(imcompletedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-400 rounded-lg shadow-lg p-4"
    >
      <TodoHeader title="TODO APP + React" />

      <TodoForm onSubmit={handleSubmit} />

      {/* {input} */}

      {/* DONE: RETO1 - Añadir una estadística de cuantas tareas estan completadas y el total de tareas */}

      <TodoStats
        todos={todos}
        onClearTodos={handleClearTodos}
      />

      <section className="mt-4">
        <TodoList
          todos={todos}
          onCompleted={handleCompleted}
          onRemoveTodo={handleRemoveTodo}
        />
      </section>

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App