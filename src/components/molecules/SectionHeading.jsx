import { Link } from 'react-router-dom';
import '../../styles/molecules/SectionHeading.css';

function SectionHeading({ eyebrow, title, subtitle, actionTo, actionText }) {
  return (
    <div className="section-heading">
      <div className="section-heading-text">
        {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {actionTo && actionText && (
        <Link to={actionTo} className="section-heading-action">
          {actionText}
        </Link>
      )}
    </div>
  );
}

export default SectionHeading;