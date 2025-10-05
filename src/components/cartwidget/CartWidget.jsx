// src/components/CartWidget/CartWidget.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <img src="https://via.placeholder.com/30?text=🛒" alt="Carrito" />
      {getTotalQuantity() > 0 && <span className="cart-count">{getTotalQuantity()}</span>}
    </Link>
  );
};

export default CartWidget;