import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Price from '../components/atoms/Price';
import products from '../data/products';
import '../styles/pages/Carrito.css';

function Carrito() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartGuardado = localStorage.getItem('gamebites_cart');
    if (cartGuardado) {
      setCartItems(JSON.parse(cartGuardado));
    }
  }, []);

  const actualizarStorage = (nuevoCarrito) => {
    setCartItems(nuevoCarrito);
    localStorage.setItem('gamebites_cart', JSON.stringify(nuevoCarrito));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const itemsConDetalle = cartItems
    .map((item) => {
      const producto = products.find((p) => p.id === item.id);
      return producto ? { ...producto, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const total = itemsConDetalle.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const modificarCantidad = (id, delta) => {
    const nuevoCarrito = cartItems
      .map((item) => {
        if (item.id === id) {
          const nuevaCantidad = item.quantity + delta;
          return nuevaCantidad > 0 ? { ...item, quantity: nuevaCantidad } : null;
        }
        return item;
      })
      .filter(Boolean);

    actualizarStorage(nuevoCarrito);
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = cartItems.filter((item) => item.id !== id);
    actualizarStorage(nuevoCarrito);
  };

const procesarCompra = () => {
    const usuarioGuardado = localStorage.getItem('gamebites_user');

    if (!usuarioGuardado) {
      alert('Debes iniciar sesión para realizar la compra.');
      navigate('/login');
      return;
    }

    if (cartItems.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);
    const ordenesGuardadas = localStorage.getItem('gamebites_orders');
    const listaOrdenes = ordenesGuardadas ? JSON.parse(ordenesGuardadas) : [];

    const nuevaOrden = {
      id: Math.floor(1000 + Math.random() * 9000),
      fecha: new Date().toLocaleDateString('es-CL'),
      cliente: usuario.name || usuario.email,
      detalle: itemsConDetalle.map((i) => `${i.name} (${i.quantity}x)`).join(', '),
      total: total,
    };
    listaOrdenes.unshift(nuevaOrden);
    localStorage.setItem('gamebites_orders', JSON.stringify(listaOrdenes));
    alert(`¡Gracias por tu compra, ${usuario.name || 'Gamer'}! Tu pedido #${nuevaOrden.id} ha sido procesado con éxito.`);
    actualizarStorage([]);
  };

  return (
    <main className="cart-page">
      <section className="cart-hero">
        <span className="cart-eyebrow">MI PEDIDO</span>
        <h1>Tu carrito</h1>
        <p>Revisa tus productos antes de finalizar la compra.</p>
      </section>

      <section className="cart-content">
        {itemsConDetalle.length === 0 ? (
          <div className="cart-empty-card">
            <p>Tu carrito de compras está vacío en este momento.</p>
            <Link to="/products" className="cart-btn-secondary">
              Explorar productos →
            </Link>
          </div>
        ) : (
          <div className="cart-list">
            {itemsConDetalle.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div>
                    <h3>{item.name}</h3>
                    <Price amount={item.price} />
                  </div>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-selector">
                    <button type="button" onClick={() => modificarCantidad(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => modificarCantidad(item.id, 1)}>+</button>
                  </div>

                  <Price amount={item.price * item.quantity} className="cart-item-subtotal" />

                  <button
                    type="button"
                    className="cart-remove-btn"
                    onClick={() => eliminarProducto(item.id)}
                  >
                    ✕
                  </button>
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
              disabled={itemsConDetalle.length === 0}
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