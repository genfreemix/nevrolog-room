import { FadeIn } from "@/components/FadeIn";
import { CheckCircle, Smartphone, Zap, Brain } from "lucide-react";

const outcomes = [
  "РЎР°Р№С‚ Р·Р°РІРµСЂС€С‘РЅ вЂ” РїР°С†РёРµРЅС‚С‹ РЅР°С…РѕРґСЏС‚ РІР°СЃ РІ РїРѕРёСЃРєРµ",
  "РћРЅР»Р°Р№РЅ-Р·Р°РїРёСЃСЊ СЂР°Р±РѕС‚Р°РµС‚ Р±РµР· Р°РґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂР°",
  "Р”РѕРІРµСЂРёРµ СЃС„РѕСЂРјРёСЂРѕРІР°РЅРѕ РґРѕ РїРµСЂРІРѕРіРѕ Р·РІРѕРЅРєР°",
  "Р’С‹ РєРѕРЅС‚СЂРѕР»РёСЂСѓРµС‚Рµ СЂР°СЃРїРёСЃР°РЅРёРµ Рё РїРѕС‚РѕРє РїР°С†РёРµРЅС‚РѕРІ",
];

const included = [
  ["РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ РґРёР·Р°Р№РЅ", "Р•РІСЂРѕРїРµР№СЃРєР°СЏ СЌСЃС‚РµС‚РёРєР° С‡Р°СЃС‚РЅРѕР№ РєР»РёРЅРёРєРё"],
  ["РћРЅР»Р°Р№РЅ-Р·Р°РїРёСЃСЊ", "Calendly РёР»Рё СЃРѕР±СЃС‚РІРµРЅРЅС‹Р№ РєР°Р»РµРЅРґР°СЂСЊ"],
  ["SEO-РѕРїС‚РёРјРёР·Р°С†РёСЏ", "РџР°С†РёРµРЅС‚С‹ РЅР°С…РѕРґСЏС‚ РІР°СЃ РІ РїРѕРёСЃРєРµ"],
  ["РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ", "Р Р°Р±РѕС‚Р°РµС‚ РЅР° С‚РµР»РµС„РѕРЅРµ Рё РєРѕРјРїСЊСЋС‚РµСЂРµ"],
  ["РЎРєРѕСЂРѕСЃС‚СЊ", "Р”РµРїР»РѕР№ РЅР° Vercel вЂ” РјРіРЅРѕРІРµРЅРЅР°СЏ Р·Р°РіСЂСѓР·РєР°"],
  ["CRM Рё Р°РЅР°Р»РёС‚РёРєР°", "РџРѕРЅРёРјР°РЅРёРµ РѕС‚РєСѓРґР° РїСЂРёС…РѕРґСЏС‚ РїР°С†РёРµРЅС‚С‹"],
];

