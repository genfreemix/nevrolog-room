import { FadeIn } from "@/components/FadeIn";
import { GraduationCap, Award, Clock } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    label: "МГМУ им. Сеченова",
    sub: "Диплом врача-невролога",
  },
  {
    icon: Award,
    label: "I квалификационная категория",
    sub: "Неврология",
  },
  {
    icon: Clock,
    label: "12 лет практики",
    sub: "Магадан",
  },
];

const specializations = [
  "Лечение хронической боли",
  "Сосудистые заболевания ЦНС",
  "Постковидная реабилитация",
  "Вертеброневрология",
];

export function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M0,80 C300,55 600,105 1200,80" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,200 C300,175 600,225 1200,200" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.15"/>
          <path d="M0,340 C300,315 600,365 1200,340" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,480 C300,455 600,505 1200,480" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.14"/>
          <path d="M0,600 C300,575 600,625 1200,600" stroke="#4A7FA5" strokeWidth="1.3" opacity="0.12"/>
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div>
            <FadeIn>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
                О ВРАЧЕ
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-8">
                Оксана
                <br />
                Назаренко
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#2D3748] leading-relaxed mb-5">
                Врач-невролог с 12-летним опытом. Специализируется на
                диагностике и лечении заболеваний нервной системы, реабилитации
                после неврологических нарушений.
              </p>
              <p className="text-[#2D3748] leading-relaxed mb-5">
                Работает в формате частной практики — без очередей и
                бюрократии. Каждый пациент получает полноценное время врача,
                подробное объяснение диагноза и реалистичный план лечения.
              </p>
              <p className="text-[#2D3748] leading-relaxed mb-10">
                Помогает при хронических головных болях, мигрени, болях в спине
                и шее, нарушениях сна, тревожных расстройствах и последствиях
                COVID-19.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4">
                {credentials.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F4F6F9]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                      <c.icon size={18} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A1628] text-sm">
                        {c.label}
                      </div>
                      <div className="text-[#718096] text-xs mt-0.5">
                        {c.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: specializations + stats + quote */}
          <div>
            <FadeIn delay={0.2}>
              <div className="bg-[#0A1628] rounded-2xl p-8 mb-6">
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E] mb-6">
                  Специализации
                </div>
                <div className="flex flex-col gap-3">
                  {specializations.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                      <span className="text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: "12+", label: "лет опыта" },
                  { value: "500+", label: "пациентов" },
                  { value: "I кат.", label: "квалификация" },
                  { value: "г. Магадан", label: "частная практика" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 border border-gray-100 rounded-xl text-center"
                  >
                    <div className="font-playfair text-2xl font-semibold text-[#0A1628] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#718096]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="p-5 border-l-2 border-[#C9A96E] bg-[#F4F6F9] rounded-r-xl">
                <p className="text-[#2D3748] text-sm leading-relaxed italic">
                  «Моя задача — чтобы вы вышли с приёма с пониманием того, что
                  происходит с вашим здоровьем, и с реальным планом действий.»
                </p>
                <div className="mt-3 text-[#718096] text-xs">
                  — Оксана Назаренко
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
