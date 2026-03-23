import { FadeIn } from "@/components/FadeIn";
import { CheckCircle, Smartphone } from "lucide-react";

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

const phases = [
  {
    num: "ЭТАП 1",
    title: "Доверие и первый поток пациентов",
    desc: "Профессиональный сайт с правильной структурой, врачебными блоками доверия, SEO-оптимизацией и онлайн-записью. Пациенты приходят сами, без рекламы из уст в уста.",
  },
  {
    num: "ЭТАП 2",
    title: "Аналитика и контроль расписания",
    desc: "Подключение сквозной аналитики, источников трафика, CRM и воронки заявок. Вы видите, откуда пришёл каждый пациент и сколько стоит привлечение.",
  },
  {
    num: "ЭТАП 3",
    title: "ИИ-чат по услугам и симптомам",
    desc: "ИИ-ассистент, обученный на ваших услугах и частых вопросах пациентов. Отвечает 24/7, объясняет симптомы, маршрутизирует к нужной услуге, снижает нагрузку на запись.",
  },
  {
    num: "ЭТАП 4",
    title: "Бот и мобильное приложение",
    desc: "Telegram-бот или мобильное приложение для записи, напоминаний, уведомлений о готовности результатов, повторных обращений и удержания пациентов.",
  },
];

export function ProtoLayer() {
  return (
    <>
      {/* === СЕКЦИЯ 1: ТЁМНАЯ — ОБРАЗЕЦ САЙТА === */}
      <section id="proto" className="py-24 bg-[#0A1628] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-4 block">
              ДЕМОНСТРАЦИОННЫЙ САЙТ
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold leading-tight mb-6 max-w-3xl">
              Это — образец сайта частной практики.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#9aafc7] text-lg max-w-2xl mb-10">
              Показываем, как может выглядеть цифровое присутствие врача-невролога. Если вы врач и хотите инструмент, который приносит пациентов и работает без посредников — расскажите о своей задаче.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="grid sm:grid-cols-2 gap-3 mb-14 max-w-2xl">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                  <span className="text-[#cdd9e8] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4A7FA5] mb-5">
              В САМОМ САЙТЕ ВКЛЮЧЕНО
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-14">
              {included.map(([title, sub]) => (
                <div
                  key={title}
                  className="border border-white/10 rounded-xl p-4 hover:border-[#C9A96E]/40 transition-colors"
                >
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  <p className="text-[#7a8fa8] text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
            </div>
          </FadeIn>
        </div>
      </section>

      {/* === СЕКЦИЯ 2: КАК САЙТ СТАНОВИТСЯ СИСТЕМОЙ === */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
              КАК САЙТ СТАНОВИТСЯ СИСТЕМОЙ
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-4 max-w-3xl">
              4 этапа, которые превращают сайт в поток пациентов
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#718096] text-lg max-w-2xl mb-14">
              Начинается с сайта доверия. Развивается в цифровую экосистему, которая работает без вашего участия.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {phases.map((phase, i) => (
              <FadeIn key={phase.num} delay={0.1 + i * 0.08}>
                <div className="bg-white rounded-2xl p-7 h-full border border-[#e8ecf0] hover:border-[#C9A96E]/40 transition-colors">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C9A96E] mb-3 block">
                    {phase.num}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-[#0A1628] mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-[#718096] text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA-баннер */}
          <FadeIn delay={0.45}>
            <div className="bg-[#0A1628] rounded-2xl p-8 flex items-center gap-4">
              <Smartphone size={22} className="text-[#C9A96E] flex-shrink-0" />
              <p className="text-white text-base leading-relaxed">
                Сайт адаптирован под смартфоны, планшеты и компьютеры — пациент найдёт вас с любого устройства.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
