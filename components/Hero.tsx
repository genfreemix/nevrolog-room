import { FadeIn } from "@/components/FadeIn";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-white flex items-center overflow-hidden pt-20"
    >
      {/* Split background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4F6F9] -z-10 hidden md:block" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full border border-[#C9A96E]/15 -z-10 hidden md:block" />
      <div className="absolute top-1/4 right-1/3 w-44 h-44 rounded-full border border-[#4A7FA5]/10 -z-10 hidden md:block" />

      {/* Wave decorations on white area */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 900" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M0,70 C200,50 400,90 600,70 S1000,50 1200,70" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,160 C200,140 400,180 600,160 S1000,140 1200,160" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.15"/>
          <path d="M0,260 C200,240 400,280 600,260 S1000,240 1200,260" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,360 C200,340 400,380 600,360 S1000,340 1200,360" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.14"/>
          <path d="M0,460 C200,440 400,480 600,460 S1000,440 1200,460" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.16"/>
          <path d="M0,560 C200,540 400,580 600,560 S1000,540 1200,560" stroke="#4A7FA5" strokeWidth="1.3" opacity="0.13"/>
          <path d="M0,660 C200,640 400,680 600,660 S1000,640 1200,660" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.14"/>
          <path d="M0,760 C200,740 400,780 600,760 S1000,740 1200,760" stroke="#4A7FA5" strokeWidth="1.3" opacity="0.12"/>
          <path d="M0,860 C200,840 400,880 600,860 S1000,840 1200,860" stroke="#4A7FA5" strokeWidth="1.2" opacity="0.11"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* DEMO announcement pill */}
            <FadeIn delay={0.05}>
              <a
                href="#proto"
                className="inline-flex items-center gap-2 mb-6 bg-[#0A1628] hover:bg-[#162040] transition-colors rounded-full pl-1 pr-4 py-1 group"
              >
                <span className="text-[9px] font-bold tracking-[0.15em] bg-[#C9A96E] text-[#0A1628] px-2.5 py-1 rounded-full">
                  DEMO
                </span>
                <span className="text-xs text-[#9aafc7] group-hover:text-white transition-colors">
                  Образец сайта для частной практики врача
                </span>
                <span className="text-[#C9A96E] text-xs font-semibold">→</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-6 block">
                Частная практика · Магадан
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold text-[#0A1628] leading-[1.05] mb-6">
                Врач,
                <br />
                которому
                <br />
                <span className="text-[#4A7FA5]">доверяют.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-[#718096] leading-relaxed mb-8 max-w-md">
                Оксана Назаренко — частный врач-невролог в Магадане. Без
                очередей, без посредников. Только вы и специалист, которому
                можно задать любой вопрос.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <a
                  href="/#book"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1628] text-white text-sm font-medium rounded-full hover:bg-[#4A7FA5] transition-colors duration-300"
                >
                  Записаться на приём
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#0A1628] text-[#0A1628] text-sm font-medium rounded-full hover:bg-[#F4F6F9] transition-colors duration-300"
                >
                  Услуги и цены
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
                <div>
                  <div className="font-playfair text-2xl font-semibold text-[#0A1628]">
                    12+
                  </div>
                  <div className="text-xs text-[#718096] mt-0.5">лет практики</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div>
                  <div className="font-playfair text-2xl font-semibold text-[#0A1628]">
                    500+
                  </div>
                  <div className="text-xs text-[#718096] mt-0.5">пациентов</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div>
                  <div className="font-playfair text-2xl font-semibold text-[#0A1628]">
                    от 3 000 ₽
                  </div>
                  <div className="text-xs text-[#718096] mt-0.5">консультация</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Doctor photo placeholder */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative flex items-center justify-center h-[480px] md:h-[560px]">
              {/* Main portrait card */}
              <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-2xl bg-[#0A1628] overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A96E]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-[#C9A96E]/35 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 40 48" className="w-10 h-12" fill="none">
                      <ellipse cx="20" cy="14" rx="8" ry="8.5" fill="white" fillOpacity="0.18"/>
                      <path d="M2,48 C2,32 9,26 20,26 C31,26 38,32 38,48" fill="white" fillOpacity="0.18"/>
                    </svg>
                  </div>
                  <div className="text-center px-6">
                    <div className="font-playfair text-white text-lg font-medium">
                      Оксана Назаренко
                    </div>
                    <div className="text-[#C9A96E] text-xs tracking-widest uppercase mt-1">
                      Невролог
                    </div>
                    <div className="mt-4 text-[#718096] text-xs leading-relaxed">
                      [здесь будет
                      <br />
                      фото врача]
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#C9A96E]/10 to-transparent" />
              </div>

              {/* Floating badge: price */}
              <div className="absolute top-8 -right-2 md:right-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                <div className="text-[11px] tracking-widest text-[#718096] uppercase mb-0.5">
                  Первичный приём
                </div>
                <div className="font-semibold text-[#0A1628]">от 3 000 ₽</div>
              </div>

              {/* Floating badge: available */}
              <div className="absolute bottom-12 -left-2 md:left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-[#2D3748]">Запись открыта</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#718096]">
        <span className="text-[10px] tracking-widest uppercase">Далее</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
