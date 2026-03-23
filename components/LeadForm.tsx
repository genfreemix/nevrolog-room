"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  specialty: string;
  city: string;
  contact: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export function LeadForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    specialty: "",
    city: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace with your real Formspree endpoint
      const res = await fetch("https://formspree.io/f/xwkgzpjk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="lead" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
            ДЛЯ ВРАЧЕЙ
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-4">
            Расскажите
            <br />о задаче
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#718096] mb-10 max-w-lg">
            Опишем структуру сайта под вашу специальность. Конкретный план —
            не презентация. Ответим в течение рабочего дня.
          </p>
        </FadeIn>

        {status === "sent" ? (
          <FadeIn>
            <div className="p-10 bg-[#F4F6F9] rounded-2xl text-center">
              <div className="w-14 h-14 rounded-full bg-[#0A1628] flex items-center justify-center mx-auto mb-5">
                <Send size={22} className="text-[#C9A96E]" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#0A1628] mb-3">
                Заявка отправлена
              </h3>
              <p className="text-[#718096] text-sm">
                Свяжемся в течение рабочего дня с конкретным предложением.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#718096] mb-1.5 block">
                    Имя или название практики
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#718096] mb-1.5 block">
                    Специальность
                  </label>
                  <input
                    name="specialty"
                    value={form.specialty}
                    onChange={handleChange}
                    placeholder="Невролог, кардиолог..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#718096] mb-1.5 block">
                    Город
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Ваш город"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#718096] mb-1.5 block">
                    WhatsApp или Telegram
                  </label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    placeholder="+7 ... или @username"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#4A7FA5] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#718096] mb-1.5 block">
                  В чём сложность вашей задачи
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Расскажите о практике: что сейчас не работает, как привлекаете пациентов..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#4A7FA5] transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Ошибка отправки. Напишите напрямую в WhatsApp.
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <p className="text-[#718096] text-xs max-w-xs">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" className="text-[#4A7FA5] hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0A1628] text-white text-sm font-medium rounded-full hover:bg-[#4A7FA5] transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Отправка..." : "Отправить запрос"}
                  <Send size={14} />
                </button>
              </div>
            </form>
          </FadeIn>
        )}

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-6 mt-10 pt-10 border-t border-gray-100">
            {[
              { label: "Бесплатно", sub: "разбор структуры под вашу нишу" },
              { label: "Конкретно", sub: "не презентация — план блоков" },
              { label: "Быстро", sub: "ответ в течение рабочего дня" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 flex-shrink-0" />
                <div>
                  <div className="font-medium text-[#0A1628] text-sm">
                    {item.label}
                  </div>
                  <div className="text-[#718096] text-xs">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
