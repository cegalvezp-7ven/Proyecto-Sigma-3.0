import '../../styles/atoms/Price.css';

// Función auxiliar directamente dentro del átomo
const formatCLP = (amount) => {
  return (
    amount?.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    }) || '$0'
  );
};

function Price({ amount, className = '' }) {
  return (
    <strong className={`price-atom ${className}`}>
      {formatCLP(amount)}
    </strong>
  );
}

export default Price;