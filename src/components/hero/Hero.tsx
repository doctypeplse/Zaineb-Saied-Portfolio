
"use client";

import { useEffect, useState } from "react";
import Badge from "./Badge";
import { useLanguage } from "@/context/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  const [animatedTitle, setAnimatedTitle] = useState("");

  useEffect(() => {
    const titles = [
      t.hero.title.toUpperCase(),
      "FRONTEND DEVELOPER",
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const animate = () => {
      if (cancelled) return;

      const currentTitle = titles[titleIndex];

      if (!deleting) {
        charIndex++;
        setAnimatedTitle(currentTitle.slice(0, charIndex));

        if (charIndex === currentTitle.length) {
          deleting = true;
          timeout = setTimeout(animate, 1600);
        } else {
          timeout = setTimeout(animate, 100);
        }
      } else {
        charIndex--;
        setAnimatedTitle(currentTitle.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          timeout = setTimeout(animate, 450);
        } else {
          timeout = setTimeout(animate, 55);
        }
      }
    };

    setAnimatedTitle("");
    timeout = setTimeout(animate, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [t.hero.title]);

  return (
    <section
      id="home"
      className="
        relative flex min-h-[700px] w-full flex-col items-center
        overflow-hidden bg-[#F1F1F1] pt-24
      "
    >
{/* Background title */}
<h1
  className="
    pointer-events-none absolute left-1/2
    top-[290px] md:top-[220px]
    z-0 w-full -translate-x-1/2
    whitespace-nowrap px-2
    text-center
    text-[clamp(25px,8.2vw,138px)]
    md:text-[clamp(38px,9.5vw,138px)]
    font-semibold tracking-[-0.035em]
    text-white
  "
>
  {animatedTitle}
  <span
    className="ml-[2px] inline-block font-light"
    style={{
      animation: "cursor-blink 0.8s step-end infinite",
    }}
  >
    |
  </span>
</h1>

      {/* Hanging badge */}
      <div className="absolute left-1/2 top-[72px] z-10 -translate-x-1/2">
        <Badge />
      </div>

    {/* Reserved space */}
<div className="h-[320px] shrink-0" />

      {/* Name */}
      <h2
        className="
          relative z-10 mt-4
          text-center text-[clamp(42px,7vw,64px)]
          font-semibold tracking-[-0.035em]
          text-[#242424]
        "
      >
        {t.hero.name}
      </h2>

      {/* Description + See work button */}
      <div className="relative z-10 mt-3 flex flex-col items-center">
       <p
className="
  max-w-[340px] px-4 text-center
  text-[16px] sm:max-w-none sm:whitespace-nowrap sm:px-6
  md:text-[21px] lg:text-[23px]
  leading-relaxed font-normal
  tracking-[-0.025em]
  text-[#656565]
"
>
  {t.hero.description}
</p>

        <a
          href="#work"
          className="
            relative z-20 pointer-events-auto
            mt-4 inline-flex h-9 w-fit items-center justify-center
            whitespace-nowrap rounded-full border border-[#E8E8E8]
            bg-transparent px-4 text-sm font-medium text-[#242424]
            transition-all duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-[2px]
            hover:border-[#242424]
            hover:bg-[#242424]/[0.04]
          "
        >
          {t.hero.button}
        </a>
      </div>
    </section>
  );
}
