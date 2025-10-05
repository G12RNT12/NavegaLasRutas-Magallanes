// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import NotFound from '../NotFound';
import { getProductById } from '../../services/firebase';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando detalle...</p>;
  }

  if (!product) {
    return <NotFound />;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;