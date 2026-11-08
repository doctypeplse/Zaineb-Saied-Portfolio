
"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageProvider";

const projects = [
  {
    title: "Mafrah",
    image: "/images/project-2.png",
    href: "/work/mafrah",
  },
  {
    title: "Taswyra",
    image: "/images/project-1.png",
    href: "/work/taswyra",
  },
  {
    title: "Sakynn",
    image: "/images/project-4.png",
    href: "/work/sakynn",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    {
      threshold: 0.15,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

  return (
 <section
      ref={sectionRef}
      id="work"
      className="
        scroll-mt-19
        w-full bg-[#F2F2F2]
        px-6 pt-4 pb-24
        md:px-12 lg:px-16
      "
    >   
      <div className="mx-auto max-w-[1240px]">

        {/* Section heading */}
        <div className="mb-12">
          <h2
            className="
              text-4xl font-semibold
              tracking-[-0.04em] text-[#242424]
              md:text-5xl
            "
          >
            {t.projects.title}
          </h2>
        </div>

        {/* Projects grid */}
        <div
          className="
            grid grid-cols-1
            justify-items-center
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
            md:gap-6
          "
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                w-full
                transition-all
                duration-[1300ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
              style={{
                transitionDelay: isVisible
                  ? `${index * 180}ms`
                  : "0ms",
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
