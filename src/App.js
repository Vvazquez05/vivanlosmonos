import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  // const handleOnAdd = (quantity) => {
  //   console.log(`la cantidad agregada es: ${quantity}`)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting= {'Bienvenido a la tienda de Funkos'}/>}/>
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
        {/* <Counter stock={10} onAdd={handleOnAdd}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
