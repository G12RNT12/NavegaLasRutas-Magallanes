import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <h2>TechStore</h2>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Smartphones</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Laptops</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Accesorios</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Contacto</a>
          </li>
        </ul>

        {/* Cart Widget */}
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
