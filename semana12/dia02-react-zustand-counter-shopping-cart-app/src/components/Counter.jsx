import { useCounterStore } from "../store/counter"

const Counter = () => {

  const { count, increment, decrement, increaseByValue } = useCounterStore()
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#CD8D7A', padding: '1rem' }}>

      <h3 className="text-3xl mb-4 font-bold">Counter with Zustand</h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          className="px-4 py-2 bg-sky-500 rounded-lg font-bold"
          onClick={() => increaseByValue(15)}
        >+15</button>
        <button
          className="px-4 py-2 bg-sky-500 rounded-lg font-bold"
          onClick={increment}>+1</button>
        <h1 className="text-3xl font-bold">{count}</h1>
        <button
          className="px-4 py-2 bg-sky-500 rounded-lg font-bold"
          onClick={decrement}>-1</button>
        <button
          className="px-4 py-2 bg-sky-500 rounded-lg font-bold"
          onClick={() => increaseByValue(-15)}>-15</button>
      </div>

    </div>
  )
}

export default Counter