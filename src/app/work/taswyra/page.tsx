"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";

const content = {
  en: {
    back: "Back to work",
    sections: ["Overview", "Challenge", "UX strategy", "UI design", "Final product", "Outcome"],
    description: "A photography platform connecting people looking for professional photography services with photographers trained and verified through Taswyra.",
    metadata: ["My role", "Project", "Platform", "Focus"],
    role: <>UX/UI Designer<br />Front-End Developer</>,
    project: "Photography services platform",
    platform: "Web application",
    focus: "Design & development",
    mainInterface: "Main Taswyra interface",
    challengeLabel: "The challenge",
    challengeTitle: "Finding the right photographer should feel effortless.",
    challengeDescription: "People often struggle to find reliable photographers who match their needs, style, and expectations. At the same time, photographers need a platform that helps them build credibility and reach potential clients.",
    organizers: "For clients",
    organizersDescription: "Discover photographers, explore their portfolios, compare photography styles, and find the right professional for each occasion.",
    owners: "For photographers",
    ownersDescription: "Build a professional presence, showcase photography work, and connect with people looking for photography services.",
    strategyTitle: "Two audiences. One trusted experience.",
    strategyDescription: "The platform brings clients and photographers together through two dedicated journeys, with photographer verification at the heart of the experience.",
    seekers: "People looking for photographers",
    ownersJourney: "Photographers",
    seekerSteps: ["Discover", "Explore portfolios", "Compare styles", "Choose a photographer"],
    ownerSteps: ["Join Taswyra", "Complete training", "Get verified", "Showcase work"],
    flowPlaceholder: "User journeys / platform structure",
    designTitle: "Building trust through design.",
    designDescription: "A clear and approachable visual experience that makes discovering creative talent simple while presenting photographers and their work professionally.",
    visualDirection: "Visual direction and design system",
    typography: "Typography and components",
    interfaceDetails: "Interface details",
    finalProductTitle: "One platform, two connected experiences.",
    finalProductDescription: "Explore the interfaces designed to help clients discover photographers and enable verified professionals to present their work.",
    visitorExperience: "Client experience",
    discover: "Discover",
    venueDiscovery: "Photographer discovery interface",
    venueDetails: "Photographer profile",
    visitAvailability: "Photography service details",
    ownerExperience: "Photographer experience",
    manage: "Showcase",
    ownerDashboard: "Photographer dashboard",
    listingManagement: "Portfolio management",
    ownerCalendar: "Photographer availability",
    outcomeLabel: "Outcome",
    outcomeTitle: "A trusted space connecting clients with verified photographers.",
    outcomeDescription: "Taswyra connects people seeking photography services with photographers who have completed the platform's training and verification process, helping clients discover professionals with greater confidence.",
    contribution: "My contribution",
    contributionTitle: "UX/UI Design & Front-End Development",
    contributionDescription: "From understanding user needs and structuring the experience to designing the interfaces and implementing the front-end.",
    footerRole: "UX/UI Designer & Front-End Developer",
    moreProjects: "Explore more projects",
  },

  fr: {
    back: "Retour aux projets",
    sections: ["Présentation", "Problématique", "Stratégie UX", "Design UI", "Produit final", "Résultat"],
    description: "Une plateforme de photographie qui met en relation les personnes à la recherche de services photographiques avec des photographes formés et vérifiés par Taswyra.",
    metadata: ["Mon rôle", "Projet", "Plateforme", "Mission"],
    role: <>Designer UX/UI<br />Développeuse Front-End</>,
    project: "Plateforme de services photographiques",
    platform: "Application web",
    focus: "Design & développement",
    mainInterface: "Interface principale de Taswyra",
    challengeLabel: "La problématique",
    challengeTitle: "Trouver le bon photographe devrait être simple.",
    challengeDescription: "Il est souvent difficile de trouver un photographe fiable qui correspond à ses besoins, à son style et à ses attentes. De leur côté, les photographes ont besoin d'une plateforme pour valoriser leur travail et toucher de nouveaux clients.",
    organizers: "Pour les clients",
    organizersDescription: "Découvrir des photographes, explorer leurs portfolios, comparer leurs styles et trouver le professionnel adapté à chaque occasion.",
    owners: "Pour les photographes",
    ownersDescription: "Créer une présence professionnelle, présenter leurs réalisations et entrer en contact avec des personnes à la recherche de services photographiques.",
    strategyTitle: "Deux publics. Une expérience de confiance.",
    strategyDescription: "La plateforme réunit clients et photographes à travers deux parcours dédiés, avec la vérification des photographes au cœur de l'expérience.",
    seekers: "Personnes à la recherche d'un photographe",
    ownersJourney: "Photographes",
    seekerSteps: ["Découvrir", "Explorer les portfolios", "Comparer les styles", "Choisir un photographe"],
    ownerSteps: ["Rejoindre Taswyra", "Suivre la formation", "Être vérifié", "Présenter son travail"],
    flowPlaceholder: "Parcours utilisateurs / structure de la plateforme",
    designTitle: "Créer la confiance à travers le design.",
    designDescription: "Une expérience visuelle claire et accessible qui facilite la découverte de talents créatifs tout en valorisant les photographes et leurs réalisations.",
    visualDirection: "Direction visuelle et système de design",
    typography: "Typographie et composants",
    interfaceDetails: "Détails de l'interface",
    finalProductTitle: "Une plateforme, deux expériences connectées.",
    finalProductDescription: "Découvrez les interfaces conçues pour aider les clients à trouver des photographes et permettre aux professionnels vérifiés de présenter leur travail.",
    visitorExperience: "Espace client",
    discover: "Découvrir",
    venueDiscovery: "Interface de découverte des photographes",
    venueDetails: "Profil du photographe",
    visitAvailability: "Détails des services photographiques",
    ownerExperience: "Espace photographe",
    manage: "Présenter",
    ownerDashboard: "Tableau de bord du photographe",
    listingManagement: "Gestion du portfolio",
    ownerCalendar: "Disponibilités du photographe",
    outcomeLabel: "Résultat",
    outcomeTitle: "Un espace de confiance qui relie clients et photographes vérifiés.",
    outcomeDescription: "Taswyra met en relation les personnes à la recherche de services photographiques avec des photographes ayant suivi la formation et le processus de vérification de la plateforme, afin d'aider les clients à choisir des professionnels en toute confiance.",
    contribution: "Ma contribution",
    contributionTitle: "Design UX/UI & Développement Front-End",
    contributionDescription: "De la compréhension des besoins utilisateurs à la structuration de l'expérience, en passant par la conception des interfaces et leur intégration front-end.",
    footerRole: "Designer UX/UI & Développeuse Front-End",
    moreProjects: "Découvrir d'autres projets",
  },
};

