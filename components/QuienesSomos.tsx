export default function QuienesSomos() {
  return (
    <section className="quienes" id="quienes">
      <div className="wrap">
        <div>
          <span className="mono" style={{ color: "var(--maize)", fontSize: 12 }}>
            Quiénes somos
          </span>
          <h2
            className="slab"
            style={{ fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 700, marginTop: 14 }}
          >
            Del campo al empaque, todo bajo un mismo techo.
          </h2>
          <p>
            Somos una empresa familiar, dedicada a la producción y comercialización de cereales, legumbres y oleaginosas, hace más de 80 años , donde día a día aplicamos la más alta tecnología en los cultivos que producimos en nuestros campos, los que se encuentran ubicados al Sur y Este de la Provincia de Salta. Una vez cosechados, nuestros granos son llevados a nuestra planta procesadora, donde son expuestos a rigurosos controles de purificación y calidad, logrando así, un producto Premium acorde a los mercados más competitivos del mundo.
          </p>
        </div>
        <div className="stat-box">
          <div className="num">Salta</div>
          <div className="cap">
            Nuestros campos se encuentran en el sur y este de la provincia.
          </div>
        </div>
      </div>
    </section>
  );
}

