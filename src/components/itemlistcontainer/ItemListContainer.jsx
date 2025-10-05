    import { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import { fetchProducts } from "../../services/firebase";

    function ItemListContainer() {
      const { categoryId } = useParams();
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        setLoading(true);
        fetchProducts(categoryId).then(data => {
          setProducts(data);
          setLoading(false);
        });
      }, [categoryId]);

      if (loading) return <p>Cargando productos...</p>;
      if (products.length === 0) return <p>No hay productos disponibles</p>;

      return (
        <div>
          {products.map(p => <Item key={p.id} {...p} />)}
        </div>
      );
    }
    export default ItemListContainer;
    //x