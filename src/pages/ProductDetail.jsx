import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import Badge from '../components/atoms/Badge';
import Price from '../components/atoms/Price';
import '../styles/pages/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const producto = products.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <main className="product-detail-page">
        <div style={{ textAlign: 'center', padding: '50px 20px', color: '#fff' }}>
          <h2>Producto no encontrado</h2>
          <Link to="/products" style={{ color: '#c084fc' }}>← Volver al catálogo</Link>
        </div>
      </main>
    );
  }

  const handleAgregar = () => {
    const cartGuardado = localStorage.getItem('gamebites_cart');
    const cart = cartGuardado ? JSON.parse(cartGuardado) : [];

    const existingIndex = cart.findIndex((item) => item.id === producto.id);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += cantidad;
    } else {
      cart.push({ id: producto.id, quantity: cantidad });
    }

    localStorage.setItem('gamebites_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));

    setAgregado(true);
    setTimeout(() => setAgregado(false), 3000);
  };

  return (
    <main className="product-detail-page">
      <div className="product-detail-card">
        <div className="product-detail-image-wrapper">
          <img src={producto.image} alt={producto.name} />
        </div>

        <div className="product-detail-info">
          <div>
            <Badge variant="outline">{producto.category}</Badge>
          </div>

          <h1>{producto.name}</h1>
          <Price amount={producto.price} className="product-detail-price" />
          <p className="product-detail-description">{producto.description}</p>

          <div className="product-detail-actions">
            <div className="quantity-selector">
              <button type="button" onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}>-</button>
              <span>{cantidad}</span>
              <button type="button" onClick={() => cantidad < 99 && setCantidad(cantidad + 1)}>+</button>
            </div>

            <button type="button" className="add-to-cart-btn" onClick={handleAgregar}>
              Agregar al Carrito
            </button>
          </div>

          {agregado && (
            <div className="cart-success-message">
              ¡Producto agregado al carrito exitosamente!
            </div>
          )}

          <div className="back-link-container">
            <Link to="/products">← Volver al Catálogo</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;