const sectionIds = ["overview", "challenge", "strategy", "design", "product", "outcome"];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-xs text-[#999999]">{number}</span>
      <span className="text-sm text-[#777777]">{children}</span>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  className = "",
  imageClassName = "object-contain",
  backgroundClassName = "bg-[#E9E9E9]",
  natural = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  backgroundClassName?: string;
  natural?: boolean;
}) {
  if (natural) {
    return (
      <div className={`overflow-hidden rounded-xl ${backgroundClassName} ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
          className={`block h-auto w-full rounded-xl ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${backgroundClassName} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        unoptimized
        className={`${imageClassName} rounded-xl`}
      />
    </div>
  );
}

export default function TaswyraPage() {
  const { language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState("overview");

  const t = content[language];

  const sections = sectionIds.map((id, index) => ({
    id,
    label: t.sections[index],
  }));

  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = 150;
      let currentSection = "overview";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= threshold) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans text-[#242424]">
      <header className="sticky top-0 z-50 w-full border-b border-[#E3E3E3] bg-[#F1F1F1]/95 backdrop-blur-xl">
        <nav className="flex w-full flex-row items-center justify-between px-6 py-5 md:px-12 lg:px-16">
          <Link
            href="/#work"
            className="text-sm font-medium text-[#292929] transition-colors duration-300 hover:text-[#999999]"
          >
            <span className="mr-2">↖</span>
            {t.back}
          </Link>

          <div className="hidden flex-row items-center gap-6 md:gap-8 lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? "location" : undefined}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === section.id
                    ? "text-[#292929]"
                    : "text-[#999999] hover:text-[#292929]"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

         {/* Language + Contact */}
<div className="flex items-center gap-5">

  {/* Language switcher */}
  <div className="flex items-center gap-1 rounded-full border border-[#E8E8E8] bg-transparent p-1">
    <button
      onClick={() => setLanguage("en")}
      aria-pressed={language === "en"}
      className={`
        rounded-full border px-2.5 py-1 text-[11px] font-medium
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          language === "en"
            ? "border-[#242424] bg-[#EAEAEA] text-[#242424]"
            : "border-transparent bg-transparent text-[#999999] hover:text-[#242424]"
        }
      `}
    >
      EN
    </button>

    <button
      onClick={() => setLanguage("fr")}
      aria-pressed={language === "fr"}
      className={`
        rounded-full border px-2.5 py-1 text-[11px] font-medium
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          language === "fr"
            ? "border-[#242424] bg-[#EAEAEA] text-[#242424]"
            : "border-transparent bg-transparent text-[#999999] hover:text-[#242424]"
        }
      `}
    >
      FR
    </button>
  </div>

</div>
        </nav>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <section id="overview" className="scroll-mt-28 pb-20 pt-24 md:pb-28 md:pt-28">
          <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <h1 className="text-5xl font-medium tracking-[-0.065em] md:text-6xl lg:text-[76px]">
                Taswyra
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#777777] md:text-lg">
                {t.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:pl-10">
              <div>
                <p className="text-xs text-[#999999]">{t.metadata[0]}</p>
                <p className="mt-2 text-sm leading-6">{t.role}</p>
              </div>

              <div>
                <p className="text-xs text-[#999999]">{t.metadata[1]}</p>
                <p className="mt-2 text-sm">{t.project}</p>
              </div>

              <div>
                <p className="text-xs text-[#999999]">{t.metadata[2]}</p>
                <p className="mt-2 text-sm">{t.platform}</p>
              </div>

              <div>
                <p className="text-xs text-[#999999]">{t.metadata[3]}</p>
                <p className="mt-2 text-sm">{t.focus}</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ProjectImage
              src="/images/taswyra/hero.png"
              alt={t.mainInterface}
              className="min-h-[300px] md:min-h-[565px]"
              imageClassName="object-cover"
              backgroundClassName="bg-transparent"
            />
          </div>
        </section>

        <section id="challenge" className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel number="01">{t.challengeLabel}</SectionLabel>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
                {t.challengeTitle}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#777777]">
                {t.challengeDescription}
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <span className="text-xs text-[#999999]">01</span>
                  <h3 className="mt-3 text-base font-medium">{t.organizers}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    {t.organizersDescription}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-[#999999]">02</span>
                  <h3 className="mt-3 text-base font-medium">{t.owners}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    {t.ownersDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="strategy" className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28">
          <SectionLabel number="02">{t.sections[2]}</SectionLabel>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="max-w-xl text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                {t.strategyTitle}
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#777777]">
                {t.strategyDescription}
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-b border-[#E3E3E3] pb-7">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{t.seekers}</h3>
                  <span className="text-xs text-[#999999]">01</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.seekerSteps.map((step) => (
                    <span key={step} className="rounded-full border border-[#DCDCDC] px-4 py-2 text-xs text-[#555555]">
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{t.ownersJourney}</h3>
                  <span className="text-xs text-[#999999]">02</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.ownerSteps.map((step) => (
                    <span key={step} className="rounded-full border border-[#DCDCDC] px-4 py-2 text-xs text-[#555555]">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ProjectImage
              src="/images/taswyra/user-flow.png"
              alt={t.flowPlaceholder}
              className="min-h-[480px] md:min-h-[650px] lg:min-h-[720px]"
              backgroundClassName="bg-transparent"
            />
          </div>
        </section>

        <section id="design" className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28">
          <SectionLabel number="03">{t.sections[3]}</SectionLabel>

          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                {t.designTitle}
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#777777]">
                {t.designDescription}
              </p>
            </div>

            <ProjectImage
              src="/images/taswyra/visual-direction.png"
              alt={t.visualDirection}
              natural
              className="rounded-xl"
              imageClassName="object-contain"
              backgroundClassName="bg-transparent"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            <ProjectImage
              src="/images/taswyra/design-foundation.png"
              alt="Design foundation"
              natural
              backgroundClassName="bg-transparent"
            />

            <ProjectImage
              src="/images/taswyra/typography.png"
              alt={t.typography}
              natural
              backgroundClassName="bg-transparent"
            />

            <ProjectImage
              src="/images/taswyra/components-library.png"
              alt="Components library"
              natural
              backgroundClassName="bg-transparent"
            />
          </div>
        </section>

        <section id="product" className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28">
          <SectionLabel number="04">{t.sections[4]}</SectionLabel>

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-medium tracking-[-0.05em] md:text-5xl">
              {t.finalProductTitle}
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#777777]">
              {t.finalProductDescription}
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-medium">{t.visitorExperience}</h3>
              <span className="text-xs text-[#999999]">01 / {t.discover}</span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-[1.05fr_0.98fr] md:items-stretch">
              <div className="flex items-center justify-center overflow-hidden">
  <ProjectImage
    src="/images/taswyra/home.webp"
    alt="Taswyra homepage interface"
    natural
    className="w-full md:w-[87.5%]"
    imageClassName="w-full h-auto object-contain"
    backgroundClassName="bg-transparent"
  />
</div>

              <div className="flex flex-col gap-4">
                <ProjectImage
                  src="/images/taswyra/gallery.png"
                  alt="Photography gallery"
                  natural
                  backgroundClassName="bg-transparent"
                />

                <ProjectImage
                  src="/images/taswyra/list.png"
                  alt="Photographer listing"
                  natural
                  backgroundClassName="bg-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="outcome" className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel number="05">{t.outcomeLabel}</SectionLabel>
            </div>

            <div>
              <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.05em] md:text-5xl">
                {t.outcomeTitle}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#777777]">
                {t.outcomeDescription}
              </p>

              <div className="mt-12 border-t border-[#E3E3E3] pt-6">
                <p className="text-xs text-[#999999]">{t.contribution}</p>
                <p className="mt-3 text-lg font-medium">{t.contributionTitle}</p>
                <p className="mt-2 max-w-lg text-sm leading-7 text-[#777777]">
                  {t.contributionDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#E3E3E3] py-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium">Zaineb Saied</p>
              <p className="mt-1 text-xs text-[#888888]">{t.footerRole}</p>
            </div>

            <Link
              href="/#work"
              className="text-sm text-[#777777] transition-colors hover:text-[#242424]"
            >
              {t.moreProjects} ↗
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}