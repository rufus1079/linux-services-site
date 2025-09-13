import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Configure transporter (example with Gmail SMTP — replace with your dad’s server or provider)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER, // your dad’s email
        pass: process.env.MAIL_PASS, // app password or SMTP password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Linux Services Site" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO, // where your dad receives inquiries
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

