import { NextResponse } from "next/server";

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

    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: remitente,
        to: ["bluckbery57@gmail.com"],
        reply_to: email,
        subject: "Nueva consulta desde el sitio de Calco",
        text: `Nombre: ${nombre.trim()}\nCorreo: ${email}\n\nConsulta:\n${mensaje.trim()}`,
      }),
    });
    if (!respuesta.ok) return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo enviar" }, { status: 500 });
  }
}

