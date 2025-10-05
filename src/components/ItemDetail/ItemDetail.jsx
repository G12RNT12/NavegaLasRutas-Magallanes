// src/components/ItemDetail/ItemDetail.jsx
import { useCart } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <ItemCount stock={product.stock || 10} onAdd={handleAddToCart} />  // Asume stock en producto
      </div>
    </div>
  );
};

export default ItemDetail;