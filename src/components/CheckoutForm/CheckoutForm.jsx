// src/components/CheckoutForm/CheckoutForm.jsx
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { createOrder } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { cart, clearCart, getTotalPrice } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Limpia errores al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('El email no es válido.');
      return;
    }

    setLoading(true);
    setError('');
    
    const order = {
      buyer: formData,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
      date: new Date().toISOString()
    };

    try {
      const orderIdGenerated = await createOrder(order);
      setOrderId(orderIdGenerated);
      clearCart();
      // Opcional: Redirigir después de 3 segundos
      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      console.error('Error creating order:', error);
      setError('Error al procesar la orden. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  // Renderizado condicional: Si hay orderId, muestra éxito
  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <p>Redirigiendo al catálogo...</p>
      </div>
    );
  }

  // Si el carrito está vacío, muestra mensaje
  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Carrito vacío</h2>
        <button onClick={() => navigate('/')}>Ir al catálogo</button>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Finalizar Compra</h2>
      <div className="order-summary">
        <h3>Resumen del pedido</h3>
        <p>Total: ${getTotalPrice()}</p>
        <p>Artículos: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="checkout-form">
        {error && <p className="error">{error}</p>}
        
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Procesando...' : 'Confirmar Orden'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
