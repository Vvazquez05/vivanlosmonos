import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
        <div className='Title'>
          <h1>¡Vivan los monos!</h1>
          <h2>Venta de Funkos</h2>
          <nav className="NavBar" >
              <div className="Categories">
                <NavLink to='/' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Todos</NavLink>
                  <NavLink to='/category/Super héroes' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Super héroes</NavLink>
                  <NavLink to='/category/Villanos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Villanos</NavLink>
                  <NavLink to='/category/Musico' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Musico</NavLink>
                  <NavLink to='/category/Anime' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Anime</NavLink>
              </div>
              <CartWidget />
          </nav>
      </div>
  )
}

export default NavBar