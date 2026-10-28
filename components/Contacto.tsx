"use client";

import { useState, type FormEvent } from "react";

const telefonos = [
  { numero: "+54 381 543-5578", enlace: "5493815435578" },
  { numero: "+54 381 665-8473", enlace: "5493816658473" },
];

export default function Contacto() {
  const [estado, setEstado] = useState<"inicial" | "enviando" | "exito" | "error">("inicial");

  async function enviarConsulta(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const datos = new FormData(form);
    setEstado("enviando");
    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(datos)),
      });
      if (!respuesta.ok) throw new Error("No se pudo enviar");
      form.reset();
      setEstado("exito");
    } catch {
      setEstado("error");
    }
  }

  return (
    <section className="contacto" id="contacto" aria-labelledby="contacto-titulo">
      <div className="wrap contacto-grid">
        <div className="contacto-intro">
          <span className="mono contacto-eyebrow">Contacto</span>
          <h2 id="contacto-titulo">Hablemos de nuestros productos.</h2>
          <p>
            Si querés conocer más sobre nuestros productos o hacer una consulta,
            comunicate con nosotros.
          </p>
        </div>
        <div className="contacto-panel">
          <div>
            <h3>Escribinos por WhatsApp</h3>
            <p>Elegí un número para iniciar una conversación:</p>
            <div className="contacto-telefonos">
              {telefonos.map(({ numero, enlace }) => (
                <a key={enlace} className="contacto-telefono" href={`https://wa.me/${enlace}`} target="_blank" rel="noopener noreferrer" aria-label={`Escribir por WhatsApp al ${numero} (abre una nueva pestaña)`}>
                  <svg className="contacto-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.93 11.93 0 0 0 5.85 1.49h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.51-8.41ZM12.06 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.24-.37a9.9 9.9 0 0 1-1.52-5.29c0-5.46 4.44-9.9 9.89-9.9a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.45-4.45 9.87-9.91 9.87Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.73 2.02-1.43.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg> {numero}
                </a>
              ))}
            </div>
          </div>
          <div className="contacto-formulario">
            <h3>O envianos un correo</h3>
            <p>Dejanos tu consulta y te responderemos por correo electrónico.</p>
            <form onSubmit={enviarConsulta}>
              <label htmlFor="contacto-nombre">Nombre</label>
              <input id="contacto-nombre" name="nombre" autoComplete="name" required maxLength={100} />
              <label htmlFor="contacto-email">Correo electrónico</label>
              <input id="contacto-email" name="email" type="email" autoComplete="email" required maxLength={254} />
              <label htmlFor="contacto-mensaje">Tu consulta</label>
              <textarea id="contacto-mensaje" name="mensaje" rows={5} required maxLength={5000} />
              <button type="submit" disabled={estado === "enviando"}>{estado === "enviando" ? "Enviando…" : "Enviar consulta"}</button>
              <p className="contacto-estado" role="status" aria-live="polite">
                {estado === "exito" && "¡Gracias! Tu consulta fue enviada."}
                {estado === "error" && "No pudimos enviar tu consulta. Intentá de nuevo o escribinos por WhatsApp."}
              </p>
            </form>
          </div>
          <div className="contacto-direccion">
            <h3>Encontranos</h3>
            <address>
              Parque Industrial Tucumán<br />
              Av. de Circunvalación Nro. 1897<br />
              (Ruta Nac. 9 – km 1294), Manzana D – Lote 1<br />
              San Miguel de Tucumán
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

