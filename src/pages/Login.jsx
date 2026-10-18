import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/pages/Login.css';

function Login() {
  const navigate = useNavigate();
  const [esRegistro, setEsRegistro] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    // Validación de contraseña (> 6 caracteres)
    if (password.length < 6) {
      setErrorMsg('La contraseña debe tener más de 6 dígitos.');
      return;
    }
    if (esRegistro) {
      //registro de nuevo cliente
      const usuariosGuardados = localStorage.getItem('gamebites_registered_users');
      const listaUsuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
      //Verificar repetidos
      const existe = listaUsuarios.some((u) => u.email.toLowerCase() === email.toLowerCase());
      if (existe) {
        setErrorMsg('El correo ya se encuentra registrado. Intenta iniciar sesión.');
        return;
      }
      //Crear
      const nuevoUsuario = {
        name: nombre || email.split('@')[0],
        email: email.toLowerCase(),
        password: password,
        role: 'client',
      };

      listaUsuarios.push(nuevoUsuario);
      localStorage.setItem('gamebites_registered_users', JSON.stringify(listaUsuarios));
      //Inicia automáticamente
      const sessionUser = { email: nuevoUsuario.email, name: nuevoUsuario.name, role: 'client' };
      localStorage.setItem('gamebites_user', JSON.stringify(sessionUser));
      window.dispatchEvent(new Event('userUpdated'));

      alert(`¡Cuenta creada con éxito! Bienvenido, ${sessionUser.name}.`);
      navigate('/carrito');

    } else {
      //Verificación de Administrador
      if (
        email.toLowerCase() === 'admin@gamebites.cl' &&
        (password === 'admin123' || password === 'admin')
      ) {
        const adminSession = { email, name: 'Administrador', role: 'admin' };
        localStorage.setItem('gamebites_user', JSON.stringify(adminSession));
        window.dispatchEvent(new Event('userUpdated'));
        alert('¡Bienvenido al Panel de Administración!');
        navigate('/admin');
        return;
      }
      //Verificación de Cliente
      const usuariosGuardados = localStorage.getItem('gamebites_registered_users');
      const listaUsuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

      const usuarioValido = listaUsuarios.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );

      if (usuarioValido) {
        const clientSession = { email: usuarioValido.email, name: usuarioValido.name, role: 'client' };
        localStorage.setItem('gamebites_user', JSON.stringify(clientSession));
        window.dispatchEvent(new Event('userUpdated'));
        alert(`¡Bienvenido de nuevo, ${clientSession.name}!`);
        navigate('/carrito');
      } else {
        setErrorMsg('Correo o contraseña incorrectos.');
      }
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-tabs">
          <button
            type="button"
            className={`tab-btn ${!esRegistro ? 'active' : ''}`}
            onClick={() => { setEsRegistro(false); setErrorMsg(''); }}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            className={`tab-btn ${esRegistro ? 'active' : ''}`}
            onClick={() => { setEsRegistro(true); setErrorMsg(''); }}
          >
            Crear Cuenta
          </button>
        </div>

        <h2>{esRegistro ? 'Regístrate como Cliente' : 'Acceso Gamer'}</h2>
        <p className="login-subtitle">
          {esRegistro
            ? 'Crea tu cuenta para realizar pedidos y guardar tus compras.'
            : 'Ingresa con tus credenciales para continuar.'}
        </p>

        {errorMsg && <div className="login-error">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          {esRegistro && (
            <div className="form-group">
              <label htmlFor="user-name">Nombre de usuario:</label>
              <input
                type="text"
                id="user-name"
                required
                placeholder="Ej: ProGamer99"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="user-email">Correo Electrónico:</label>
            <input
              type="email"
              id="user-email"
              required
              placeholder="cliente@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="user-password">Contraseña (más de 6 dígitos):</label>
            <input
              type="password"
              id="user-password"
              required
              minLength={6}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-submit-btn">
            {esRegistro ? 'Crear mi Cuenta' : 'Entrar'}
          </button>
        </form>

        <div className="login-footer">
          <Link to="/products">← Volver al catálogo</Link>
        </div>
      </div>
    </main>
  );
}

export default Login;