const phases = [
  {
    num: "Р­РўРђРџ 1",
    title: "Р”РѕРІРµСЂРёРµ Рё РїРµСЂРІС‹Р№ РїРѕС‚РѕРє РїР°С†РёРµРЅС‚РѕРІ",
    desc: "РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ СЃР°Р№С‚ СЃ РїСЂР°РІРёР»СЊРЅРѕР№ СЃС‚СЂСѓРєС‚СѓСЂРѕР№, РІСЂР°С‡РµР±РЅС‹РјРё Р±Р»РѕРєР°РјРё РґРѕРІРµСЂРёСЏ, SEO-РѕРїС‚РёРјРёР·Р°С†РёРµР№ Рё РѕРЅР»Р°Р№РЅ-Р·Р°РїРёСЃСЊСЋ. РџР°С†РёРµРЅС‚С‹ РїСЂРёС…РѕРґСЏС‚ СЃР°РјРё, Р±РµР· СЂРµРєР»Р°РјС‹ РёР· СѓСЃС‚ РІ СѓСЃС‚Р°.",
  },
  {
    num: "Р­РўРђРџ 2",
    title: "РђРЅР°Р»РёС‚РёРєР° Рё РєРѕРЅС‚СЂРѕР»СЊ СЂР°СЃРїРёСЃР°РЅРёСЏ",
    desc: "РџРѕРґРєР»СЋС‡РµРЅРёРµ СЃРєРІРѕР·РЅРѕР№ Р°РЅР°Р»РёС‚РёРєРё, РёСЃС‚РѕС‡РЅРёРєРѕРІ С‚СЂР°С„РёРєР°, CRM Рё РІРѕСЂРѕРЅРєРё Р·Р°СЏРІРѕРє. Р’С‹ РІРёРґРёС‚Рµ, РѕС‚РєСѓРґР° РїСЂРёС€С‘Р» РєР°Р¶РґС‹Р№ РїР°С†РёРµРЅС‚ Рё СЃРєРѕР»СЊРєРѕ СЃС‚РѕРёС‚ РїСЂРёРІР»РµС‡РµРЅРёРµ.",
  },
  {
    num: "Р­РўРђРџ 3",
    title: "РР-С‡Р°С‚ РїРѕ СѓСЃР»СѓРіР°Рј Рё СЃРёРјРїС‚РѕРјР°Рј",
    desc: "РР-Р°СЃСЃРёСЃС‚РµРЅС‚, РѕР±СѓС‡РµРЅРЅС‹Р№ РЅР° РІР°С€РёС… СѓСЃР»СѓРіР°С… Рё С‡Р°СЃС‚С‹С… РІРѕРїСЂРѕСЃР°С… РїР°С†РёРµРЅС‚РѕРІ. РћС‚РІРµС‡Р°РµС‚ 24/7, РѕР±СЉСЏСЃРЅСЏРµС‚ СЃРёРјРїС‚РѕРјС‹, РјР°СЂС€СЂСѓС‚РёР·РёСЂСѓРµС‚ Рє РЅСѓР¶РЅРѕР№ СѓСЃР»СѓРіРµ, СЃРЅРёР¶Р°РµС‚ РЅР°РіСЂСѓР·РєСѓ РЅР° Р·Р°РїРёСЃСЊ.",
  },
  {
    num: "Р­РўРђРџ 4",
    title: "Р‘РѕС‚ Рё РјРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ",
    desc: "Telegram-Р±РѕС‚ РёР»Рё РјРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ РґР»СЏ Р·Р°РїРёСЃРё, РЅР°РїРѕРјРёРЅР°РЅРёР№, СѓРІРµРґРѕРјР»РµРЅРёР№ Рѕ РіРѕС‚РѕРІРЅРѕСЃС‚Рё СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ, РїРѕРІС‚РѕСЂРЅС‹С… РѕР±СЂР°С‰РµРЅРёР№ Рё СѓРґРµСЂР¶Р°РЅРёСЏ РїР°С†РёРµРЅС‚РѕРІ.",
  },
];

const capabilities = [
  {
    icon: Smartphone,
    tag: "РЈРЎРўР РћР™РЎРўР’Рђ",
    title: "Р Р°Р±РѕС‚Р°РµС‚ РЅР° РІСЃРµС… СѓСЃС‚СЂРѕР№СЃС‚РІР°С…",
    desc: "РЎР°Р№С‚ Р°РґР°РїС‚РёСЂРѕРІР°РЅ РїРѕРґ СЃРјР°СЂС‚С„РѕРЅС‹, РїР»Р°РЅС€РµС‚С‹ Рё РєРѕРјРїСЊСЋС‚РµСЂС‹ вЂ” СѓРґРѕР±СЃС‚РІРѕ СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ РЅР° Р»СЋР±РѕРј СЌРєСЂР°РЅРµ.",
    points: [
      "РЎРјР°СЂС‚С„РѕРЅС‹ вЂ” РіР»Р°РІРЅС‹Р№ РёСЃС‚РѕС‡РЅРёРє С‚СЂР°С„РёРєР°",
      "РџР»Р°РЅС€РµС‚С‹ вЂ” РёР·СѓС‡РµРЅРёРµ Рё СЃСЂР°РІРЅРµРЅРёРµ",
      "Р”РµСЃРєС‚РѕРї вЂ” С„РёРЅР°Р»СЊРЅРѕРµ СЂРµС€РµРЅРёРµ",
    ],
  },
  {
    icon: Zap,
    tag: "РњРђРЎРЁРўРђР‘",
    title: "РњРѕР¶РЅРѕ СЂР°Р·РІРёС‚СЊ РІ РїРѕР»РЅРѕС†РµРЅРЅСѓСЋ СЃРёСЃС‚РµРјСѓ",
    desc: "РЎР°Р№С‚ вЂ” СЌС‚Рѕ Р±Р°Р·Р°. РќР° РЅРµС‘ РЅР°РґСЃС‚СЂР°РёРІР°СЋС‚СЃСЏ РёРЅСЃС‚СЂСѓРјРµРЅС‚С‹, СѓРјРЅРѕР¶Р°СЋС‰РёРµ СЂРµР·СѓР»СЊС‚Р°С‚.",
    points: [
      "Р§Р°С‚-Р±РѕС‚ РґР»СЏ РѕР±СЂР°Р±РѕС‚РєРё Р·Р°РїРёСЃРµР№",
      "РР-С‡Р°С‚ РєР°Рє СЌРєСЃРїРµСЂС‚ РїРѕ СЃРёРјРїС‚РѕРјР°Рј",
      "РђРІС‚РѕРјР°С‚РёР·Р°С†РёСЏ РЅР°РїРѕРјРёРЅР°РЅРёР№",
      "РњРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ",
    ],
  },
  {
    icon: Brain,
    tag: "РР",
    title: "РР, РєРѕС‚РѕСЂС‹Р№ Р·РЅР°РµС‚ РІР°С€Сѓ РїСЂР°РєС‚РёРєСѓ",
    desc: "РР РѕР±СѓС‡Р°РµС‚СЃСЏ РЅР° РІР°С€РёС… СѓСЃР»СѓРіР°С… Рё РєРѕРЅСЃСѓР»СЊС‚РёСЂСѓРµС‚ РїР°С†РёРµРЅС‚РѕРІ, СЃРЅРёР¶Р°СЏ РЅР°РіСЂСѓР·РєСѓ РЅР° Р·Р°РїРёСЃСЊ.",
    points: [
      "РћС‚РІРµС‡Р°РµС‚ РЅР° РІРѕРїСЂРѕСЃС‹ 24/7",
      "Р—РЅР°РµС‚ РІР°С€Рё СѓСЃР»СѓРіРё Рё С†РµРЅС‹",
      "Р’РµРґС‘С‚ РїР°С†РёРµРЅС‚Р° Рє Р·Р°РїРёСЃРё",
    ],
  },
];

