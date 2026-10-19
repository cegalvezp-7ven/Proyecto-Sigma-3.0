import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import Price from '../atoms/Price';
import '../../styles/molecules/ProductCard.css';

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <article className="product-card">
        <Badge variant="dark" className="product-card-badge">
          {product.category}
        </Badge>

        <div className="product-card-image">
          <img src={`${product.image}`} alt={product.name} />
        </div>

        <div className="product-card-content">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-card-footer">
            <Price amount={product.price} />
            <span className="product-card-btn">Ver Detalle</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;