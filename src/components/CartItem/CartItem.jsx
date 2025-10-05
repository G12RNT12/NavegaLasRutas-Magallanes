// src/components/CartItem/CartItem.jsx
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;