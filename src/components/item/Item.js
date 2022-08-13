import './Item.css'
// import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom'


// const handleOnAdd = (quantity) => {
//     console.log(`la cantidad agregada es: ${quantity}`)
// }
const Item = ({id, name, img, price}) => {
    const handleClick = (e) => {
        e.stopPropagation ()
        console.log('hice click en item')
    }
    return (
        <article className="CardItem" onClick={handleClick}>
            <header className="Header">
                <h2 className="ItemHeader">
                    {id} {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option Detalle Detalle'>Ver detalle</Link>
                {/* <Counter stock={stock} onAdd={handleOnAdd}/> */}
            </footer>
        </article>
    )
}
export default Item

