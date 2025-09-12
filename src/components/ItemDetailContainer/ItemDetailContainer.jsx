import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { products as allProducts } from '../../data/products'

const fetchProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = allProducts.find(p => p.id === id)
      resolve(product)
    }, 800)
  })
}

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchProductById(itemId)
      .then(data => setProduct(data))
      .finally(() => setLoading(false))
  }, [itemId])

  return (
    <div>
      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando detalle...</p>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  )
}

export default ItemDetailContainer