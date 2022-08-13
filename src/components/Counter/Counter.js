// import './Counter.css' 
// import { useState } from 'react'

// const Counter= ( {stock, onAdd} ) => {
//     const [count, setCount] = useState (1)
//     // let count = 10
//     const increment = () => {
//         if (count < stock ) {
//             setCount(count + 1)
//         }  
//     }
//         const decrement = () => {
//         if (count > 1 ) {
//             setCount(count - 1)
//         }  
//     }
//     // const {onAdd} = () =>{
//     //     alert(`Acabas de agregar ${count} productos`)
//     // }
//     return (
//         <div className="count-container">
//             <div className="count-container__contador">
//                 <button className="count-container__button" onClick={decrement} disabled = {count === 1}>-</button>
//                 <span className="count-container__qty">{count}</span>
//                 <button className="count-container__button" onClick={increment} disabled = {count === stock}>+</button>
//             </div>   
//                 <button className="button-primary" onClick={() => onAdd(count)}>Añadir</button>     
//         </div>  
//     ) 
// }
// export default Counter;

