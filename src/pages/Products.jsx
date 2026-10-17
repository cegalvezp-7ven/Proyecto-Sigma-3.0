import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../data/products';
import SectionHeading from '../components/molecules/SectionHeading';
import ProductGrid from '../components/organisms/ProductGrid';
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

  const cambiarCategoria = (nuevaCategoria) => {
    const nuevosParametros = new URLSearchParams(searchParams);

    if (nuevaCategoria === 'todos') {
      nuevosParametros.delete('categoria');
    } else {
      nuevosParametros.set('categoria', nuevaCategoria);
    }

    setSearchParams(nuevosParametros);
  };

  const categoriasDisponibles = ['Pokémon', 'Minecraft', 'Zelda', 'Nintendo', 'Fortnite'];

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
        <div className="products-heading-container">
          <SectionHeading
            title="Explora los productos"
            subtitle={`${productosFiltrados.length} productos encontrados`}
          />

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
            type="button"
            className={categoria === 'todos' ? 'selected' : ''}
            onClick={() => cambiarCategoria('todos')}
          >
            Todas las categorías
          </button>

          {categoriasDisponibles.map((nombre) => (
            <button
              key={nombre}
              type="button"
              className={
                categoria.toLowerCase() === nombre.toLowerCase()
                  ? 'selected'
                  : ''
              }
              onClick={() => cambiarCategoria(nombre)}
            >
              {nombre}
            </button>
          ))}
        </div>

        <ProductGrid
          products={productosFiltrados}
          emptyMessage="No encontramos productos con esos filtros."
        />
      </section>
    </main>
  );
}

export default Products;