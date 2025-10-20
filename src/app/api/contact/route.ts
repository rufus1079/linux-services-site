// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as {
      name: string;
      email: string;
      message: string;
    };

    const transporter: Transporter = nodemailer.createTransport({
      host: "localhost", // your dad’s mail server
      port: 25,
      secure: false,
      tls: { rejectUnauthorized: false },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Linux Services Site" <no-reply@linuxservices.local>`,
      to: process.env.MAIL_TO || "root@localhost",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred";
    console.error("❌ Email sending error:", message);

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}


