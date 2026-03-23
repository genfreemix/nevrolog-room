import { FadeIn } from "@/components/FadeIn";
import { CalendarCheck, ClipboardList, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    num: "01",
    title: "Выберите время",
    desc: "Запись ведётся через удобный онлайн-календарь. Выберите подходящий день и время — подтверждение придёт сразу.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Заполните форму",
    desc: "Кратко опишите жалобы. Это поможет врачу подготовиться к встрече и уделить максимум времени именно вашей ситуации.",
  },
  {
    icon: CheckCircle,
    num: "03",
    title: "Получите подтверждение",
    desc: "Вам придёт напоминание о записи. Приём офлайн или онлайн — на ваш выбор.",
  },
];

export function HowToBook() {
  return (
    <section id="book" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M0,100 C300,75 600,125 1200,100" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,240 C300,215 600,265 1200,240" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.15"/>
          <path d="M0,390 C300,365 600,415 1200,390" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,530 C300,505 600,555 1200,530" stroke="#4A7FA5" strokeWidth="1.3" opacity="0.13"/>
          <path d="M0,650 C300,625 600,675 1200,650" stroke="#4A7FA5" strokeWidth="1.2" opacity="0.11"/>
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
            КАК ЗАПИСАТЬСЯ
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-14">
            Три простых шага
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-full w-full h-px bg-gray-100 -translate-x-4 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F6F9] flex items-center justify-center mb-6 relative">
                    <step.icon size={22} className="text-[#4A7FA5]" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0A1628] flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#C9A96E]">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#0A1628] mb-3 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-[#718096] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Calendly placeholder */}
        <FadeIn delay={0.4}>
          <div className="bg-[#F4F6F9] rounded-2xl overflow-hidden">
            <div className="p-10 flex flex-col items-center justify-center min-h-[280px] text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0A1628] flex items-center justify-center mb-5">
                <CalendarCheck size={28} className="text-[#C9A96E]" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#0A1628] mb-3">
                Онлайн-запись
              </h3>
              <p className="text-[#718096] text-sm mb-6 max-w-sm">
                Здесь будет встроен Calendly — выбор времени прямо на сайте,
                без звонков и ожидания.
              </p>
              <a
                href="https://wa.me/79141234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#0A1628] text-white text-sm font-medium rounded-full hover:bg-[#4A7FA5] transition-colors"
              >
                Записаться через WhatsApp
              </a>
              <p className="mt-4 text-[#718096] text-xs">
                Или позвоните:{" "}
                <a
                  href="tel:+79141234567"
                  className="text-[#4A7FA5] hover:underline"
                >
                  +7 (914) 123-45-67
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
