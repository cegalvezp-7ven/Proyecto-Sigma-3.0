import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import NavColumn from '../molecules/NavColumn';
import NavFeature from '../molecules/NavFeature';
import '../../styles/organisms/Navbar.css';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [menuCategoriasAbierto, setMenuCategoriasAbierto] = useState(false);

  const cerrarMenus = () => {
    setMenuAbierto(false);
    setMenuCategoriasAbierto(false);
  };

  const productosLinks = [
    { label: 'Todos los productos', to: '/products' },
    { label: 'Chocolates individuales', to: '/products?tipo=individual' },
    { label: 'Cajas coleccionables', to: '/products?tipo=box' },
  ];

  const universosLinks = [
    { label: 'Pokémon', to: '/products?categoria=Pokémon' },
    { label: 'Minecraft', to: '/products?categoria=Minecraft' },
    { label: 'Zelda', to: '/products?categoria=Zelda' },
    { label: 'Nintendo', to: '/products?categoria=Nintendo' },
  ];

  return (
    <header className="site-header">
      <div className="header-main">
        <Link to="/" onClick={cerrarMenus}>
          <Logo />
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
            onMouseEnter={() => setMenuCategoriasAbierto(true)}
            onMouseLeave={() => setMenuCategoriasAbierto(false)}
          >
            <button
              type="button"
              className="nav-dropdown-button"
              aria-expanded={menuCategoriasAbierto}
              onClick={() => setMenuCategoriasAbierto(!menuCategoriasAbierto)}
            >
              Categorías <span>⌄</span>
            </button>

            {menuCategoriasAbierto && (
              <div className="mega-menu">
                <NavColumn
                  title="Productos"
                  links={productosLinks}
                  onItemClick={cerrarMenus}
                />

                <NavColumn
                  title="Universos gamer"
                  links={universosLinks}
                  onItemClick={cerrarMenus}
                />

                <NavFeature
                  badgeText="GAMEBITES"
                  title="Tu universo gamer, en chocolate"
                  description="Descubre figuras, bombones y cajas coleccionables."
                  linkTo="/products"
                  linkLabel="Explorar catálogo →"
                  onItemClick={cerrarMenus}
                />
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