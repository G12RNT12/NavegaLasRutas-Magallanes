// src/components/ItemList/Item.jsx
import { Link } from 'react-router-dom';
import './ItemList.css';  // Comparte estilos con ItemList si es necesario, o crea Item.css

const Item = ({ product }) => {
  return (
    <div className="item-card">
      {product.image ? (
        <img 
          src={product.image} 
          alt={product.title} 
          className="item-image"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/200x150?text=Sin+Imagen'; }}  // Fallback para imágenes rotas
        />
      ) : (
        <div className="item-placeholder">Sin imagen</div>
      )}
      
      <div className="item-info">
        <h3 className="item-title">{product.title}</h3>
        <p className="item-price">${product.price}</p>
        <p className="item-description">{product.description.substring(0, 100)}...</p>
        <Link to={`/item/${product.id}`} className="btn-detail">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;