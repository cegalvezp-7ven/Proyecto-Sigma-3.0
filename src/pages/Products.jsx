
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/molecules/ProductCard';
import '../styles/pages/Products.css';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const tipo = searchParams.get('tipo') || 'todos';
  const categoria = searchParams.get('categoria') || 'todos';

  const productosFiltrados = useMemo(() => {
    return products.filter((product) => {
      const coincideTipo =
        tipo === 'todos' || product.type === tipo;

      const coincideCategoria =
        categoria === 'todos' ||
        product.category.toLowerCase() === categoria.toLowerCase();

      return coincideTipo && coincideCategoria;
    });
  }, [tipo, categoria]);

  const cambiarTipo = (nuevoTipo) => {
    const nuevosParametros = new URLSearchParams(searchParams);

    if (nuevoTipo === 'todos') {
      nuevosParametros.delete('tipo');
    } else {
      nuevosParametros.set('tipo', nuevoTipo);
    }

    setSearchParams(nuevosParametros);
  };

  return (
    <main className="products-page">
      <section className="products-hero">
        <span className="products-eyebrow">COLECCIÓN GAMEBITES</span>
        <h1>Nuestro catálogo</h1>
        <p>
          Encuentra chocolates artesanales inspirados
          en tus universos gamer favoritos.
        </p>
      </section>

      <section className="products-catalog">
        <div className="products-heading">
          <div>
            <h2>Explora los productos</h2>
            <p>{productosFiltrados.length} productos encontrados</p>
          </div>

          <label className="product-filter">
            Tipo de producto
            <select
              value={tipo}
              onChange={(event) => cambiarTipo(event.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="individual">Individuales</option>
              <option value="box">Cajas coleccionables</option>
            </select>
          </label>
        </div>

        <div className="category-filters">
          <button
            className={categoria === 'todos' ? 'selected' : ''}
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.delete('categoria');
              setSearchParams(params);
            }}
          >
            Todas las categorías
          </button>

          {['Pokémon', 'Minecraft', 'Zelda', 'Nintendo', 'Fortnite'].map(
            (nombre) => (
              <button
                key={nombre}
                className={
                  categoria.toLowerCase() === nombre.toLowerCase()
                    ? 'selected'
                    : ''
                }
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  params.set('categoria', nombre);
                  setSearchParams(params);
                }}
              >
                {nombre}
              </button>
            ),
          )}
        </div>

        {productosFiltrados.length > 0 ? (
          <div className="products-grid">
            {productosFiltrados.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="products-empty">
            No encontramos productos con esos filtros.
          </p>
        )}
      </section>
    </main>
  );
}

export default Products;
