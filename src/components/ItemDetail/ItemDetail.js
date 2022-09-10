import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import AlertContext  from '../../context/Alert';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const {setNotification} = useContext(AlertContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity:Number(quantity), total:(price*quantity)
        }
        if(quantity<=0){
            setNotification('danger',`Sorry! We don't have stock`)
        } else{
            addItem(productToAdd)
            setNotification('success',`You added ${quantity} ${name}`)
        }
    }

    const productQuantity = getProductQuantity(id)

    return (
        <article className="CardItemDetalle">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImgDetalle"/>
            </picture>
            <section>
                <p className="InfoDetalle">
                    Categoria: {category}
                </p>
                <h6 className="InfoDetalle">
                    Descripción: {description}
                    </h6>
                <p className="InfoDetalle">
                    Precio: ${price}.00 mxn
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail