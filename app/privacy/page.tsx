import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Оксана Назаренко — Невролог",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Общие положения",
      text: "Настоящая политика конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей сайта. Использование сайта означает согласие с данной политикой.",
    },
    {
      title: "2. Какие данные мы собираем",
      text: "При заполнении формы записи или обратной связи мы собираем: имя, контактный телефон или мессенджер, описание жалоб (по желанию). Данные используются исключительно для связи с пациентом.",
    },
    {
      title: "3. Использование данных",
      text: "Персональные данные не передаются третьим лицам и не используются в коммерческих целях. Вся информация хранится на защищённых серверах.",
    },
    {
      title: "4. Медицинский отказ от ответственности",
      text: "Информация на сайте носит ознакомительный характер и не является медицинской рекомендацией. Для постановки диагноза и назначения лечения необходима очная консультация специалиста.",
    },
    {
      title: "5. Cookies",
      text: "Сайт использует технические cookies для обеспечения работоспособности. Аналитика подключается только с согласия пользователя.",
    },
    {
      title: "6. Связь",
      text: "По вопросам обработки данных: +7 (914) 123-45-67 (WhatsApp / Telegram @dr_nazarenko).",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-[#0A1628] mb-3">
          Политика конфиденциальности
        </h1>
        <p className="text-[#718096] text-sm mb-10">
          Последнее обновление:{" "}
          {new Date().toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="flex flex-col gap-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-semibold text-[#0A1628] text-base mb-3">
                {s.title}
              </h2>
              <p className="text-[#2D3748] text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#4A7FA5] text-sm hover:text-[#0A1628] transition-colors"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
