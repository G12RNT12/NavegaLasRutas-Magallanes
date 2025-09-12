import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  if (!product) return <p>Producto no encontrado</p>

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <ItemCount stock={10} initial={1} />
      </div>
    </div>
  )
}

export default ItemDetail