/*Es la extension morada que sale en el nav, la morada*/
import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import '../../styles/molecules/NavFeature.css';

function NavFeature({
  badgeText = 'GAMEBITES',
  title,
  description,
  linkTo,
  linkLabel,
  onItemClick,
}) {
  return (
    <div className="nav-feature">
      <Badge variant="outline" className="nav-feature-badge">
        {badgeText}
      </Badge>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo} onClick={onItemClick}>
        {linkLabel}
      </Link>
    </div>
  );
}

export default NavFeature;