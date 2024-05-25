import React, { useRef, useState, FormEvent } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"



const ProfileHelpForm = ({ formRef, sendEmail }: { formRef: React.RefObject<HTMLFormElement>, sendEmail: (e: FormEvent) => void }) => (
  <div className="flex flex-col items-center justify-center bg-black bg-opacity-95 p-7 rounded-xl w-[700px] ">
    <form ref={formRef} onSubmit={sendEmail} className="w-full">
      <div className="flex flex-row w-full items-center justify-between gap-4 pb-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="user_name">Nombre</Label>
          <Input type="text" id="user_name" name="user_name" placeholder="Nombre" required />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="user_email">Correo</Label>
          <Input type="email" id="user_email" name="user_email" placeholder="Correo Electrónico" required />
        </div>
      </div>

      <div className="grid w-full gap-1.5 pb-4">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" name="message" placeholder="Escribenos aquí tu mensaje." required />
      </div>

      <Button type="submit" className="px-10">Enviar</Button>
    </form>
  </div>
);

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
    <div className="py-20 px-4">
      <ProfileHelpForm formRef={form} sendEmail={sendEmail} />
      {message && <p className="text-green-500 mt-4">{message}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
