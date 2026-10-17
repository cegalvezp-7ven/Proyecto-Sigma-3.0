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
        <div className="product-detail-error">
          <h2>Producto no encontrado</h2>
          <Link to="/products">← Volver al catálogo</Link>
        </div>
      </main>
    );
  }

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const incrementar = () => {
    if (cantidad < 99) setCantidad(cantidad + 1);
  };

  const agregarAlCarrito = () => {
    setAgregado(true);
    setTimeout(() => setAgregado(false), 3000);
  };

  return (
    <main className="product-detail-page">
      <div className="product-detail-card">
        <div className="product-detail-image-wrapper">
          <img src={`/images/${producto.image}`} alt={producto.name} />
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
              <button type="button" onClick={decrementar}>-</button>
              <span>{cantidad}</span>
              <button type="button" onClick={incrementar}>+</button>
            </div>

            <button
              type="button"
              className="add-to-cart-btn"
              onClick={agregarAlCarrito}
            >
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