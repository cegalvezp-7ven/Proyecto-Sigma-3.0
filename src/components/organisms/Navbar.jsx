import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo';
import '../../styles/organisms/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const actualizarContador = () => {
      const cartGuardado = localStorage.getItem('gamebites_cart');
      const cart = cartGuardado ? JSON.parse(cartGuardado) : [];
      const total = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(total);
    };
    const actualizarUsuario = () => {
      const usuarioGuardado = localStorage.getItem('gamebites_user');
      setUser(usuarioGuardado ? JSON.parse(usuarioGuardado) : null);
    };

    actualizarContador();
    actualizarUsuario();
    window.addEventListener('cartUpdated', actualizarContador);
    window.addEventListener('userUpdated', actualizarUsuario);

    return () => {
      window.removeEventListener('cartUpdated', actualizarContador);
      window.removeEventListener('userUpdated', actualizarUsuario);
    };
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem('gamebites_user');
    setUser(null);
    alert('Sesión cerrada correctamente.');
    navigate('/');
  };

  return (
    <header className="main-header">
      <nav className="navbar-container">
        <div className="brand-section">
          <Logo />
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          ☰
        </button>

        <div className={`nav-links-section ${menuOpen ? 'menu-open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Productos</Link>
          <Link to="/promociones" onClick={() => setMenuOpen(false)}>Promociones</Link>
          <Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
          {user?.role === 'admin' && (
            <Link to="/admin" style={{ color: '#00f2fe', fontWeight: 'bold' }}>
              Panel Admin
            </Link>
          )}
        </div>

        <div className="user-section">
          <Link to="/carrito" className="cart-link">
            <span>🛒 Carrito</span>
            <span className="cart-count">{cartCount}</span>
          </Link>

          {user ? (
            <div className="user-logged-info">
              <span className="user-name">Hola, {user.name}</span>
              <button
                type="button"
                className="logout-btn"
                onClick={handleCerrarSesion}
              >
                Salir
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link">Acceso</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;