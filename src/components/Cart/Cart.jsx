// src/components/Cart/Cart.jsx
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Carrito vacío</h2>
        <Link to="/">Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      <div className="cart-total">
        <h3>Total: ${getTotalPrice()}</h3>
        <button onClick={clearCart}>Limpiar Carrito</button>
        <Link to="/checkout">Proceder al Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;