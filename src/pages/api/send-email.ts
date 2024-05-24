import type { NextApiRequest, NextApiResponse } from 'next';
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC as string,
  process.env.MJ_APIKEY_PRIVATE as string,
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { from_name, from_email, message } = req.body;

    try {
      const request = await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: process.env.MJ_FROM_EMAIL,
              Name: process.env.MJ_FROM_NAME,
            },
            To: [
              {
                Email: process.env.MJ_TO_EMAIL,
                Name: 'La Jungla Crossfit',
              },
            ],
            Subject: `New message from ${from_name}`,
            TextPart: `Hello,

            You have received a new message from the contact form on your website:

            Name: ${from_name}
            Email: ${from_email}
            Message: 
            ${message}

            Best regards,
            La Jungla Crossfit Team`,
          },
        ],
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
