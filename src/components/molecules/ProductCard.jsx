import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import Price from '../atoms/Price';
import '../../styles/molecules/ProductCard.css';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products?id=${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <img src={product.image} alt={product.name} />

          <div className="product-card-badge-container">
            <Badge variant="purple">{product.category}</Badge>
          </div>
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
            <Price amount={product.price} />
            <span>Ver detalle →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;