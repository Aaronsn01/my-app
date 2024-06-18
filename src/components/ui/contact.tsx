"use client";
import React from "react";
import ShimmerButton from "../magicui/shimmer-button";

// Componente de formulario comentado para no perderlo
/*
import React, { useRef, useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../../components/ui/use-toast"; 

const ProfileHelpForm = ({
  formRef,
  sendEmail,
  emailMatchError,
}: {
  formRef: React.RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent) => void;
  emailMatchError: boolean;
}) => (
  <div className="flex flex-col items-center justify-center bg-black bg-opacity-95 p-7 rounded-xl w-full max-w-lg md:w-[700px]">
    <form ref={formRef} onSubmit={sendEmail} className="w-full">
      <div className="flex flex-col w-full gap-4 pb-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="user_name">Nombre</Label>
          <Input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Nombre"
            required
            className="text-black"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="user_email">Correo</Label>
          <Input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Correo Electrónico"
            required
            className="text-black"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="confirm_user_email">Confirmar Correo</Label>
          <Input
            type="email"
            id="confirm_user_email"
            name="confirm_user_email"
            placeholder="Confirma tu Correo Electrónico"
            required
            className="text-black"
          />
          {emailMatchError && (
            <span className="text-red-500 text-sm">
              Los correos electrónicos no coinciden.
            </span>
          )}
        </div>
      </div>

      <div className="grid w-full gap-1.5 pb-4">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Escribenos aquí tu mensaje."
          required
          className="text-black"
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <ShimmerButton>SEND</ShimmerButton>
      </div>
    </form>
  </div>
);
*/

export default function Contact() {
  // const form = useRef<HTMLFormElement>(null);
  // const { toast } = useToast(); 
  // const [emailMatchError, setEmailMatchError] = useState(false);

  // const sendEmail = async (e: FormEvent) => {
  //   e.preventDefault();

  //   if (form.current) {
  //     const formData = new FormData(form.current);
  //     const userEmail = formData.get("user_email") as string;
  //     const confirmUserEmail = formData.get("confirm_user_email") as string;

  //     if (userEmail !== confirmUserEmail) {
  //       setEmailMatchError(true);
  //       return;
  //     }

  //     setEmailMatchError(false);

  //     const data = {
  //       user_name: formData.get("user_name") as string,
  //       user_email: userEmail,
  //       message: formData.get("message") as string,
  //     };

  //     try {
  //       const response = await fetch("/api/send-email", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       if (response.ok) {
  //         toast({
  //           title: "Mensaje enviado con éxito",
  //           description: "Hemos recibido tu mensaje y te contactaremos pronto.",
  //           variant: "default",
  //         });
  //         form.current.reset();
  //       } else {
  //         const errorData = await response.json();
  //         toast({
  //           title: "Error al enviar el mensaje",
  //           description: errorData.error,
  //           variant: "destructive",
  //         });
  //       }
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         toast({
  //           title: "Error al enviar el mensaje",
  //           description: error.message,
  //           variant: "destructive",
  //         });
  //       } else {
  //         toast({
  //           title: "Error al enviar el mensaje",
  //           description: "Por favor, inténtalo de nuevo.",
  //           variant: "destructive",
  //         });
  //       }
  //     }
  //   }
  // };

  return (
    <div className="py-20 px-4 flex justify-center items-center">
      <div className="bg-black bg-opacity-95 p-7 rounded-xl w-full max-w-lg md:w-[700px] text-center">
        <h2 className="text-white text-2xl mb-4">Contáctanos</h2>
        <p className="text-white mb-4">Haz clic en el botón a continuación para contactarnos a través de WhatsApp.</p>
        <a href="https://wa.link/atgyvb" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <ShimmerButton>Contactar</ShimmerButton>
        </a>
      </div>
    </div>
  );
}
