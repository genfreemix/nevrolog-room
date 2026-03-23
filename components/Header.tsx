"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "О враче" },
  { href: "/#services", label: "Услуги" },
  { href: "/#book", label: "Запись" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/#contact", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center">
            <span className="text-[#C9A96E] text-xs font-bold font-playfair">О</span>
          </div>
          <div>
            <div className="font-playfair font-semibold text-[#0A1628] text-sm leading-none">
              Назаренко
            </div>
            <div className="text-[10px] tracking-[0.15em] uppercase text-[#718096]">
              Невролог
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#2D3748] hover:text-[#0A1628] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/#proto"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C9A96E]/40 text-[#C9A96E] text-[10px] font-semibold tracking-[0.1em] uppercase hover:bg-[#C9A96E]/5 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
            DEMO
          </a>
          <a
            href="/#book"
            className="hidden md:inline-flex px-4 py-2 bg-[#0A1628] text-white text-sm rounded-full hover:bg-[#4A7FA5] transition-colors"
          >
            Записаться
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0A1628]"
            aria-label="Меню"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#2D3748] text-base py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#book"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex justify-center px-4 py-3 bg-[#0A1628] text-white text-sm rounded-full"
          >
            Записаться на приём
          </a>
          <a
            href="/#proto"
            onClick={() => setIsOpen(false)}
            className="inline-flex justify-center items-center gap-2 px-4 py-2 border border-[#C9A96E]/40 text-[#C9A96E] text-xs rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
            ЭТО ДЕМО-САЙТ
          </a>
        </div>
      )}
    </header>
  );
}
