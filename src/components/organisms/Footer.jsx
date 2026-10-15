
import { Link } from 'react-router-dom';
import '../../styles/organisms/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            GAME<span>BITES</span>.
          </Link>

          <p>
            Tu universo gamer, convertido en chocolates
            y experiencias coleccionables.
          </p>

          <span className="footer-address">
            Av. Tobalaba 720 / Santiago
          </span>
        </div>

        <div className="footer-column">
          <h3>Productos</h3>
          <Link to="/products">Ver catálogo</Link>
          <Link to="/products?tipo=individual">
            Chocolates individuales
          </Link>
          <Link to="/products?tipo=box">
            Cajas coleccionables
          </Link>
        </div>

        <div className="footer-column">
          <h3>GameBites</h3>
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/promociones">Promociones</Link>
        </div>

        <div className="footer-column">
          <h3>Atención al cliente</h3>
          <Link to="/contacto">Contacto</Link>
          <a href="mailto:contacto@gamebites.cl">
            Correo electrónico
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 GameBites. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
