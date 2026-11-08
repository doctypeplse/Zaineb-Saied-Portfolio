"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";

const content = {
  en: {
    back: "Back to work",
    sections: [
      "Overview",
      "Challenge",
      "UX strategy",
      "UI design",
      "Final product",
      "Outcome",
    ],
    description:
      "A real estate platform connecting property owners with people looking to buy or rent a home, making property discovery and management simpler.",
    metadata: ["My role", "Project", "Platform", "Focus"],
    role: <>UX/UI Designer<br />Front-End Developer</>,
    project: "Real estate platform",
    platform: "Web application",
    focus: "Design & development",
    mainInterface: "Main Sakynn interface",

    challengeLabel: "The challenge",
    challengeTitle: "Finding the right home should feel simple.",
    challengeDescription:
      "People looking to buy or rent a home need an easy way to discover properties, compare options, and contact owners. Property owners need a straightforward way to publish listings and manage their properties.",

    organizers: "For property seekers",
    organizersDescription:
      "Discover houses, explore property details, compare options, and find a home that matches their needs.",

    owners: "For property owners",
    ownersDescription:
      "Publish properties, manage listings, and connect directly with potential buyers and tenants.",

    strategyTitle: "Two audiences. Two different journeys.",
    strategyDescription:
      "The platform is designed around the needs of people searching for a property and owners looking to sell or rent theirs.",

    seekers: "Property seekers",
    ownersJourney: "Property owners",

    seekerSteps: [
      "Discover",
      "Search properties",
      "Explore details",
      "Contact owner",
    ],

    ownerSteps: [
      "Create listings",
      "Publish properties",
      "Manage listings",
      "Connect with seekers",
    ],

    flowPlaceholder: "User flow / platform structure",

    designTitle: "Bringing the experience to life.",
    designDescription:
      "A clear and consistent interface that makes property discovery, listing management, and communication easier for both audiences.",

    visualDirection: "Visual direction and design system",
    typography: "Typography and components",
    interfaceDetails: "Interface details",

    finalProductTitle: "One platform, two dedicated spaces.",
    finalProductDescription:
      "Explore the final interfaces designed for people searching for properties and owners managing their listings.",

    visitorExperience: "Property seeker experience",
    discover: "Discover",
    venueDiscovery: "Property discovery interface",
    venueDetails: "Property details",
    visitAvailability: "Property search results",

    ownerExperience: "Owner experience",
    manage: "Manage",
    ownerDashboard: "Property owner dashboard",
    listingManagement: "Property listing management",
    ownerCalendar: "Property management",

    outcomeLabel: "Outcome",
    outcomeTitle: "A connected experience for property discovery and management.",
    outcomeDescription:
      "Sakynn brings property seekers and owners together through one platform, simplifying the process of discovering, buying, and renting homes while giving owners the tools to manage their listings.",

    contribution: "My contribution",
    contributionTitle: "UX/UI Design & Front-End Development",
    contributionDescription:
      "From translating project requirements into intuitive interfaces to implementing the front-end experience.",

    footerRole: "UX/UI Designer & Front-End Developer",
    moreProjects: "Explore more projects",
  },

  fr: {
    back: "Retour aux projets",
    sections: [
      "Présentation",
      "Problématique",
      "Stratégie UX",
      "Design UI",
      "Produit final",
      "Résultat",
    ],

    description:
      "Une plateforme immobilière qui met en relation les propriétaires avec les personnes souhaitant acheter ou louer un logement, simplifiant la recherche et la gestion des biens.",

    metadata: ["Mon rôle", "Projet", "Plateforme", "Mission"],
    role: <>Designer UX/UI<br />Développeuse Front-End</>,
    project: "Plateforme immobilière",
    platform: "Application web",
    focus: "Design & développement",
    mainInterface: "Interface principale de Sakynn",

    challengeLabel: "La problématique",
    challengeTitle: "Trouver le bon logement devrait être simple.",
    challengeDescription:
      "Les personnes à la recherche d'un logement ont besoin d'un moyen simple pour découvrir des biens, comparer les offres et contacter les propriétaires. Ces derniers doivent pouvoir publier leurs annonces et gérer facilement leurs biens.",

    organizers: "Pour les chercheurs de logement",
    organizersDescription:
      "Découvrir des maisons, consulter les détails des biens, comparer les offres et trouver un logement adapté à leurs besoins.",

    owners: "Pour les propriétaires",
    ownersDescription:
      "Publier leurs biens, gérer leurs annonces et entrer directement en contact avec des acheteurs ou des locataires potentiels.",

    strategyTitle: "Deux publics. Deux parcours différents.",
    strategyDescription:
      "La plateforme est conçue autour des besoins des personnes à la recherche d'un logement et des propriétaires souhaitant vendre ou louer leurs biens.",

    seekers: "Chercheurs de logement",
    ownersJourney: "Propriétaires",

    seekerSteps: [
      "Découvrir",
      "Rechercher un bien",
      "Consulter les détails",
      "Contacter le propriétaire",
    ],

    ownerSteps: [
      "Créer une annonce",
      "Publier un bien",
      "Gérer les annonces",
      "Échanger avec les intéressés",
    ],

    flowPlaceholder: "Parcours utilisateur / structure de la plateforme",

    designTitle: "Donner vie à l'expérience.",
    designDescription:
      "Une interface claire et cohérente qui facilite la recherche de biens, la gestion des annonces et la communication entre les deux publics.",

    visualDirection: "Direction visuelle et système de design",
    typography: "Typographie et composants",
    interfaceDetails: "Détails de l'interface",

    finalProductTitle: "Une plateforme, deux espaces dédiés.",
    finalProductDescription:
      "Découvrez les interfaces conçues pour les personnes à la recherche d'un logement et les propriétaires qui gèrent leurs annonces.",

    visitorExperience: "Espace chercheur de logement",
    discover: "Découvrir",
    venueDiscovery: "Interface de découverte des biens",
    venueDetails: "Détails d'un bien",
    visitAvailability: "Résultats de recherche",

    ownerExperience: "Espace propriétaire",
    manage: "Gérer",
    ownerDashboard: "Tableau de bord propriétaire",
    listingManagement: "Gestion des annonces",
    ownerCalendar: "Gestion des biens",

    outcomeLabel: "Résultat",
    outcomeTitle:
      "Une expérience connectée pour découvrir et gérer des biens immobiliers.",

    outcomeDescription:
      "Sakynn rassemble les chercheurs de logement et les propriétaires au sein d'une même plateforme, simplifiant la recherche, l'achat et la location tout en offrant aux propriétaires les outils nécessaires pour gérer leurs annonces.",

    contribution: "Ma contribution",
    contributionTitle: "Design UX/UI & Développement Front-End",
    contributionDescription:
      "De la traduction des besoins du projet en interfaces intuitives jusqu'à l'intégration de l'expérience front-end.",

    footerRole: "Designer UX/UI & Développeuse Front-End",
    moreProjects: "Découvrir d'autres projets",
  },
};

