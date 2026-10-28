import { NextResponse } from "next/server";

function escaparHtml(texto: string) {
  return texto.replace(/[&<>"']/g, (caracter) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[caracter]!);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const remitente = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !remitente) return NextResponse.json({ error: "Correo no configurado" }, { status: 503 });

  try {
    const { nombre, email, mensaje } = await request.json();
    if (typeof nombre !== "string" || typeof email !== "string" || typeof mensaje !== "string" ||
        !nombre.trim() || nombre.length > 100 || email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !mensaje.trim() || mensaje.length > 5000) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const nombreSeguro = escaparHtml(nombre.trim());
    const emailSeguro = escaparHtml(email.trim());
    const mensajeSeguro = escaparHtml(mensaje.trim()).replace(/\r?\n/g, "<br>");
    const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:24px 12px;background:#f4eee0;color:#49301e;font-family:Arial,sans-serif;">
  <table role="presentation" style="width:100%;max-width:600px;margin:0 auto;border-collapse:collapse;">
    <tr><td style="background:#6b4a30;color:#fffaf0;padding:28px 32px;border-radius:16px 16px 0 0;">
      <p style="margin:0 0 12px;color:#f3c265;font-size:13px;font-weight:bold;letter-spacing:2px;">CALCO ARGENTINA</p>
      <h1 style="margin:0;font-size:26px;line-height:1.25;">Nueva consulta desde la web</h1>
    </td></tr>
    <tr><td style="background:#fffaf0;padding:32px;border:1px solid #e2d6c2;border-top:0;border-radius:0 0 16px 16px;">
      <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">Recibiste un mensaje a través del formulario de contacto.</p>
      <p style="margin:0 0 8px;font-size:13px;font-weight:bold;color:#806449;">NOMBRE</p>
      <p style="margin:0 0 20px;font-size:16px;">${nombreSeguro}</p>
      <p style="margin:0 0 8px;font-size:13px;font-weight:bold;color:#806449;">CORREO ELECTRÓNICO</p>
      <p style="margin:0 0 24px;font-size:16px;">${emailSeguro}</p>
      <p style="margin:0 0 8px;font-size:13px;font-weight:bold;color:#806449;">CONSULTA</p>
      <div style="padding:18px;background:#f4eee0;border-left:4px solid #e2a83d;border-radius:4px;font-size:16px;line-height:1.6;overflow-wrap:anywhere;">${mensajeSeguro}</div>
      <p style="margin:24px 0 0;color:#806449;font-size:14px;line-height:1.5;">Para contestar, respondé directamente a este correo.</p>
    </td></tr>
  </table>
</body></html>`;

    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: remitente,
        to: ["bluckbery57@gmail.com"],
        reply_to: email,
        subject: "Nueva consulta desde el sitio de Calco",
        text: `Nombre: ${nombre.trim()}\nCorreo: ${email}\n\nConsulta:\n${mensaje.trim()}`,
        html,
      }),
    });
    if (!respuesta.ok) return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo enviar" }, { status: 500 });
  }
}

