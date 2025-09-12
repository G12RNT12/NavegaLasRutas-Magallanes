import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          TechStore
        </Link>

        <ul className="navbar-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/smartphones" className={({ isActive }) => isActive ? 'active' : ''}>
              Smartphones
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/laptops" className={({ isActive }) => isActive ? 'active' : ''}>
              Laptops
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/accesorios" className={({ isActive }) => isActive ? 'active' : ''}>
              Accesorios
            </NavLink>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar