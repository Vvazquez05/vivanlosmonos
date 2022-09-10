import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartDetail from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { AlertProvider } from './context/Alert'
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <AlertProvider>
        <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='Cart' element={<CartDetail/>}/>
            <Route path= '/checkout' element={<Checkout />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
