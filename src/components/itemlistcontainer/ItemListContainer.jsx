// src/components/ItemListContainer/ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../services/firebase';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();
    fetchData
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando productos...</p>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
        {categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}
      </h2>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No hay productos disponibles</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;