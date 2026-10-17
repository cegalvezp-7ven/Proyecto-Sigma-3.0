import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Bienvenido ${email}!`);
    navigate('/');
  };

  return (
    <main className="login-page">
      <section className="login-hero">
        <span className="login-eyebrow">MI CUENTA</span>
        <h1>Acceso de Usuario</h1>
        <p>
          Inicia sesión como Cliente para comprar o como Administrador para
          gestionar la tienda.
        </p>
      </section>

      <section className="login-content">
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="login-email">Correo electrónico</label>
              <input
                type="email"
                id="login-email"
                required
                placeholder="cliente@gamebites.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Contraseña</label>
              <input
                type="password"
                id="login-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-submit-btn">
              Ingresar a GameBites
            </button>
          </form>


        </div>
      </section>
    </main>
  );
}

export default Login;