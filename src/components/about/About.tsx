"use client";

import Badge from "@/components/hero/Badge";
import { useLanguage } from "@/context/LanguageProvider";

const content = {
  en: {
    name: "Zaineb Saied",
    vision:
      "Passionate about creating meaningful design experiences and bringing them to life through web development, I aim to bridge creativity and technology to build digital products that are intuitive, functional, and engaging.",
    resume: {
      experiences: "Experiences",
      tools: "What I build with",
      skills: "Skills",
      education: "Education",
      experience: [
        {
          role: "Web Designer & Developer",
          company: "WebFullContact Agency",
          date: "Oct. 2025 — Oct. 2026",
          location: "Remote · Tunisia",
          description: [
            "Designed and developed responsive websites, translating UI/UX concepts into functional digital experiences.",
            "Created intuitive interfaces and interactive components, focusing on usability and consistency.",
            "Integrated designs and developed front-end features to bring concepts to life.",
          ],
        },
        {
          role: "UI/UX Designer & Full-Stack Developer Intern",
          company: "DevSync",
          date: "February 2025 — May 2025",
          location: "Remote · Tunisia",
          description: [
            "Worked across the product development process, from UX research and UI design to front-end and back-end development.",
            "Created user flows, wireframes, high-fidelity mockups, and interactive prototypes.",
            "Developed client-side and server-side features to bring the digital experience together.",
          ],
        },
      ],
      toolsList: [
        { name: "Figma", description: "UI/UX Design", icon: "figma" },
        {
          name: "VS Code",
          description: "Code Editor",
          icon: "visualstudiocode",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
        { name: "Git", description: "Version Control", icon: "git" },
        { name: "GitHub", description: "Code Collaboration", icon: "github" },
        { name: "Claude", description: "AI-assisted Coding", icon: "claude" },
        { name: "React", description: "UI Development", icon: "react" },
        { name: "Next.js", description: "Web Development", icon: "nextdotjs" },
        {
          name: "Tailwind CSS",
          description: "CSS Framework",
          icon: "tailwindcss",
        },
        {
          name: "JavaScript",
          description: "Programming",
          icon: "javascript",
        },
        { name: "HTML5", description: "Markup", icon: "html5" },
        {
          name: "CSS3",
          description: "Styling",
          icon: "css3",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        { name: "PHP", description: "Back-End Development", icon: "php" },
        {
          name: "Bootstrap",
          description: "CSS Framework",
          icon: "bootstrap",
        },
        {
          name: "jQuery",
          description: "JavaScript Library",
          icon: "jquery",
        },
      ],
      skillsList: [
        "UI/UX Design",
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Responsive Design",
        "Front-End Development",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "PHP",
        "Bootstrap",
        "jQuery",
      ],
      educationList: [
        {
          degree: "Bachelor's Degree in Multimedia Communication",
          school: "ISAMM",
          date: "2022 — 2025",
        },
        {
          degree: "Studies in Economics and Management",
          school: "IHEC",
          date: "2020 — 2022",
        },
        {
          degree: "Baccalaureate in Economics and Management",
          school: "Bardo, Tunisia",
          date: "2020",
        },
      ],
    },
  },

  fr: {
    name: "Zaineb Saied",
    vision:
      "Passionnée par la création d’expériences de design porteuses de sens et leur concrétisation à travers le développement web, je cherche à allier créativité et technologie pour concevoir des produits numériques intuitifs, fonctionnels et engageants.",
    resume: {
      experiences: "Expériences",
      tools: "Mes outils",
      skills: "Compétences",
      education: "Formation",
      experience: [
        {
          role: "Web Designer & Développeuse",
          company: "WebFullContact Agency",
          date: "Oct. 2025 — Oct. 2026",
          location: "À distance · Tunisie",
          description: [
            "Conception et développement de sites web responsives, en transformant des concepts UI/UX en expériences numériques fonctionnelles.",
            "Création d'interfaces intuitives et de composants interactifs, avec un accent sur l'ergonomie et la cohérence.",
            "Intégration des maquettes et développement des fonctionnalités front-end.",
          ],
        },
        {
          role: "Stagiaire UI/UX Designer & Développeuse Full-Stack",
          company: "DevSync",
          date: "Février 2025 — Mai 2025",
          location: "À distance · Tunisie",
          description: [
            "Participation à l'ensemble du processus de développement produit, de la recherche UX à la conception UI et au développement front-end et back-end.",
            "Création de parcours utilisateurs, wireframes, maquettes haute fidélité et prototypes interactifs.",
            "Développement de fonctionnalités côté client et côté serveur.",
          ],
        },
      ],
      toolsList: [
        { name: "Figma", description: "Design UI/UX", icon: "figma" },
        {
          name: "VS Code",
          description: "Éditeur de code",
          icon: "visualstudiocode",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
        { name: "Git", description: "Gestion de versions", icon: "git" },
        { name: "GitHub", description: "Collaboration", icon: "github" },
        { name: "Claude", description: "Code assisté par IA", icon: "claude" },
        { name: "React", description: "Développement UI", icon: "react" },
        { name: "Next.js", description: "Développement web", icon: "nextdotjs" },
        {
          name: "Tailwind CSS",
          description: "Framework CSS",
          icon: "tailwindcss",
        },
        {
          name: "JavaScript",
          description: "Programmation",
          icon: "javascript",
        },
        { name: "HTML5", description: "Structure web", icon: "html5" },
        {
          name: "CSS3",
          description: "Styles web",
          icon: "css3",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        { name: "PHP", description: "Développement Back-End", icon: "php" },
        {
          name: "Bootstrap",
          description: "Framework CSS",
          icon: "bootstrap",
        },
        {
          name: "jQuery",
          description: "Bibliothèque JavaScript",
          icon: "jquery",
        },
      ],
      skillsList: [
        "Design UI/UX",
        "Recherche UX",
        "Wireframing",
        "Prototypage",
        "Design responsive",
        "Développement Front-End",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "PHP",
        "Bootstrap",
        "jQuery",
      ],
      educationList: [
        {
          degree: "Licence en Communication Multimédia",
          school: "ISAMM",
          date: "2022 — 2025",
        },
        {
          degree: "Études en Économie et Gestion",
          school: "IHEC",
          date: "2020 — 2022",
        },
        {
          degree: "Baccalauréat en Économie et Gestion",
          school: "Bardo, Tunisie",
          date: "2020",
        },
      ],
    },
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = content[language];
  const r = t.resume;

  return (
    <section
      id="about"
      className="w-full bg-[#F1F1F1] px-6 pb-28 pt-0 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Main profile */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-16">
          {/* Badge column */}
          <div className="shrink-0">
            <Badge align="left" showStrap={false} />
          </div>

          {/* Profile information column */}
          <div className="min-w-0 md:mt-0">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-[#242424] md:text-5xl">
              {t.name}
            </h2>

            <p className="mt-5 text-base leading-[1.8] tracking-[-0.015em] text-[#666666] md:text-lg">
              {t.vision}
            </p>

            {/* Contact links */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4 text-sm font-medium text-[#242424]">
              {/* Email */}
              <a
                href="mailto:zainebsaied20@gmail.com"
                className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-60"
              >
                <svg
                  className="h-[18px] w-[18px] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m4 7 8 6 8-6" />
                  <path d="M7 16h3" />
                </svg>
                <span>zainebsaied20@gmail.com</span>
              </a>

              {/* Separator */}
              <span className="h-4 w-px shrink-0 bg-black/20" />

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zaineb-saied-a3a344316/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-60"
              >
                <svg
                  className="h-[18px] w-[18px] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.02 18.34H5.06V9h2.96v9.34ZM6.54 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.27 10.61h-2.96v-4.55c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.63H9.66V9h2.84v1.28h.04a3.12 3.12 0 0 1 2.81-1.55c3 0 3.46 1.97 3.46 4.54v5.07Z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Separator */}
              <span className="h-4 w-px shrink-0 bg-black/20" />

              {/* Phone */}
              <a
                href="tel:+21621929194"
                className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-60"
              >
                <svg
                  className="h-[18px] w-[18px] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6.6 3.5h2.7l1.4 4.1-1.8 1.5a14.5 14.5 0 0 0 6 6l1.5-1.8 4.1 1.4v2.7a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.9 5.7a2 2 0 0 1 1.7-2.2Z" />
                </svg>
                <span>+216 21 929 194</span>
              </a>
            </div>

            {/* Download CV */}
            <a
              href={
                language === "fr"
                  ? "/cv/Zaineb-Saied-CV-FR.pdf"
                  : "/cv/Zaineb-Saied-CV-EN.pdf"
              }
              download={
                language === "fr"
                  ? "Zaineb-Saied-CV-FR.pdf"
                  : "Zaineb-Saied-CV-EN.pdf"
              }
              className="
  relative z-20 pointer-events-auto
  mt-4 inline-flex h-9 w-fit items-center justify-center
  gap-2
  whitespace-nowrap rounded-full border border-[#E8E8E8]
  bg-transparent px-4 text-sm font-medium text-[#242424]
  transition-all duration-500
  ease-[cubic-bezier(0.22,1,0.36,1)]
  hover:-translate-y-[2px]
  hover:border-[#242424]
  hover:bg-[#242424]/[0.04]
"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>

              <span>
                {language === "fr" ? "Télécharger mon CV" : "Download my CV"}
              </span>
            </a>
          </div>
        </div>

        {/* Resume content */}
        <section id="resume" className="mt-28 scroll-mt-24">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-14">
            {/* LEFT COLUMN — EXPERIENCES + EDUCATION */}
            <div>
              <h3 className="mb-8 text-lg font-medium text-[#242424]">
                {r.experiences}
              </h3>

              <div className="space-y-9">
                {r.experience.map((experience) => (
                  <div
                    key={experience.company}
                    className="relative border-l border-[#DEDEDE] pl-6"
                  >
                    <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-[#292929]" />

                    <p className="text-xs text-[#999999]">
                      {experience.date}
                    </p>

                    <h4 className="mt-2 text-base font-medium text-[#292929]">
                      {experience.role}
                    </h4>

                    <p className="mt-1 text-sm text-[#777777]">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-xs text-[#999999]">
                      {experience.location}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {experience.description.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-[#777777]"
                        >
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#999999]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Separator between Experiences and Education */}
              <div className="mt-10 h-px w-full bg-black/[0.08]" />

              {/* EDUCATION */}
              <div className="mt-10">
                <h3 className="mb-8 text-lg font-medium text-[#242424]">
                  {r.education}
                </h3>

                <div className="relative space-y-7 border-l border-[#DEDEDE] pl-6">
                  {r.educationList.map((education) => (
                    <div key={education.school} className="relative">
                      <span className="absolute -left-[28px] top-1.5 h-2 w-2 rounded-full bg-[#292929]" />

                      <p className="text-xs text-[#999999]">
                        {education.date}
                      </p>

                      <h4 className="mt-1 text-sm font-medium leading-6 text-[#292929]">
                        {education.degree}
                      </h4>

                      <p className="mt-1 text-sm text-[#777777]">
                        {education.school}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — TOOLS + SKILLS */}
            <div className="space-y-10">
              {/* TOOLS */}
              <div>
                <h3 className="mb-5 text-lg font-medium text-[#242424]">
                  {r.tools}
                </h3>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {r.toolsList.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex min-w-0 items-center gap-3 rounded-[18px] border border-[#E2E2E5] bg-transparent p-3 transition-colors duration-300 hover:bg-white/60"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EBEBEB] p-3">
                        <img
                          src={
                            "iconUrl" in tool && tool.iconUrl
                              ? tool.iconUrl
                              : `https://cdn.simpleicons.org/${tool.icon}`
                          }
                          alt={`${tool.name} logo`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#242424]">
                          {tool.name}
                        </p>

                        <p className="truncate text-xs text-[#777777]">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider between Tools and Skills */}
              <div className="h-px w-full bg-black/[0.08]" />

              {/* SKILLS */}
              <div>
                <h3 className="mb-5 text-lg font-medium text-[#242424]">
                  {r.skills}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {r.skillsList.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#E3E3E3] bg-[#EBEBEB]/70 px-3.5 py-2 text-xs font-medium text-[#666666] transition-colors duration-300 hover:bg-[#E3E3E3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}