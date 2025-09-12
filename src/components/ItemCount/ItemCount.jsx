import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  const onAdd = () => {
    alert(`Agregaste ${count} unidades al carrito`)
  }

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>+</button>
      </div>
      <button className="btn-add" onClick={onAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount