"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Нужно ли направление от терапевта?",
    a: "Нет. Это частная практика — вы записываетесь напрямую к врачу без каких-либо направлений и формальностей.",
  },
  {
    q: "Что взять на первичный приём?",
    a: "Паспорт, результаты предыдущих обследований (если есть), а также список текущих лекарств, если вы что-то принимаете.",
  },
  {
    q: "Как проходит первичная консультация?",
    a: "Осмотр, подробный сбор анамнеза, постановка диагноза, назначение лечения или дообследований. Первичный приём занимает 50–60 минут — времени хватает, чтобы разобраться в ситуации.",
  },
  {
    q: "Можно ли получить консультацию онлайн?",
    a: "Да. Первичные и повторные консультации доступны в формате видеозвонка — удобно, если вы не можете приехать лично.",
  },
  {
    q: "Сколько стоит консультация?",
    a: "Первичная консультация — от 3 000 ₽. Повторная — от 2 500 ₽. Точная стоимость зависит от сложности случая.",
  },
  {
    q: "Как долго ждать приём?",
    a: "Обычно запись доступна в течение 1–3 рабочих дней. Срочные консультации согласовываются индивидуально.",
  },
  {
    q: "Вы работаете с детьми?",
    a: "Приём ведётся для взрослых пациентов (18+). Для детей рекомендую обратиться к детскому неврологу.",
  },
  {
    q: "Есть ли возможность вызвать врача на дом?",
    a: "Рассматривается в индивидуальном порядке. Свяжитесь через контактную форму или WhatsApp, и мы согласуем.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M0,60 C250,40 500,80 1200,60" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,220 C250,200 500,240 1200,220" stroke="#4A7FA5" strokeWidth="1.4" opacity="0.15"/>
          <path d="M0,390 C250,370 500,410 1200,390" stroke="#4A7FA5" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,560 C250,540 500,580 1200,560" stroke="#4A7FA5" strokeWidth="1.3" opacity="0.13"/>
        </svg>
      </div>
      <div className="relative max-w-3xl mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
            ЧАСТО СПРАШИВАЮТ
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-14">
            Ответы на вопросы
          </h2>
        </FadeIn>

        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-start gap-4 text-left group"
                >
                  <span className="font-medium text-[#0A1628] text-sm md:text-base group-hover:text-[#4A7FA5] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-[#718096] transition-transform duration-300 mt-0.5 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <p className="mt-4 text-[#718096] text-sm leading-relaxed pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-12 p-6 bg-[#F4F6F9] rounded-2xl text-center">
            <p className="text-[#2D3748] text-sm mb-4">
              Не нашли ответ на свой вопрос?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white text-sm rounded-full hover:bg-[#4A7FA5] transition-colors"
            >
              Задать вопрос
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
