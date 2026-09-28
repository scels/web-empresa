export default function ContactoPage() {
  return (
    <div className="page-shell contact-page">
      <section className="page-intro">
        <p className="eyebrow">Hablemos</p>
        <h1>¿Buscas una pieza especial?</h1>
        <p>
          Si quieres preguntar por una pieza, un encargo o simplemente saludar,
          estaré encantada de leerte.
        </p>
      </section>
      <section className="contact-panel">
        <div className="contact-panel__number">01</div>
        <div>
          <p className="eyebrow">Mientras preparo esta tienda</p>
          <h2>Encuéntrame en la web actual.</h2>
          <p>
            Por ahora, las consultas siguen en el espacio donde nació Libélula.
          </p>
          <a
            className="button button--dark"
            href="https://tallerlibelula.es/"
            rel="noreferrer"
            target="_blank"
          >
            Visitar El Taller Libélula <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}

