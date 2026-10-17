import { Link } from 'react-router-dom';
import '../../styles/molecules/FooterColumn.css';

export const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link, index) => 
        link.isExternal ? (
          <a key={index} href={link.to}>{link.label}</a>
        ) : (
          <Link key={index} to={link.to}>{link.label}</Link>
        )
      )}
    </div>
  );
};