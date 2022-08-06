import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { producId } = useParams()
    useEffect(() => {
        getProductById(producId).then(response =>{
            setProduct(response)
        })
    },[])
    return(
        <>
            <h1>Detalle</h1>
            <h2>{product?.name}</h2>
        </>
    )
}
export default ItemDetailContainer