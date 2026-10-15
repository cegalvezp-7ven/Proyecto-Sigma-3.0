
import { Link } from 'react-router-dom';
import '../../styles/molecules/ProductCard.css';

function ProductCard({ product }) {
  const precio = product.price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  });

  return (
    <article className="product-card">
      <Link
        to={`/products?id=${product.id}`}
        className="product-card-link"
      >
        <div className="product-card-image">
          <img src={product.image} alt={product.name} />

          <span className="product-card-badge">
            {product.category}
          </span>
        </div>

        <div className="product-card-content">
          <span className="product-card-type">
            {product.type === 'box'
              ? 'Caja coleccionable'
              : 'Chocolate individual'}
          </span>

          <h3>{product.name}</h3>

          <p>{product.description}</p>

          <div className="product-card-footer">
            <strong>{precio}</strong>
            <span>Ver detalle →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
