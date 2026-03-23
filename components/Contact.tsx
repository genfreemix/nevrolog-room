import { FadeIn } from "@/components/FadeIn";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F4F6F9]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
            КОНТАКТЫ
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-14">
            Как связаться
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            <FadeIn delay={0.1}>
              <a
                href="tel:+79141234567"
                className="flex items-center gap-4 p-5 bg-white rounded-2xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#C9A96E]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-widest uppercase text-[#718096] mb-1">
                    Телефон
                  </div>
                  <div className="font-semibold text-[#0A1628] group-hover:text-[#4A7FA5] transition-colors">
                    +7 (914) 123-45-67
                  </div>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.15}>
              <a
                href="https://wa.me/79141234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white rounded-2xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] tracking-widest uppercase text-[#718096] mb-1">
                    WhatsApp
                  </div>
                  <div className="font-semibold text-[#0A1628] group-hover:text-[#4A7FA5] transition-colors">
                    Написать в WhatsApp
                  </div>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="https://t.me/dr_nazarenko"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white rounded-2xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2AABEE] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] tracking-widests uppercase text-[#718096] mb-1">
                    Telegram
                  </div>
                  <div className="font-semibold text-[#0A1628] group-hover:text-[#4A7FA5] transition-colors">
                    @dr_nazarenko
                  </div>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#F4F6F9] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#4A7FA5]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-widest uppercase text-[#718096] mb-1">
                    Адрес кабинета
                  </div>
                  <div className="font-semibold text-[#0A1628]">
                    г. Магадан, ул. [Адрес кабинета]
                  </div>
                  <div className="text-[#718096] text-sm mt-0.5">
                    Уточняется при записи
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#F4F6F9] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#4A7FA5]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-widest uppercase text-[#718096] mb-1">
                    Приём
                  </div>
                  <div className="font-semibold text-[#0A1628]">
                    Пн–Пт: 10:00 – 18:00
                  </div>
                  <div className="text-[#718096] text-sm mt-0.5">
                    Сб: по записи
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Map placeholder */}
          <FadeIn delay={0.3} direction="left">
            <div className="bg-[#0A1628] rounded-2xl overflow-hidden h-full min-h-[360px] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#C9A96E"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative text-center p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#C9A96E] flex items-center justify-center mx-auto mb-5">
                  <MapPin size={24} className="text-[#0A1628]" />
                </div>
                <div className="text-white font-playfair text-xl font-semibold mb-2">
                  Магадан
                </div>
                <div className="text-[#718096] text-sm mb-6">
                  Карта будет добавлена при публикации
                </div>
                <a
                  href="https://maps.google.com/?q=Магадан"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A96E]/40 text-[#C9A96E] text-sm rounded-full hover:bg-[#C9A96E]/10 transition-colors"
                >
                  Открыть в Google Maps
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
