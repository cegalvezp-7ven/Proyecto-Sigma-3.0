import { Link } from 'react-router-dom';
import '../../styles/molecules/NavColumn.css';

function NavColumn({ title, links = [], onItemClick }) {
  return (
    <div className="nav-column">
      <h3>{title}</h3>
      {links.map((link, index) => (
        <Link key={index} to={link.to} onClick={onItemClick}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default NavColumn;