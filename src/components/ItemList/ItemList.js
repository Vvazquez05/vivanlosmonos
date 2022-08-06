import './ItemList.css'
import Item from "../item/Item"
const ItemList = ({products}) => {
    return (
        <div className='ItemList'>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList