
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/molecules/ProductCard';
import '../styles/pages/Home.css';

function Home() {
  const destacados = products.slice(0, 4);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-badge">EDICIÓN COLECCIONISTA</span>

          <h1>
            Tus videojuegos favoritos,
            <span> hechos chocolate.</span>
          </h1>

          <p>
            Alta repostería artesanal inspirada en los mundos,
            personajes e historias más icónicos de los videojuegos.
          </p>

          <Link to="/products" className="home-cta">
            Ver catálogo completo →
          </Link>
        </div>

        <div className="home-hero-decoration" aria-hidden="true">
          <span>G</span>
          <span>B</span>
        </div>
      </section>

      <section className="home-featured">
        <div className="home-section-heading">
          <div>
            <span className="home-section-label">SELECCIÓN ESPECIAL</span>
            <h2>Productos destacados</h2>
            <p>Descubre los favoritos de nuestro universo gamer.</p>
          </div>

          <Link to="/products" className="home-view-all">
            Ver todos →
          </Link>
        </div>

        <div className="products-grid">
          {destacados.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="home-collections">
        <div>
          <span className="home-section-label">PARA COLECCIONAR</span>
          <h2>Más que chocolate. Una experiencia gamer.</h2>
          <p>
            Explora nuestras cajas coleccionables, ediciones especiales
            y creaciones inspiradas en tus juegos favoritos.
          </p>
        </div>

        <Link to="/products?tipo=box" className="home-cta">
          Descubrir colecciones →
        </Link>
      </section>
    </main>
  );
}

export default Home;
