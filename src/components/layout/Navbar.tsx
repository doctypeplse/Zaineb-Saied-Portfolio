"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";

const navItems = [
  { key: "home", href: "/", hash: "top" },
  { key: "work", href: "/", hash: "work" },
  { key: "about", href: "/about", hash: "" },
] as const;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
        setScrolledPastHero(true);
        return;
      }

      const projectsSection = document.getElementById("work");

      if (!projectsSection) return;

      const projectsTop = projectsSection.getBoundingClientRect().top;

      setScrolledPastHero(projectsTop <= 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className="
        fixed top-0 left-0 z-50 w-full
        transition-colors duration-75 ease-out
      "
      style={{
        backgroundColor: scrolledPastHero
          ? "#F1F1F1"
          : "transparent",
      }}
    >
      <nav className="flex w-full flex-row items-center justify-between px-6 py-5 md:px-12 lg:px-16">

        {/* Navigation links */}
        <div className="flex flex-row items-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={
                item.hash
                  ? `${item.href}#${item.hash}`
                  : item.href
              }
              className="
                text-sm font-medium text-[#292929]
                transition-colors duration-300
                hover:text-[#999999]
              "
            >
              {t.nav[item.key]}
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
  );
}