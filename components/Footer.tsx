import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "О враче" },
  { href: "/#services", label: "Услуги" },
  { href: "/#book", label: "Запись" },
  { href: "/#contact", label: "Контакты" },
  { href: "/#proto", label: "О сайте" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center">
                <span className="text-[#C9A96E] text-xs font-bold font-playfair">
                  О
                </span>
              </div>
              <div>
                <div className="font-playfair font-semibold text-white text-sm">
                  Назаренко
                </div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#718096]">
                  Невролог · Магадан
                </div>
              </div>
            </div>
            <p className="text-[#718096] text-xs max-w-xs leading-relaxed">
              Частная практика. Консультации по неврологии в Магадане.
              Без очередей, без посредников.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#718096] text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#718096] text-xs">
            © {new Date().getFullYear()} Оксана Назаренко. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-[#718096] text-xs hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <span className="text-[#718096]/40">·</span>
            <a
              href="/#proto"
              className="text-[#C9A96E] text-xs hover:text-[#d4b37a] transition-colors"
            >
              ProtoSite — демо
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-[#718096]/60 text-[10px] leading-relaxed max-w-2xl mx-auto">
          Информация на сайте носит ознакомительный характер и не является
          медицинской рекомендацией. Для постановки диагноза и назначения
          лечения необходима очная консультация специалиста.
        </p>
      </div>
    </footer>
  );
}
