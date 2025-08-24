import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="container">
        <h1 className="greeting-title">{greeting}</h1>
        <p className="greeting-subtitle">
          Descubre los mejores productos tecnológicos al mejor precio
        </p>
        <div className="coming-soon">
          <div className="loading-animation">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <p>Catálogo de productos próximamente...</p>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
