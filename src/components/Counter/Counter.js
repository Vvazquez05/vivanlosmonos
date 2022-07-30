import { useState } from 'react'

const Counter= ( {stock, onAdd} ) => {
    const [count, setCount] = useState (1)
    // let count = 10
    const increment = () => {
        if (count < stock ) {
            setCount(count + 1)
        }  
    }
        const decrement = () => {
        if (count > 1 ) {
            setCount(count - 1)
        }  
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button> 
        </div>    
    ) 
}
export default Counter;

