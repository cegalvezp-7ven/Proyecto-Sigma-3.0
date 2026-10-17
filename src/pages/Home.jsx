import { Link } from 'react-router-dom';
import products from '../data/products';
import Hero from '../components/organisms/Hero';
import SectionHeading from '../components/molecules/SectionHeading';
import ProductGrid from '../components/organisms/ProductGrid';
import '../styles/pages/Home.css';

function Home() {
  const destacados = products.slice(0, 4);

  return (
    <main className="home-page">
      <Hero />

      <section className="home-featured">
        <SectionHeading
          eyebrow="SELECCIÓN ESPECIAL"
          title="Productos destacados"
          subtitle="Descubre los favoritos de nuestro universo gamer."
          actionTo="/products"
          actionText="Ver todos →"
        />

        <ProductGrid products={destacados} />
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