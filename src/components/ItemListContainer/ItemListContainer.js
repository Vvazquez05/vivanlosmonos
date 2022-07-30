import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsDeDaniel } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsDeDaniel().then(products => {
            setProducts(products)
    })
    }, [])
    
    return (
        <> 
            <h1>{greeting}</h1>
            <ItemList products = {products}/>
        </>
    )
}

export default ItemListContainer