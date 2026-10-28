"use client";

import { useState, type FormEvent } from "react";

const telefonos = [
  { numero: "+54 381 543-5578", whatsapp: "5493815435578" },
  { numero: "+54 381 665-8473", whatsapp: "5493816658473" },
];
const correo = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.91 9.91 0 0 0-8.58 14.88L2 22l5.26-1.38A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31A8.13 8.13 0 1 1 12.04 20.1Zm4.46-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21a7.4 7.4 0 0 1-1.36-1.69c-.14-.24-.02-.37.1-.49.1-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.33.98 2.49c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.36.5.57.18 1.1.15 1.51.09.46-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const correoDisponible = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  function prepararCorreo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!correoDisponible) return;
    const cuerpo = `Hola, soy ${nombre.trim()}.\n\n${mensaje.trim()}`;
    const params = new URLSearchParams({ subject: asunto.trim(), body: cuerpo });
    window.location.href = `mailto:${correo}?${params.toString()}`;
  }

  return (
    <section id="contacto" className="contacto" aria-labelledby="contacto-titulo">
      <div className="wrap">
        <div className="contacto-heading">
          <span className="contacto-kicker">Estamos para ayudarte</span>
          <h2 id="contacto-titulo">Hablemos.</h2>
          <p>¿Tenés una consulta sobre nuestros productos? Elegí cómo comunicarte con nosotros.</p>
        </div>
        <div className="contacto-grid">
          <div className="contacto-whatsapp">
            <span className="contacto-label">01 / WHATSAPP</span>
            <h3>Una charla directa</h3>
            <p>Escribinos por WhatsApp al número que prefieras.</p>
            <div className="contacto-numeros">
              {telefonos.map(({ numero, whatsapp }) => (
                <a key={whatsapp} className="contacto-numero" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hola, quisiera hacer una consulta sobre los productos de Calco.")}`} target="_blank" rel="noopener noreferrer" aria-label={`Escribir por WhatsApp al ${numero} (abre una pestaña nueva)`}>
                  <span className="contacto-whatsapp-icon"><WhatsAppIcon /></span>
                  <span>{numero}</span><span className="contacto-flecha" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="contacto-ubicacion">
              <span className="contacto-label">DÓNDE ESTAMOS</span>
              <p>Parque Industrial Tucumán<br />Av. de Circunvalación Nro. 1897<br />(Ruta Nac. 9 – km 1294), Manzana D – Lote 1<br />San Miguel de Tucumán</p>
            </div>
          </div>
          <div className="contacto-correo">
            <span className="contacto-label">02 / CORREO ELECTRÓNICO</span>
            <h3>Contanos tu consulta</h3>
            <p>Completá los datos y abriremos tu aplicación de correo con el mensaje listo para enviar.</p>
            <form onSubmit={prepararCorreo}>
              <label htmlFor="contacto-nombre">Nombre</label>
              <input id="contacto-nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} autoComplete="name" maxLength={100} required />
              <label htmlFor="contacto-asunto">Asunto</label>
              <input id="contacto-asunto" value={asunto} onChange={(event) => setAsunto(event.target.value)} maxLength={150} required />
              <label htmlFor="contacto-mensaje">Mensaje</label>
              <textarea id="contacto-mensaje" value={mensaje} onChange={(event) => setMensaje(event.target.value)} rows={5} maxLength={3000} required />
              <button type="submit" disabled={!correoDisponible}>Preparar correo <span aria-hidden="true">↗</span></button>
              {!correoDisponible && <p className="contacto-aviso">El contacto por correo no está disponible por el momento. Podés escribirnos por WhatsApp.</p>}
              {correoDisponible && <p className="contacto-ayuda">Revisá y enviá el mensaje desde tu aplicación de correo.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
