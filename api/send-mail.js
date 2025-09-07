import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: 'andreatsilva@proton.me',
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
