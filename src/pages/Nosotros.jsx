import '../styles/pages/Nosotros.css';

function Nosotros() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="about-eyebrow">NUESTRA HISTORIA</span>
        <h1>Sobre GameBites</h1>
        <p>Conoce la historia detrás de nuestro proyecto.</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <p>
            Somos tres estudiantes que llegaron a Full Stack 2 con cero
            conocimientos previos y una sola meta clara: pasar el ramo. ¿Cómo?
            La verdad no sabemos cómo llegamos hasta acá, pero somos sinceros y
            eso es lo importante. La idea de GameBites nació gracias al profe
            Byron. y si ya arreglamos el error en el nombre...
          </p>
        </div>
      </section>
    </main>
  );
}

export default Nosotros;