const sectionIds = [
  "overview",
  "challenge",
  "strategy",
  "design",
  "product",
  "outcome",
];

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
      <div
        className={`overflow-hidden rounded-xl ${backgroundClassName} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`block h-auto w-full rounded-xl ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${backgroundClassName} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className={`${imageClassName} rounded-xl`}
      />
    </div>
  );
}

export default function SakynnPage() {
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

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans text-[#242424]">

      {/* Navigation */}

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
                aria-current={
                  activeSection === section.id ? "location" : undefined
                }
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

        {/* Overview */}

        <section
          id="overview"
          className="scroll-mt-28 pb-20 pt-24 md:pb-28 md:pt-28"
        >
          <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">

            <div>
              <h1 className="text-5xl font-medium tracking-[-0.065em] md:text-6xl lg:text-[76px]">
                Sakynn
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
              src="/images/sakynn/hero.png"
              alt={t.mainInterface}
              className="min-h-[300px] md:min-h-[556px]"
            />
          </div>
        </section>

        {/* Challenge */}

        <section
          id="challenge"
          className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28"
        >
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
                  <h3 className="mt-3 text-base font-medium">
                    {t.organizers}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    {t.organizersDescription}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-[#999999]">02</span>
                  <h3 className="mt-3 text-base font-medium">
                    {t.owners}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777777]">
                    {t.ownersDescription}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* UX Strategy */}

        <section
          id="strategy"
          className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28"
        >
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
                    <span
                      key={step}
                      className="rounded-full border border-[#DCDCDC] px-4 py-2 text-xs text-[#555555]"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    {t.ownersJourney}
                  </h3>
                  <span className="text-xs text-[#999999]">02</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.ownerSteps.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-[#DCDCDC] px-4 py-2 text-xs text-[#555555]"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* User flow */}

          <div className="mt-16">
            <ProjectImage
              src="/images/sakynn/user-flow.png"
              alt={t.flowPlaceholder}
              className="min-h-[480px] md:min-h-[650px] lg:min-h-[720px]"
              backgroundClassName="bg-transparent"
            />
          </div>
        </section>

        {/* UI Design */}

        <section
          id="design"
          className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28"
        >
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
              src="/images/sakynn/visual-direction.png"
              alt={t.visualDirection}
              natural
              className="rounded-xl"
              imageClassName="object-contain"
              backgroundClassName="bg-transparent"
            />
          </div>

          {/* Design foundation and component library */}

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">

            <ProjectImage
              src="/images/sakynn/design-foundation.png"
              alt="Design foundation"
              natural
              backgroundClassName="bg-transparent"
            />

            <ProjectImage
              src="/images/sakynn/typography.png"
              alt={t.typography}
              natural
              backgroundClassName="bg-transparent"
            />

            <ProjectImage
              src="/images/sakynn/components-library.png"
              alt="Components library"
              natural
              backgroundClassName="bg-transparent"
            />

          </div>
        </section>

        {/* Final Product */}

        <section
          id="product"
          className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28"
        >
          <SectionLabel number="04">{t.sections[4]}</SectionLabel>

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="max-w-xl text-3xl font-medium tracking-[-0.05em] md:text-5xl">
              {t.finalProductTitle}
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#777777]">
              {t.finalProductDescription}
            </p>

          </div>

          {/* Property seeker experience */}
  <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-medium">
                {t.ownerExperience}
              </h3>

              <span className="text-xs text-[#999999]">
                02 / {t.manage}
              </span>
            </div>
       <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.05fr_0.98fr] md:items-stretch">
  <div className="flex h-full items-center justify-center">
    <ProjectImage
      src="/images/sakynn/home.webp"
      alt="Property seeker home screen"
      natural
      backgroundClassName="bg-transparent"
      className="w-full"
    />
  </div>

  <div className="flex flex-col gap-4">
    <ProjectImage
      src="/images/sakynn/details.png"
      alt="Property details screen"
      natural
      backgroundClassName="bg-transparent"
    />
    <ProjectImage
      src="/images/sakynn/list.png"
      alt="Property search results"
      natural
      backgroundClassName="bg-transparent"
    />
  </div>
</div>

          {/* Property owner experience */}

          <div>

            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-medium">
                {t.ownerExperience}
              </h3>

              <span className="text-xs text-[#999999]">
                02 / {t.manage}
              </span>
            </div>

    <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.14fr_1fr]">
  {/* Left column: slightly bigger dashboard */}
  <div className="flex items-center">
    <ProjectImage
      src="/images/sakynn/owner-dashboard.webp"
      alt={t.ownerDashboard}
      natural
      backgroundClassName="bg-transparent"
      className="w-full"
      imageClassName="object-contain"
    />
  </div>

  {/* Right column: listings above messages */}
  <div className="flex flex-col gap-3">
    <ProjectImage
      src="/images/sakynn/owner-listings.webp"
      alt={t.listingManagement}
      natural
      backgroundClassName="bg-transparent"
    />

    <ProjectImage
      src="/images/sakynn/owner-message.png"
      alt="Owner messages interface"
      natural
      backgroundClassName="bg-transparent"
    />
  </div>
</div>
          </div>
        </section>

        {/* Outcome */}

        <section
          id="outcome"
          className="scroll-mt-28 border-t border-[#E3E3E3] py-20 md:py-28"
        >
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

                <p className="text-xs text-[#999999]">
                  {t.contribution}
                </p>

                <p className="mt-3 text-lg font-medium">
                  {t.contributionTitle}
                </p>

                <p className="mt-2 max-w-lg text-sm leading-7 text-[#777777]">
                  {t.contributionDescription}
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <footer className="border-t border-[#E3E3E3] py-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-medium">Zaineb Saied</p>
              <p className="mt-1 text-xs text-[#888888]">
                {t.footerRole}
              </p>
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