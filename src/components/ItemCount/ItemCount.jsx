// src/components/ItemCount/ItemCount.jsx
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
      setAdded(true);
    }
  };

  if (added) {
    return <p>Producto agregado al carrito</p>;  // Ocultar ItemCount post-agregado
  }

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>+</button>
      </div>
      <button className="btn-add" onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito ({stock} disponibles)
      </button>
    </div>
  );
};

export default ItemCount;