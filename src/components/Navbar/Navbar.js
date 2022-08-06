import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    ¡Vivan los monos!
                </h1>
                <h4>
                    Venta de funkos
                </h4>
            </div>
            <div className = "NavTira">
                <button className='Navbtn'>Anime</button>
                <button className='Navbtn'>Star Wars</button>
                <button className='Navbtn'>Los Simpsons</button>
                <button className='Navbtn'>Videojuegos</button>
                <button className='Navbtn'>Super héroes</button>
                <button className = "ButonCar Navbtn"> <CartWidget /></button>10
            </div>
            
        </nav>
    )
}
export default Navbar