import ProductCard from '../molecules/ProductCard';
import '../../styles/organisms/ProductGrid.css';

function ProductGrid({ products = [], emptyMessage = 'No se encontraron productos.' }) {
  if (products.length === 0) {
    return <p className="products-grid-empty">{emptyMessage}</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;