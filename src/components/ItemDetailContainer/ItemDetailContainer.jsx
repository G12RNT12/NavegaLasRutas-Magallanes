// src/components/ItemDetailContainer/ItemDetailContainer.jsx

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import NotFound from '../NotFound'
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

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando detalle...</p>
  }

  if (!product) {
    return <NotFound />
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer