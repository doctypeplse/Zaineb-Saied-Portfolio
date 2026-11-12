
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
        relative flex min-h-[620px] w-full flex-col items-center
        overflow-hidden bg-[#F1F1F1]
        pt-24 pb-16
        sm:min-h-[660px] sm:pt-24
        md:min-h-[700px] md:pt-24 md:pb-20
        lg:min-h-[700px]
      "
    >
      {/* Background title */}
      <h1
        className="
          pointer-events-none absolute left-1/2 z-0
          top-[250px] w-full -translate-x-1/2
          whitespace-nowrap px-2 text-center
          text-[clamp(25px,8vw,48px)]
          font-semibold tracking-[-0.045em]
          text-white

          sm:top-[235px]
          sm:text-[clamp(42px,8vw,76px)]

          md:top-[220px]
          md:text-[clamp(60px,9vw,105px)]

          lg:text-[clamp(90px,9.1vw,132px)]
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
      <div
        className="
          absolute left-1/2 top-[72px] z-10
          -translate-x-1/2
        "
      >
        <Badge />
      </div>

      {/* Reserved space */}
      <div
        className="
          h-[325px] shrink-0
          sm:h-[340px]
          md:h-[370px]
          lg:h-[340px]
        "
      />

      {/* Name with iOS selection effect */}
      <h2
        className="
          relative z-10 mt-4 px-4
          text-center
          text-[clamp(36px,7vw,48px)]
          font-semibold tracking-[-0.045em]
          text-[#242424]
          sm:text-[54px]
          md:text-[60px]
          lg:text-[64px]
        "
      >
        <span
          className="relative inline-block"
          style={{
            backgroundColor: "rgba(56, 132, 255, 0.15)",
            padding: "0px 10px",
            lineHeight: "0.99",
            borderRadius: "2px",
          }}
        >
          {/* Left selection handle */}
          <span
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: "3px",
              height: "85%",
              backgroundColor: "#1238B8",
            }}
          >
            <span
              className="absolute rounded-full h-[12px] w-[12px] md:h-[15px] md:w-[15px]"
              style={{
                backgroundColor: "#1238B8",
                top: "-7px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </span>

          {t.hero.name}

          {/* Right selection handle */}
          <span
            className="absolute"
            style={{
              right: 0,
              bottom: 0,
              width: "3px",
              height: "85%",
              backgroundColor: "#1238B8",
            }}
          >
            <span
              className="absolute rounded-full h-[12px] w-[12px] md:h-[16px] md:w-[16px]"
              style={{
                backgroundColor: "#1238B8",
                bottom: "-7px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </span>
        </span>
      </h2>

      {/* Description + See work button */}
      <div
        className="
          relative z-10 mt-3 flex w-full
          flex-col items-center px-4
          sm:mt-4
          md:mt-3
        "
      >
        <p
          className="
            max-w-[340px] text-center
            text-[15px] leading-relaxed
            font-normal tracking-[-0.025em]
            text-[#656565]

            sm:max-w-[600px] sm:text-[17px]
            md:max-w-none md:whitespace-nowrap
            md:text-[21px] md:px-4
            lg:text-[23px]
          "
        >
          {t.hero.description}
        </p>

        <a
          href="#work"
          className="
            relative z-20 pointer-events-auto
            mt-5 inline-flex h-9 w-fit
            items-center justify-center
            whitespace-nowrap rounded-full
            border border-[#E8E8E8]
            bg-transparent px-4
            text-sm font-medium text-[#242424]
            transition-all duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-[2px]
            hover:border-[#242424]
            hover:bg-[#242424]/[0.04]

            sm:mt-5
            md:mt-4
          "
        >
          {t.hero.button}
        </a>
      </div>
    </section>
  );
}