export function ProtoLayer() {
  return (
    <>
      {/* в”Ђв”Ђв”Ђ Block 1: Intro + included в”Ђв”Ђв”Ђ */}
      <section
        id="proto"
        className="py-24 bg-[#0A1628] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#C9A96E]/10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-[#4A7FA5]/20 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <FadeIn>
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-6 block">
                  Р”Р•РњРћРќРЎРўР РђР¦РРћРќРќР«Р™ РЎРђР™Рў
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                  Р­С‚Рѕ вЂ” РѕР±СЂР°Р·РµС†
                  <br />
                  СЃР°Р№С‚Р° С‡Р°СЃС‚РЅРѕР№
                  <br />
                  <span className="text-[#C9A96E]">РїСЂР°РєС‚РёРєРё.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[#718096] leading-relaxed mb-8">
                  РџРѕРєР°Р·С‹РІР°РµРј, РєР°Рє РјРѕР¶РµС‚ РІС‹РіР»СЏРґРµС‚СЊ С†РёС„СЂРѕРІРѕРµ РїСЂРёСЃСѓС‚СЃС‚РІРёРµ
                  РІСЂР°С‡Р°-РЅРµРІСЂРѕР»РѕРіР°. Р•СЃР»Рё РІС‹ РІСЂР°С‡ Рё С…РѕС‚РёС‚Рµ РёРЅСЃС‚СЂСѓРјРµРЅС‚, РєРѕС‚РѕСЂС‹Р№
                  РїСЂРёРЅРѕСЃРёС‚ РїР°С†РёРµРЅС‚РѕРІ Рё СЂР°Р±РѕС‚Р°РµС‚ Р±РµР· РїРѕСЃСЂРµРґРЅРёРєРѕРІ вЂ” СЂР°СЃСЃРєР°Р¶РёС‚Рµ Рѕ
                  СЃРІРѕРµР№ Р·Р°РґР°С‡Рµ.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-3 mb-10">
                  {outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[#C9A96E] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-white text-sm">{o}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#lead-form"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A96E] text-[#0A1628] font-semibold text-sm rounded-full hover:bg-[#d4b37a] transition-colors"
                  >
                    РҐРѕС‡Сѓ С‚Р°РєРѕР№ СЃР°Р№С‚
                  </a>
                  <a
                    href="https://kayur-travel-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm rounded-full hover:bg-white/5 transition-colors"
                  >
                    РЈР·РЅР°С‚СЊ Рѕ РїРѕРґС…РѕРґРµ в†’
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: included */}
            <FadeIn delay={0.3} direction="left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-[#C9A96E] text-[11px] tracking-widest uppercase mb-6">
                  Р’ РўРђРљРћРњ РЎРђР™РўР• Р’РљР›Р®Р§Р•РќРћ
                </div>
                {included.map(([title, sub], i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-start py-3.5 ${
                      i < included.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="text-white text-sm font-medium">{title}</span>
                    <span className="text-[#718096] text-xs text-right max-w-[140px]">
                      {sub}
                    </span>
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-white text-sm mb-1">
                    РџРѕРґС…РѕРґРёС‚ РґР»СЏ Р»СЋР±РѕР№ СЃРїРµС†РёР°Р»СЊРЅРѕСЃС‚Рё
                  </div>
                  <div className="text-[#718096] text-xs">
                    РќРµРІСЂРѕР»РѕРі, РєР°СЂРґРёРѕР»РѕРі, РґРµСЂРјР°С‚РѕР»РѕРі, РїСЃРёС…РѕР»РѕРі Рё РґСЂ.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* в”Ђв”Ђв”Ђ Block 2: 4 Growth Phases в”Ђв”Ђв”Ђ */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
              РљРђРљ РЎРђР™Рў РЎРўРђРќРћР’РРўРЎРЇ РЎРРЎРўР•РњРћР™
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-4">
              4 СЌС‚Р°РїР°, РєРѕС‚РѕСЂС‹Рµ РїСЂРµРІСЂР°С‰Р°СЋС‚
              <br />
              СЃР°Р№С‚ РІ РїРѕС‚РѕРє РїР°С†РёРµРЅС‚РѕРІ
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#718096] text-sm mb-12 max-w-xl">
              РќР°С‡РёРЅР°РµС‚СЃСЏ СЃ СЃР°Р№С‚Р° РґРѕРІРµСЂРёСЏ. Р Р°Р·РІРёРІР°РµС‚СЃСЏ РІ С†РёС„СЂРѕРІСѓСЋ СЌРєРѕСЃРёСЃС‚РµРјСѓ,
              РєРѕС‚РѕСЂР°СЏ СЂР°Р±РѕС‚Р°РµС‚ Р±РµР· РІР°С€РµРіРѕ СѓС‡Р°СЃС‚РёСЏ.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {phases.map((phase, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 h-full flex flex-col">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4A7FA5]/10 text-[#4A7FA5] text-[10px] font-semibold tracking-[0.15em] mb-5 self-start">
                    {phase.num}
                  </div>
                  <h3 className="font-semibold text-[#0A1628] text-xl mb-3 leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-[#718096] text-sm leading-relaxed flex-1">
                    {phase.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-8 bg-[#0A1628] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-white font-medium mb-1">
                  Р­С‚Рѕ РЅРµ РїСЂРѕСЃС‚Рѕ СЃР°Р№С‚.
                </div>
                <div className="text-[#718096] text-sm">
                  Р­С‚Рѕ СЃРёСЃС‚РµРјР° РїСЂРёРІР»РµС‡РµРЅРёСЏ, РєРѕРЅС‚СЂРѕР»СЏ Рё СЂРѕСЃС‚Р°. РќР°С‡РЅРёС‚Рµ СЃ СЌС‚Р°РїР° 1
                  вЂ” РѕСЃС‚Р°Р»СЊРЅРѕРµ РЅР°СЂР°СЃС‚С‘С‚.
                </div>
              </div>
              <a
                href="#lead-form"
                className="flex-shrink-0 px-6 py-3 bg-[#C9A96E] text-[#0A1628] text-sm font-semibold rounded-full hover:bg-[#d4b37a] transition-colors"
              >
                РҐРѕС‡Сѓ С‚Р°РєРѕР№ СЃР°Р№С‚
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* в”Ђв”Ђв”Ђ Block 3: Capabilities (Devices / Scale / AI) в”Ђв”Ђв”Ђ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4A7FA5] mb-4 block">
              Р’РћР—РњРћР–РќРћРЎРўР РџР›РђРўР¤РћР РњР«
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#0A1628] leading-tight mb-12">
              РЎРёСЃС‚РµРјР° Р°РґР°РїС‚РёСЂСѓРµС‚СЃСЏ
              <br />
              РїРѕРґ РІР°С€Сѓ РїСЂР°РєС‚РёРєСѓ
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#F4F6F9] rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                      <cap.icon size={18} className="text-[#C9A96E]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#4A7FA5]">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#0A1628] text-base mb-3 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-[#718096] text-sm leading-relaxed mb-5">
                    {cap.desc}
                  </p>
                  <div className="flex flex-col gap-2 mt-auto">
                    {cap.points.map((p, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-[#2D3748]">
                        <span className="w-1 h-1 rounded-full bg-[#C9A96E] mt-2 flex-shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Final CTA */}
          <FadeIn delay={0.5}>
            <div className="mt-12 text-center">
              <p className="font-playfair text-2xl md:text-3xl font-semibold text-[#0A1628] mb-3">
                Р­С‚Рѕ РЅРµ РїСЂРѕСЃС‚Рѕ СЃР°Р№С‚.
              </p>
              <p className="text-[#718096] mb-8 max-w-md mx-auto text-sm leading-relaxed">
                Р­С‚Рѕ СЃРёСЃС‚РµРјР° РїСЂРёРІР»РµС‡РµРЅРёСЏ, РєРѕРЅС‚СЂРѕР»СЏ Рё СЂРѕСЃС‚Р° С‡Р°СЃС‚РЅРѕР№ РјРµРґРёС†РёРЅСЃРєРѕР№
                РїСЂР°РєС‚РёРєРё. РќР°С‡РЅРёС‚Рµ СЃ РїРµСЂРІРѕРіРѕ С€Р°РіР°.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1628] text-white text-sm font-semibold rounded-full hover:bg-[#4A7FA5] transition-colors"
                >
                  Р Р°Р·РѕР±СЂР°С‚СЊ РїРѕРґ РјРѕСЋ РїСЂР°РєС‚РёРєСѓ
                </a>
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#0A1628] text-[#0A1628] text-sm rounded-full hover:bg-[#F4F6F9] transition-colors"
                >
                  РџРѕР»СѓС‡РёС‚СЊ СЃС‚СЂСѓРєС‚СѓСЂСѓ СЃР°Р№С‚Р°
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
