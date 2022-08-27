import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../services/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate} from 'react-router-dom'


const Checkout = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
        const {cart, getQuantity, getTotal, clearCart} = useContext(CartContext)

        const navigate = useNavigate()

        const totalQuantity = getQuantity()
        const total = getTotal()



        const createOrder = async () => {
            setIsLoading(true)
            try{
            const objOrder = {
                buyer:{
                    firstName: 'Victor Daniel',
                    lastName: 'Vazquez',
                    phone: '789456123',
                    addres: 'Calle siempre viva 123'
                },
                items: cart, //cart
                totalQuantity, //cart
                total,
                date: new Date()
            }
            // const orderRef = collection(db, 'orders')
            // addDoc(orderRef, objOrder).then(response => {
            //     console.log(response)
            // })

            // const orderRef = doc(db, 'products', 'p0p64NbHHHA3ERqZjtlK')
            // updateDoc(orderRef, {stock: 100}).then(response =>{
            //     console.log(response)
            // })
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')
            
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
                
            const {docs} = productsAddedFromFirestore
            const outOfStock = []
            
            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout( ()=> {
                    navigate('/')
                }, 3000)
                
            } else{
                console.log('Hay productos fuera de Stock')
            }
        } catch (error) {
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    
    }
    if (isLoading){
        return <h1> Se esta generando tu orden...</h1>
    }

    if(orderCreated){
        return <h1> La orden fue creada correctamente, será redirigido a la pagina inicial en 3 segundos... </h1>
    }
    return(
        <>
            <h1>
                Checkout
            </h1>
            <button onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout