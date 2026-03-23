import { FadeIn } from "@/components/FadeIn";
import { CheckCircle } from "lucide-react";

const outcomes = [
  "Сайт завершён — пациенты находят вас в поиске",
  "Онлайн-запись работает без администратора",
  "Доверие сформировано до первого звонка",
  "Вы контролируете расписание и поток пациентов",
];

const included = [
  ["Профессиональный дизайн", "Европейская эстетика частной клиники"],
  ["Онлайн-запись", "Calendly или собственный календарь"],
  ["SEO-оптимизация", "Пациенты находят вас в поиске"],
  ["Адаптивность", "Работает на телефоне и компьютере"],
  ["Скорость", "Деплой на Vercel — мгновенная загрузка"],
  ["CRM и аналитика", "Понимание откуда приходят пациенты"],
];

export function ProtoLayer() {
  return (
    <section
      id="proto"
      className="py-24 bg-[#0A1628] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#C9A96E]/10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-[#4A7FA5]/20 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <FadeIn>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-6 block">
                ДЕМОНСТРАЦИОННЫЙ САЙТ
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                Это — образец
                <br />
                сайта частной
                <br />
                <span className="text-[#C9A96E]">практики.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#718096] leading-relaxed mb-8">
                Показываем, как может выглядеть цифровое присутствие
                врача-невролога. Если вы врач и хотите инструмент, который
                приносит пациентов и работает без посредников — расскажите о
                своей задаче.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-3 mb-10">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[#C9A96E] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-white text-sm">{o}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A96E] text-[#0A1628] font-semibold text-sm rounded-full hover:bg-[#d4b37a] transition-colors"
                >
                  Хочу такой сайт
                </a>
                <a
                  href="https://kayur-travel-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm rounded-full hover:bg-white/5 transition-colors"
                >
                  Узнать о подходе →
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: included list */}
          <FadeIn delay={0.3} direction="left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-[#C9A96E] text-[11px] tracking-widest uppercase mb-6">
                В ТАКОМ САЙТЕ ВКЛЮЧЕНО
              </div>
              {included.map(([title, sub], i) => (
                <div
                  key={i}
                  className={`flex justify-between items-start py-3.5 ${
                    i < included.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="text-white text-sm font-medium">{title}</span>
                  <span className="text-[#718096] text-xs text-right max-w-[140px]">
                    {sub}
                  </span>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-white text-sm mb-1">
                  Подходит для любой специальности
                </div>
                <div className="text-[#718096] text-xs">
                  Невролог, кардиолог, дерматолог, психолог и др.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
