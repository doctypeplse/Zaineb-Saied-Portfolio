
"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";

type ProjectCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function ProjectCard({
  title,
  image,
  href,
}: ProjectCardProps) {
  const { language } = useLanguage();

  const buttonLabel =
    language === "fr" ? "Découvrir le projet" : "Check it out";

  return (
    <Link href={href} className="block w-full max-w-[600px]">
      <article className="group w-full rounded-2xl bg-white p-2">
        <div className="relative aspect-[584/330] overflow-hidden rounded-lg">

          {/* Project image */}
          <img
            src={image}
            alt={title}
            className="
              h-full w-full object-cover
              transition-transform duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.04]
            "
          />

          {/* Arrow button */}
          <div
            className="
              absolute right-3 top-3 z-10
              flex h-7 w-7 items-center justify-center
              rounded-full bg-[#292929]/40
              text-white
              transition-all duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:translate-y-1
              group-hover:opacity-0
            "
          >
            <span className="text-[16px] leading-none">↗</span>
          </div>

          {/* Hover overlay */}
          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center gap-6
              bg-black/0
              opacity-0
              transition-all duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:bg-black/55
              group-hover:opacity-100
              group-hover:backdrop-blur-[3px]
            "
          >
            {/* Project title */}
            <h3
              className="
                translate-y-3
                text-2xl font-medium
                tracking-[-0.025em] text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                opacity-0
                transition-all duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              {title}
            </h3>

            {/* Check it out button */}
            <span
              className="
                flex items-center gap-2
                translate-y-3
                rounded-full bg-white px-5 py-2
                text-xs font-normal tracking-wide text-[#242424]
                shadow-sm
                opacity-0
                transition-all duration-500 delay-75
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              {buttonLabel}
              <span className="text-sm">↗</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
