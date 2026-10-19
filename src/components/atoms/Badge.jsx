import '../../styles/atoms/Badge.css';

function Badge({ children, variant = 'purple', className = '' }) {
  return (
    <span className={`badge-atom badge-${variant} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;