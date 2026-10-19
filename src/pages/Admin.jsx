import { useState, useEffect } from 'react';
import productsData from '../data/products';
import Price from '../components/atoms/Price';
import '../styles/pages/Admin.css';

function Admin() {
  const [productos, setProductos] = useState(productsData);
  const [ordenes, setOrdenes] = useState(() => {
    const ordenesGuardadas = localStorage.getItem('gamebites_orders');

    if (ordenesGuardadas) {
      try {
        return JSON.parse(ordenesGuardadas);
      } catch {
        // Si el contenido guardado no es válido, se usan los pedidos de ejemplo.
      }
    }

    return [
      {
        id: 1001,
        fecha: '15/10/2026',
        cliente: 'cliente@gmail.com',
        detalle: 'PokéBall Surprise (1x), Bloque Redstone (2x)',
        total: 30970,
      },
    ];
  });
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('individual');
  const [description, setDescription] = useState('');

  // Persiste los pedidos cuando cambian, sin actualizar el estado desde el efecto.
  useEffect(() => {
    localStorage.setItem('gamebites_orders', JSON.stringify(ordenes));
  }, [ordenes]);

  const totalVentas = ordenes.reduce((acc, order) => acc + order.total, 0);

  const handleAgregarProducto = (e) => {
    e.preventDefault();
    const rutaImagen = image.startsWith('/images/')
      ? image
      : `/images/${image || 'placeholder.jpg'}`;

    const nuevoProducto = {
      id: productos.length > 0 ? Math.max(...productos.map((p) => p.id)) + 1 : 1,
      name: title,
      category: category.toUpperCase(),
      image: rutaImagen,
      price: Number(price),
      type,
      description,
    };

    setProductos([nuevoProducto, ...productos]);
    alert('¡Producto agregado con éxito al catálogo!');
    setTitle('');
    setCategory('');
    setImage('');
    setPrice('');
    setType('individual');
    setDescription('');
  };

  const handleEliminarProducto = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto del catálogo?')) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="admin-page">
      <section className="admin-hero">
        <span className="admin-eyebrow">PANEL DE CONTROL</span>
        <h1>Panel de Administración</h1>
        <p>Revisa métricas de ventas, compras realizadas y gestión de catálogo.</p>
      </section>

      <section className="admin-content">
        <div className="admin-metrics-grid">
          <div className="metric-card metric-sales">
            <h4>Ventas Totales</h4>
            <Price amount={totalVentas} className="metric-value" />
          </div>
          <div className="metric-card metric-orders">
            <h4>Pedidos Procesados</h4>
            <span className="metric-value">{ordenes.length}</span>
          </div>
        </div>
        {/*Historial de Ventas*/}
        <div className="admin-section-card">
          <h2>Historial de Ventas</h2>
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th># Orden</th>
                  <th>Fecha</th>
                  <th>Cliente</th>
                  <th>Detalle de Productos</th>
                  <th className="text-right">Total Pagado</th>
                </tr>
              </thead>
              <tbody>
                {ordenes.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="empty-table-msg">
                      Aún no se han registrado ventas.
                    </td>
                  </tr>
                ) : (
                  ordenes.map((order) => (
                    <tr key={order.id}>
                      <td className="order-id">#{order.id}</td>
                      <td className="text-muted">{order.fecha}</td>
                      <td>{order.cliente || 'Cliente'}</td>
                      <td>{order.detalle}</td>
                      <td className="text-right">
                        <Price amount={order.total} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="admin-section-card">
          <h2>Agregar Nuevo Producto / Box</h2>
          <form className="admin-form" onSubmit={handleAgregarProducto}>
            <div className="form-group">
              <label htmlFor="admin-title">Nombre:</label>
              <input
                type="text"
                id="admin-title"
                required
                placeholder="Ej: Choco-Shield XL"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-category">Categoría (Franquicia):</label>
              <input
                type="text"
                id="admin-category"
                required
                placeholder="Ej: FORTNITE"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-img">Nombre de Imagen (en /images/):</label>
              <input
                type="text"
                id="admin-img"
                required
                placeholder="Ej: shield.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-price">Precio ($ CLP):</label>
              <input
                type="number"
                id="admin-price"
                required
                placeholder="Ej: 12990"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-type">Tipo:</label>
              <select
                id="admin-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="individual">Individual (Productos)</option>
                <option value="box">Box (Promociones)</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="admin-desc">Descripción:</label>
              <textarea
                id="admin-desc"
                required
                rows="3"
                placeholder="Descripción detallada del producto..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-actions full-width">
              <button type="submit" className="admin-submit-btn">
                Guardar Producto
              </button>
            </div>
          </form>
        </div>
        <div className="admin-section-card">
          <h2>Catálogo Existente</h2>
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th className="text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td className="product-title">{prod.name}</td>
                    <td className="product-category">{prod.category}</td>
                    <td className="text-muted">
                      {prod.type === 'box' ? 'Box' : 'Individual'}
                    </td>
                    <td>
                      <Price amount={prod.price} />
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="admin-delete-btn"
                        onClick={() => handleEliminarProducto(prod.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;