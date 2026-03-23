import { FadeIn } from "@/components/FadeIn";
import { Brain, Zap, Activity, Bone, Heart, Shield } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Консультация невролога",
    desc: "Первичный осмотр, сбор анамнеза, постановка диагноза. Подробный разбор жалоб и составление плана лечения.",
    price: "от 3 000 ₽",
    tag: "Популярное",
  },
  {
    icon: Zap,
    title: "Лечение головной боли",
    desc: "Диагностика типа боли, медикаментозная и немедикаментозная коррекция. Работа с хроническими головными болями.",
    price: "от 3 500 ₽",
    tag: null,
  },
  {
    icon: Activity,
    title: "Коррекция мигрени",
    desc: "Индивидуальная программа профилактики мигренозных атак. Подбор терапии с учётом образа жизни.",
    price: "от 4 000 ₽",
    tag: null,
  },
  {
    icon: Bone,
    title: "Боли в спине и шее",
    desc: "Лечение цервикалгии, люмбаго, межпозвоночных нарушений. Назначение физиотерапии и ЛФК.",
    price: "от 3 500 ₽",
    tag: null,
  },
  {
    icon: Heart,
    title: "Неврозы и тревожные расстройства",
    desc: "Работа с тревогой, паническими атаками, хроническим стрессом. Мягкий деликатный подход.",
    price: "от 4 000 ₽",
    tag: null,
  },
  {
    icon: Shield,
    title: "Постковидная реабилитация",
    desc: "Восстановление когнитивных функций, работа с астенией и нарушениями после перенесённого COVID-19.",
    price: "от 4 500 ₽",
    tag: null,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#F4F6F9]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
            УСЛУГИ
          </span>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight">
              Направления
              <br />
              работы
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="/#book"
              className="text-sm text-[#4A7FA5] hover:text-[#0A1628] transition-colors"
            >
              Записаться на приём →
            </a>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300 relative">
                {s.tag && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#C9A96E]/10 text-[#C9A96E] text-[10px] font-semibold tracking-wide uppercase rounded-full">
                    {s.tag}
                  </div>
                )}
                <div className="w-11 h-11 rounded-xl bg-[#F4F6F9] flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[#4A7FA5]" />
                </div>
                <h3 className="font-semibold text-[#0A1628] mb-3 text-base leading-snug">
                  {s.title}
                </h3>
                <p className="text-[#718096] text-sm leading-relaxed flex-1 mb-5">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-semibold text-[#0A1628] text-sm">
                    {s.price}
                  </span>
                  <a
                    href="/#book"
                    className="text-[#4A7FA5] text-xs hover:text-[#0A1628] transition-colors"
                  >
                    Записаться →
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-10 bg-[#0A1628] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-medium mb-1">
                Не нашли нужную услугу?
              </div>
              <div className="text-[#718096] text-sm">
                Опишите жалобы — разберём на консультации
              </div>
            </div>
            <a
              href="/#book"
              className="flex-shrink-0 px-6 py-3 bg-[#C9A96E] text-[#0A1628] text-sm font-semibold rounded-full hover:bg-[#d4b37a] transition-colors"
            >
              Записаться
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
