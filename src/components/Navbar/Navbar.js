import './Navbar.css';

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
                <button>Anime</button>
                <button>Star Wars</button>
                <button>Los Simpsons</button>
                <button>Videojuegos</button>
                <button>Super héroes</button>
                <button>otros</button>
            </div>
        </nav>
    )
}
export default Navbar