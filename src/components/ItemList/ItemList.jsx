import { Link } from 'react-router-dom'
import './ItemList.css'

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <div className="item-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Link to={`/item/${product.id}`} className="btn-detail">
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ItemList