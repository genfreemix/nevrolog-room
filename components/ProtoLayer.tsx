import { FadeIn } from "@/components/FadeIn";
import { CheckCircle, Smartphone, Zap, Brain } from "lucide-react";

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

const capabilities = [
  {
    icon: Smartphone,
    tag: "УСТРОЙСТВА",
    title: "Работает на всех устройствах",
    desc: "Сайт адаптирован под смартфоны, планшеты и компьютеры — удобство сохраняется на любом экране.",
    points: [
      "Смартфоны — главный источник трафика",
      "Планшеты — изучение и сравнение",
      "Компьютеры — запись и оформление",
    ],
  },
  {
    icon: Zap,
    tag: "МАСШТАБ",
    title: "Можно развить в полноценную систему",
    desc: "Сайт — это база. На неё надстраиваются инструменты, умножающие результат.",
    points: [
      "Чат-бот для обработки записей",
      "ИИ-чат как эксперт по симптомам",
      "Автоматика напоминаний и удержания",
    ],
  },
  {
    icon: Brain,
    tag: "ИИ",
    title: "ИИ, который знает вашу практику",
    desc: "ИИ обучается на ваших услугах и консультирует пациентов, снижая нагрузку на запись.",
    points: [
      "Отвечает на вопросы 24/7",
      "Знает ваши услуги и цены",
      "Ведёт пациента к записи",
    ],
  },
];

export function ProtoLayer() {
  return (
    <>
      {/* === СЕКЦИЯ 1: ТЁМНАЯ — ОБРАЗЕЦ САЙТА === */}
      <section
        id="proto"
        className="py-24 bg-[#0A1628] text-white"
      >
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

          {/* Outcomes */}
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

          {/* Included table */}
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

          {/* CTAs */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#lead"
                className="px-7 py-3 bg-[#C9A96E] text-[#0A1628] rounded-full font-semibold text-sm hover:bg-[#e0bf85] transition-colors"
              >
                Хочу такой сайт
              </a>
              <a
                href="https://kayur-travel-demo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border border-white/20 text-white rounded-full font-semibold text-sm hover:border-white/50 transition-colors"
              >
                Узнать о подходе →
              </a>
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
            <div className="bg-[#0A1628] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-white font-semibold text-lg mb-1">
                  Это не просто сайт.
                </p>
                <p className="text-[#9aafc7] text-sm">
                  Это система привлечения, контроля и роста частной медицинской практики. Начните с этапа 1 — остальное нарастёт.
                </p>
              </div>
              <a
                href="#lead"
                className="flex-shrink-0 px-7 py-3 bg-[#C9A96E] text-[#0A1628] rounded-full font-semibold text-sm hover:bg-[#e0bf85] transition-colors"
              >
                Хочу такой сайт
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* === СЕКЦИЯ 3: ВОЗМОЖНОСТИ === */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M0,90 C300,65 600,115 1200,90" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
            <path d="M0,240 C300,215 600,265 1200,240" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.15"/>
            <path d="M0,410 C300,385 600,435 1200,410" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
            <path d="M0,570 C300,545 600,595 1200,570" stroke="#4A7FA5" strokeWidth="1.3" opacity="0.14"/>
            <path d="M0,720 C300,695 600,745 1200,720" stroke="#4A7FA5" strokeWidth="1.2" opacity="0.11"/>
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
              ВОЗМОЖНОСТИ
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-4 max-w-3xl">
              Система адаптируется под вашу практику
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#718096] text-lg max-w-2xl mb-14">
              Сайт — это начало. На него надстраиваются инструменты, умножающие результат.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <FadeIn key={cap.tag} delay={0.1 + i * 0.1}>
                  <div className="bg-[#F4F6F9] rounded-2xl p-7 h-full hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[#C9A96E]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.22em] text-[#4A7FA5] mb-2 block">
                      {cap.tag}
                    </span>
                    <h3 className="font-playfair text-xl font-semibold text-[#0A1628] mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-[#718096] text-sm leading-relaxed mb-5">{cap.desc}</p>
                    <ul className="space-y-2">
                      {cap.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-1.5 flex-shrink-0" />
                          <span className="text-[#4a5568] text-xs">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Финальный двойной CTA */}
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#lead"
                className="px-8 py-4 bg-[#0A1628] text-white rounded-full font-semibold text-sm hover:bg-[#162040] transition-colors"
              >
                Разобрать под мою практику
              </a>
              <a
                href="#lead"
                className="px-8 py-4 border-2 border-[#0A1628] text-[#0A1628] rounded-full font-semibold text-sm hover:bg-[#0A1628] hover:text-white transition-colors"
              >
                Получить структуру сайта
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
