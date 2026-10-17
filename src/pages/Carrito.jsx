import { useState } from 'react';
import { Link } from 'react-router-dom';
import Price from '../components/atoms/Price';
import '../styles/pages/Carrito.css';

function Carrito() {
  // Estado local para los productos del carrito (vacío por defecto)
  const [items, setItems] = useState([]);

  const total = items.reduce(
    (acumulado, item) => acumulado + item.price * (item.quantity || 1),
    0
  );

  const procesarCompra = () => {
    if (items.length === 0) return;
    alert('¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.');
    setItems([]);
  };

  return (
    <main className="cart-page">
      <section className="cart-hero">
        <span className="cart-eyebrow">MI PEDIDO</span>
        <h1>Tu carrito</h1>
        <p>Revisa tus productos antes de finalizar la compra.</p>
      </section>

      <section className="cart-content">
        {items.length === 0 ? (
          <div className="cart-empty-card">
            <p>Tu carrito de compras está vacío en este momento.</p>
            <Link to="/products" className="cart-btn-secondary">
              Explorar productos →
            </Link>
          </div>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <Price amount={item.price} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <div className="cart-total-container">
            <span className="cart-total-label">Total a pagar:</span>
            <Price amount={total} className="cart-total-amount" />
          </div>

          <div className="cart-actions">
            <Link to="/products" className="cart-btn-outline">
              Continuar compra
            </Link>
            <button
              type="button"
              className="cart-btn-primary"
              onClick={procesarCompra}
              disabled={items.length === 0}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Carrito;