import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/organisms/Navbar.css';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [megaMenuAbierto, setMegaMenuAbierto] = useState(false);

  const cerrarMenus = () => {
    setMenuAbierto(false);
    setMegaMenuAbierto(false);
  };

  return (
    <header className="site-header">
      <div className="header-main">
        <Link to="/" className="brand" onClick={cerrarMenus}>
          <span className="brand-game">GAME</span>
          <span className="brand-bites">BITES</span>
          <span className="brand-dot">.</span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>

        <nav className={`main-nav ${menuAbierto ? 'nav-open' : ''}`}>
          <Link to="/" onClick={cerrarMenus}>
            Inicio
          </Link>

          <Link to="/nosotros" onClick={cerrarMenus}>
            Nosotros
          </Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setMegaMenuAbierto(true)}
            onMouseLeave={() => setMegaMenuAbierto(false)}
          >
            <button
              type="button"
              className="nav-dropdown-button"
              aria-expanded={megaMenuAbierto}
              onClick={() => setMegaMenuAbierto(!megaMenuAbierto)}
            >
              Categorías <span>⌄</span>
            </button>

            {megaMenuAbierto && (
              <div className="mega-menu">
                <div className="mega-menu-column">
                  <h3>Productos</h3>
                  <Link to="/products" onClick={cerrarMenus}>
                    Todos los productos
                  </Link>
                  <Link to="/products?tipo=individual" onClick={cerrarMenus}>
                    Chocolates individuales
                  </Link>
                  <Link to="/products?tipo=box" onClick={cerrarMenus}>
                    Cajas coleccionables
                  </Link>
                </div>

                <div className="mega-menu-column">
                  <h3>Universos gamer</h3>
                  <Link to="/products?categoria=Pokemon" onClick={cerrarMenus}>
                    Pokémon
                  </Link>
                  <Link to="/products?categoria=Minecraft" onClick={cerrarMenus}>
                    Minecraft
                  </Link>
                  <Link to="/products?categoria=Zelda" onClick={cerrarMenus}>
                    Zelda
                  </Link>
                  <Link to="/products?categoria=Nintendo" onClick={cerrarMenus}>
                    Nintendo
                  </Link>
                </div>

                <div className="mega-menu-feature">
                  <span className="mega-menu-label">GAMEBITES</span>
                  <h3>Tu universo gamer, en chocolate</h3>
                  <p>Descubre figuras, bombones y cajas coleccionables.</p>
                  <Link to="/products" onClick={cerrarMenus}>
                    Explorar catálogo →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/promociones" onClick={cerrarMenus}>
            Promociones
          </Link>

          <Link to="/contacto" onClick={cerrarMenus}>
            Contacto
          </Link>
        </nav>

        <div className="header-actions">
          <Link to="/products" className="header-search" aria-label="Ver productos">
            Buscar
          </Link>
          <Link to="/login" className="header-account">
            Mi cuenta
          </Link>
          <Link to="/carrito" className="header-cart">
            Carrito <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
