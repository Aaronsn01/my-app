import React from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import RevealText from '../magicui/text-reveal';

export default function Reviews() {
  const reviews = [
    {
      name: "Jose",
      username: "@jose",
      body: "La Jungla CrossFit es increíble. Nunca he visto algo igual. Me encanta.",
      img: "https://avatar.vercel.sh/jose",
    },
    {
      name: "Ana",
      username: "@ana",
      body: "Estoy muy impresionada con La Jungla CrossFit. Es asombroso.",
      img: "https://avatar.vercel.sh/ana",
    },
    {
      name: "Carlos",
      username: "@carlos",
      body: "Sin palabras. Esto es increíble. Me encanta.",
      img: "https://avatar.vercel.sh/carlos",
    },
    {
      name: "Maria",
      username: "@maria",
      body: "La mejor experiencia de CrossFit que he tenido. Muy recomendado.",
      img: "https://avatar.vercel.sh/maria",
    },
    {
      name: "Luis",
      username: "@luis",
      body: "Excelentes instalaciones y entrenadores. Muy satisfecho.",
      img: "https://avatar.vercel.sh/luis",
    },
    {
      name: "Elena",
      username: "@elena",
      body: "La Jungla CrossFit es fantástica. Me siento genial después de cada sesión.",
      img: "https://avatar.vercel.sh/elena",
    },
    {
      name: "Pedro",
      username: "@pedro",
      body: "Entrenamientos intensos y efectivos. Me encanta este lugar.",
      img: "https://avatar.vercel.sh/pedro",
    },
    {
      name: "Lucia",
      username: "@lucia",
      body: "Ambiente motivador y gran comunidad. Muy feliz con La Jungla CrossFit.",
      img: "https://avatar.vercel.sh/lucia",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <div
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 border",
          // light styles
          "bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <figure>
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
      </div>
    );
  };

  const MarqueeDemo = () => {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20 md:shadow-xl bg-transparent">
        <RevealText />
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    );
  };

  return <MarqueeDemo />;
}
