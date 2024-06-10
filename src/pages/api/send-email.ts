import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { user_name, user_email, message } = req.body;

    try {
      await resend.emails.send({
        from: 'crossfitlajungla@resend.dev',
        to: 'info@lajunglacrossfit.es',
        subject: `Nuevo mensaje de: ${user_name}`,
        html: `<p>Nombre: ${user_name}</p><p>Email: ${user_email}</p><p>Mensaje: ${message}</p>`,
      });
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
