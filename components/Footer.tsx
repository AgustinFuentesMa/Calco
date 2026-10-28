export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <h4>Calco Argentina</h4>
          <p>
            Parque Industrial Tucumán
            <br />
            Av. de Circunvalación Nro. 1897
            <br />
            (Ruta Nac. 9 – km 1294), Manzana D – Lote 1
            <br />
            San Miguel de Tucumán
          </p>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href="tel:+543815435578">+54 381 543-5578</a>
          <a href="tel:+543816658473">+54 381 665-8473</a>
        </div>
        <div>
          <h4>Navegación</h4>
          <a href="#inicio">Home</a>
          <a href="#quienes">Quiénes somos</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <span>© 2026 Calco Argentina</span>
        <div className="foot-socials">
          <a href="https://www.facebook.com/CalcoArgentina/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
              <path d="M15 8h-2a2 2 0 0 0-2 2v3H9v3h2v6h3v-6h2l1-3h-3v-2a1 1 0 0 1 1-1h2V8Z" />
            </svg>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6}>
              <rect x="3" y="6" width="18" height="12" rx="3" />
              <path d="M10 9.5 15 12l-5 2.5v-5Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
