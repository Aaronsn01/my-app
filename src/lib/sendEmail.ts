// src/lib/sendEmail.ts
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY as string,
  process.env.MAILJET_SECRET_KEY as string
);

interface EmailData {
  user_name: string;
  user_email: string;
  message: string;
}

export const sendEmail = async (emailData: EmailData) => {
  try {
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'info@lajunglacrossfit.es',
            Name: 'La Jungla Crossfit',
          },
          To: [
            {
              Email: 'info@lajunglacrossfit.es',
              Name: 'La Jungla Crossfit',
            },
          ],
          Subject: `Nuevo mensaje de ${emailData.user_name}`,
          TextPart: `Nombre: ${emailData.user_name}\nEmail: ${emailData.user_email}\nMensaje: ${emailData.message}`,
          HTMLPart: `<h3>Nuevo mensaje de ${emailData.user_name}</h3>
                     <p><strong>Email:</strong> ${emailData.user_email}</p>
                     <p><strong>Mensaje:</strong> ${emailData.message}</p>`,
        },
      ],
    });

    return request.body;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Error enviando el email: ${err.message}`);
    } else {
      throw new Error('Error enviando el email: Error desconocido');
    }
  }
};
