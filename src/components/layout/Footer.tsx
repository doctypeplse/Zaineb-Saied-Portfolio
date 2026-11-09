"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";

const socialLinks = [
  {
  name: "LinkedIn",
  href: "https://www.linkedin.com/in/zainebsaied-a3a344316/",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11H3.5V9Zm5.5 0h3.3v1.5h.1A3.6 3.6 0 0 1 15.7 8c3.5 0 4.2 2.2 4.2 5.1V20h-3.5v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9V9Z" />
    </svg>
  ),
},
  {
    name: "Behance",
    href: "https://www.behance.net/zainebsaied",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.8 11.2c1.4-.6 2.1-1.5 2.1-3 0-2.6-1.9-3.6-4.4-3.6H1v15h5.8c2.8 0 5.2-1.3 5.2-4.3 0-2-1.1-3.5-3.2-4.1ZM4.3 7.2h2c1 0 1.9.3 1.9 1.5 0 1.1-.8 1.6-1.8 1.6H4.3V7.2Zm2.2 9.8H4.3v-4.1h2.3c1.3 0 2.2.6 2.2 2s-.9 2.1-2.3 2.1ZM16 8h5V6h-5v2Zm7 6.3c0-3.5-1.8-5.8-5.3-5.8-3.2 0-5.5 2.4-5.5 5.6 0 3.4 2.1 5.7 5.5 5.7 2.5 0 4.5-1.2 5-3.7h-3c-.3.9-1 1.3-2 1.3-1.5 0-2.3-.9-2.4-2.4H23v-.7Zm-7.6-1.4c.2-1.2 1-1.9 2.3-1.9 1.2 0 2 .8 2.1 1.9h-4.4Z" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zainebsaied20%40gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.5 5.2A2.5 2.5 0 0 1 7 3.1l5 3.8 5-3.8a2.5 2.5 0 0 1 3.5 2.1v13.3a1.5 1.5 0 0 1-1.5 1.5h-1.8V8.1L12 12l-6-3.9V20H5a1.5 1.5 0 0 1-1.5-1.5V5.2Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";

  const navLinks = [
    {
      label: t.nav.home,
      href: isAboutPage ? "/#top" : "#top",
    },
    {
      label: t.nav.work,
      href: isAboutPage ? "/#work" : "#work",
    },
    {
      label: t.nav.about,
      href: "/about",
    },
  ];

  return (
    <footer className="w-full bg-[#F1F1F1]">
      <div className="mx-2 h-px bg-[#E8E8E8] md:mx-4" />

      <div className="w-full px-6 pt-[50px] pb-5 md:px-12 lg:px-16">
        <div className="flex w-full items-center justify-between">
          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#292929] transition-colors duration-300 hover:text-[#888888]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex flex-1 items-center justify-end gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="h-5 w-5 text-[#242424] transition-all duration-300 hover:-translate-y-1 hover:text-[#888888]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-[11px] text-[#999999]">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}