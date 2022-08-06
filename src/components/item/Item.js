import './Item.css'
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom'


const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
}
const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
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
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
                <Counter stock={stock} onAdd={handleOnAdd}/>
            </footer>
        </article>
    )
}
export default Item