const TodoStats = ({ todos, onClearTodos }) => {
    const completedTodos = todos.filter(todo => todo.completed).length
  
    return (
      <section className="flex justify-between items-center">
        <span className="font-bold">
          {completedTodos} de {todos.length}
        </span>
        <button
          className="bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-700 duration-300"
          onClick={onClearTodos}
        >
          Limpiar completadas
        </button>
      </section>
    )
  }
  
  export default TodoStats