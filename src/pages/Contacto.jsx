import { useState } from 'react';
import '../styles/pages/Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-eyebrow">SERVICIO AL CLIENTE</span>
        <h1>Contacto</h1>
        <p>¿Tienes dudas? Escríbenos y te responderemos a la brevedad.</p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Nombre</label>
              <input
                type="text"
                id="contact-name"
                required
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Correo electrónico</label>
              <input
                type="email"
                id="contact-email"
                required
                placeholder="tu@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                required
                rows="4"
                placeholder="Escribe tu consulta..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Enviar mensaje
            </button>
          </form>

          {enviado && (
            <div className="contact-success-msg">
              ¡Mensaje enviado con éxito! Te responderemos a la brevedad.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contacto;