import { FadeIn } from "@/components/FadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Мария К.",
    age: "43 года",
    text: "Впервые за несколько лет нашла врача, который действительно выслушал меня. Оксана — профессионал с человеческим подходом. Прошла курс лечения, мигрени стали значительно реже.",
    initials: "МК",
  },
  {
    name: "Алексей Т.",
    age: "51 год",
    text: "Обратился с болями в шее, которые мучили несколько месяцев. После консультации и назначенного лечения — значительное улучшение уже через 2 недели. Рекомендую.",
    initials: "АТ",
  },
  {
    name: "Светлана Р.",
    age: "38 лет",
    text: "Помогла разобраться с тревожным состоянием после COVID. Очень деликатный и внимательный доктор. Никакой спешки — чувствуешь, что тебя слышат.",
    initials: "СР",
  },
  {
    name: "Дмитрий В.",
    age: "46 лет",
    text: "Долго искал хорошего специалиста в Магадане. Грамотная диагностика, подробные объяснения, реальное лечение без лишних назначений. Именно то, что нужно.",
    initials: "ДВ",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#F4F6F9]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
            ОТЗЫВЫ ПАЦИЕНТОВ
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-14">
            Что говорят
            <br />
            пациенты
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className="text-[#C9A96E] fill-[#C9A96E]"
                    />
                  ))}
                </div>
                <p className="text-[#2D3748] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center">
                    <span className="text-[#C9A96E] text-xs font-semibold">
                      {r.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-[#0A1628] text-sm">
                      {r.name}
                    </div>
                    <div className="text-[#718096] text-xs">{r.age}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-center text-[#718096] text-xs mt-10">
            Отзывы размещены с согласия пациентов. Имена и данные изменены.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
