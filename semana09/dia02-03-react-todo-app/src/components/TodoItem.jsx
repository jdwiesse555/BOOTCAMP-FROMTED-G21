const TodoItem = ({ todo, onCompleted, onRemoveTodo }) => {
    return (
      <li className="flex">
        <input
          className="mr-2"
          type="checkbox"
          data-id={todo.id}
          onChange={onCompleted}
          checked={todo.completed}
        />
        <div className="w-full flex justify-between items-center">
          <span
            className={`font-medium ${todo.completed ? 'line-through' : '' }`}
          >
            {todo.title}
          </span>
          <button
            className="bg-red-300 rounded-lg px-1 py-1"
            data-id={todo.id}
            onClick={onRemoveTodo}
          >
            ❌
          </button>
        </div>
      </li>
    )
  }
  
  export default TodoItem