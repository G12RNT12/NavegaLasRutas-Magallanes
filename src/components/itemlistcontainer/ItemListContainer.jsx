import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { products as allProducts } from '../../data/products'

const fetchProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(allProducts.filter(p => p.category === categoryId))
      } else {
        resolve(allProducts)
      }
    }, 800)
  })
}

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchProducts(categoryId)
      .then(data => {
        setProducts(data)
      })
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
        {categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}
      </h2>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}

export default ItemListContainer