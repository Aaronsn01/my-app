import React, { useRef, useState, FormEvent } from 'react';
import { Button } from './button';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const data = {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        message: formData.get('message') as string,
      };

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setMessage('Mensaje enviado con éxito');
          setError(null);
          form.current.reset();
        } else {
          const errorData = await response.json();
          setError(`Hubo un error al enviar el mensaje: ${errorData.error}`);
          setMessage(null);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(`Hubo un error al enviar el mensaje: ${error.message}`);
        } else {
          setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        }
        setMessage(null);
      }
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-4 text-shadow">CONTACT US</h2>
      <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="w-full px-4 py-2 border text-black shadow-md"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full px-4 py-2 border text-black shadow-md"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full px-4 py-2 border h-32 text-black shadow-md"
          required
        ></textarea>
        <Button type="submit" className="text-white rounded-md shadow-md">
          SEND
        </Button>
      </form>
      {message && <p className="text-green-500 mt-4">{message}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
