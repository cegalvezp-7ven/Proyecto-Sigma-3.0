import Logo from '../atoms/Logo';
import { FooterColumn } from '../molecules/FooterColumn';
import '../../styles/organisms/Footer.css';

function Footer() {
  const productLinks = [
    { label: 'Ver catálogo', to: '/products' },
    { label: 'Chocolates individuales', to: '/products?tipo=individual' },
    { label: 'Cajas coleccionables', to: '/products?tipo=box' },
  ];

  const companyLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Promociones', to: '/promociones' },
  ];

  const supportLinks = [
    { label: 'Contacto', to: '/contacto' },
    { label: 'Correo electrónico', to: 'mailto:contacto@gamebites.cl', isExternal: true },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Logo />

          <p>
            Tu universo gamer, convertido en chocolates
            y experiencias coleccionables.
          </p>

          <span className="footer-address">
            Av. Tobalaba 720 / Santiago
          </span>
        </div>

        <FooterColumn title="Productos" links={productLinks} />
        <FooterColumn title="GameBites" links={companyLinks} />
        <FooterColumn title="Atención al cliente" links={supportLinks} />
      </div>

      <div className="footer-bottom">
        <p>© 2026 GameBites. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;