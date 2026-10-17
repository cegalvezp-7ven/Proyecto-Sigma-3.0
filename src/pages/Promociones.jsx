import { useMemo } from 'react';
import products from '../data/products';
import ProductGrid from '../components/organisms/ProductGrid';
import '../styles/pages/Promociones.css';

function Promociones() {
  const productosPromocionales = useMemo(() => {
    return products.filter((product) => product.type === 'box');
  }, []);

  return (
    <main className="promociones-page">
      <section className="promociones-hero">
        <span className="promociones-eyebrow">PACKS & CAJAS COLECCIONABLES</span>
        <h1>Boxes & Promociones Gamer</h1>
        <p>
          Packs exclusivos, combos para jugar en pareja y cajas sorpresa
          coleccionables.
        </p>
      </section>

      <section className="promociones-catalog">
        <ProductGrid
          products={productosPromocionales}
          emptyMessage="No hay promociones disponibles en este momento."
        />
      </section>
    </main>
  );
}

export default Promociones;