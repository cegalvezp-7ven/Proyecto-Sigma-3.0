import '../../styles/atoms/Logo.css';

function Logo({ size = 'medium' }) {
  return (
    <span className={`brand-logo brand-logo--${size}`}>
      Game<span className="brand-logo-accent">Bits</span>
    </span>
  );
}

export default Logo;