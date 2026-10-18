import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import '../../styles/organisms/Hero.css';

function Hero() {
  return (
    <section className="hero-organism">
      <div className="hero-content">
        <Badge variant="dark" className="hero-badge">
          EDICIÓN COLECCIONISTA
        </Badge>

        <h1>
          Tus videojuegos favoritos,
          <span> hechos chocolate.</span>
        </h1>

        <p>
          Alta repostería artesanal inspirada en los mundos,
          personajes e historias más icónicos de los videojuegos.
        </p>

        <Link to="/products" className="hero-cta">
          Ver catálogo completo →
        </Link>
      </div>

      <div className="hero-decoration" aria-hidden="true">
        <span>G</span>
        <span>B</span>
      </div>
    </section>
  );
}

export default Hero;