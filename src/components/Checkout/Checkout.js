import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { db } from "../../services/firebase"
import { addDoc, collection,  getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate} from 'react-router-dom'
import './Checkout.css'

const Checkout = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
        const {cart, getQuantity, getTotal, clearCart} = useContext(CartContext)

        const navigate = useNavigate()

        const totalQuantity = getQuantity()
        const total = getTotal()

        const valorInicial ={
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
        }

        const [user, setUser] = useState(valorInicial)

        const dataInput = (e) =>{
            const {name, value} = e.target
            setUser ({...user, [name]:value})
        }


        const saveData = (e) =>{
            e.preventDefault();
            console.log(user);
            setUser(valorInicial)
        }
        const customerName = user.firstname
        const customerLastName = user.lastname
        const mail = user.email
        const phone = user.phone
        const createOrder = async () => {
            setIsLoading(true)
            try{
                const objOrder ={
                    buyer:{
                        customerName,
                        customerLastName,
                        pay:'efectivo',
                        mail,
                        phone,
                    },
                    items: cart,
                    totalQuantity,
                    total,
                }

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
        <h1 className="titulo2">Orden de Compra</h1>
    <h1 className='titulo2'>Por favor ingresa los datos para generar la compra</h1>
    <form className="boxForm" onSubmit={saveData} >
        <div>
    <input className="form" type="text"  name="firstname" placeholder="Nombre" value={user.firstname} onChange={dataInput} ></input>
    </div>
    <div>
    <input className="form"  type="text"  name="lastname" placeholder="Apellido" value={user.lastname} onChange={dataInput} ></input>
    </div>
    <div>
    <input className="form" type="text"  name="email" placeholder="email" value={user.email} onChange={dataInput} ></input>
    </div>
    <div>
    <input className="form" type="number"  name="phone" placeholder="Teléfono" value={user.phone} onChange={dataInput} ></input>
    </div>
    
    
    </form>
        <button className="bt-order" onClick={createOrder}>crear orden</button>
        </>
    )
}

export default Checkout
