import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json(); // Récupère les données du formulaire
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['atnxn68@gmail.com'], // Votre adresse e-mail de destination
      subject: subject, // Utilise le sujet du formulaire
      html: `
        <div>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p>${message}</p>
        </div>
      `, // Utilise le message du formulaire
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message || 'An error occurred' });
  }
}
