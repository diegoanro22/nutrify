"use client";

import Image from "next/image";
import { useState } from "react";

export default function NutrifyLandingPage() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  const nav = [
    { name: "Inicio", id: "hero" },
    { name: "Qué es", id: "about" },
    { name: "Tecnología", id: "tech" },
    { name: "Cómo funciona", id: "how" },
    { name: "Menús", id: "menus" },
    { name: "Planes", id: "pricing" },
  ];

  return (
    <div className="min-h-screen bg-[#84d1c1] text-gray-900 antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#84d1c1]/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[#0b6b5c] shadow-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-white text-lg font-bold tracking-wide">
              Nutrify
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-4">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 rounded-md text-white/95 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollTo("pricing")}
              className="ml-4 h-10 px-5 rounded-full bg-[#f56914] text-white text-sm font-semibold shadow-lg hover:bg-[#d35410] hover:shadow-xl transition-all transform hover:scale-105"
            >
              Ver Planes
            </button>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden">
            <nav className="px-4 py-4 space-y-2 bg-white/95 shadow-lg">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-3 py-3 rounded-md text-gray-800 hover:bg-[#e6f7f2] transition"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* HERO */}
          <section id="hero" className="mt-6 sm:mt-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Image1.jpg"
                  alt="Lockers inteligentes Nutrify"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left py-6 lg:py-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
                  Smart Locker Kits: Tu comida sana, lista en la uni
                </h1>
                <p className="mt-4 text-lg text-white/95 leading-relaxed">
                  Lockers inteligentes con control de temperatura que mantienen tu comida <strong>caliente o fría</strong> hasta que la recoges. Planifica tu semana en la app o compra opciones del día – wraps shuco, pupusas veggie, y más opciones frescas y saludables.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollTo("pricing")}
                    className="inline-flex items-center h-12 px-6 rounded-full bg-[#f56914] text-white font-semibold shadow-xl hover:bg-[#d35410] hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    Empieza por Q150/semana
                  </button>

                  <button
                    onClick={() => scrollTo("how")}
                    className="inline-flex items-center h-12 px-5 rounded-full bg-white/90 text-[#0b6b5c] font-semibold shadow-lg hover:bg-white transition-all"
                  >
                    Ver cómo funciona →
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { icon: "🥗", title: "Sabor local saludable", desc: "Saludable" },
                    { icon: "⏱️", title: "< 1 minuto", desc: "Para recoger" },
                    { icon: "💰", title: "Q30-40", desc: "Por kit" }
                  ].map((stat) => (
                    <div key={stat.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-white font-semibold text-sm">{stat.title}</div>
                      <div className="text-white/80 text-xs">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT - Qué es Nutrify */}
          <section id="about" className="py-10 sm:py-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Image2.jpg"
                    alt="Estudiante usando app Nutrify"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* removed 'App Inteligente' card as requested */}
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full bg-[#e6f7f2] text-[#0b6b5c] text-sm font-semibold mb-4">
                  ¿Qué es Nutrify?
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Tu vending personalizado, centrado en lo saludable
                </h2>
                <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                  <p>
                    <strong className="text-white">Nutrify</strong> es un sistema de <strong>lockers inteligentes</strong> instalados en tu universidad que combinan tecnología IoT, control de temperatura y una app móvil para entregarte comida saludable en menos de 1 minuto.
                  </p>
                  <p>
                    Cada locker mantiene tus kits a la <strong>temperatura perfecta</strong> (caliente para proteínas, frío para ensaladas) y se abre escaneando un código QR único desde tu teléfono. Sin filas, sin esperas.
                  </p>
                  <p className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#f56914]">
                    💡 <strong>Diferencia clave:</strong> No somos delivery ni cafetería. Somos lockers transparentes donde VES tu comida fresca, eliges en app (planificada o del día), y recoges al instante.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TECH SECTION - Nueva sección detallada */}
          <section id="tech" className="py-10 sm:py-12 bg-white/5 backdrop-blur-sm rounded-3xl">
            <div className="text-center mb-12">
              {/* 'Tecnología Inteligente' label removed per request */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Cómo funciona la magia
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                La interacción perfecta entre app, locker y comida para una experiencia sin fricción
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* App */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#84d1c1] to-[#0b6b5c] flex items-center justify-center text-3xl mb-6 shadow-lg">
                  📱
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">La App: Tu Control Central</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>IA Personalizada:</strong> Recomendaciones basadas en tus gustos (alta proteína, sin gluten, baja azúcar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Planificación Semanal:</strong> Arma tu menú completo en 5 minutos, edita en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Disponibles del Día:</strong> Ve opciones extras con fotos y compra in-situ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Pago Seguro:</strong> Tarjeta, Qrenta o transferencia. Escanea QR para pagar y abrir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Notificaciones Smart:</strong>&quot;Tu kit caliente está listo a las 12pm en locker #4&quot;</span>
                  </li>
                </ul>
              </div>

              {/* Locker */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#f56914] to-[#d35410] flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🔒
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">El Locker: Entrega Inteligente</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f56914] font-bold">✓</span>
                    <span><strong>Transparente:</strong> Puertas de vidrio con LED – ves tu comida y genera antojo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f56914] font-bold">✓</span>
                    <span><strong>Control Temperatura:</strong> Sensores IoT mantienen 60°C (caliente) o 4-8°C (frío)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f56914] font-bold">✓</span>
                    <span><strong>Apertura con QR:</strong> Escanea con tu cámara – verifica identidad y abre en 2 segundos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f56914] font-bold">✓</span>
                    <span><strong>Ajuste Automático:</strong> Calienta 10 min antes si recoges a las 12pm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f56914] font-bold">✓</span>
                    <span><strong>Pantalla Táctil:</strong> Compra rápida sin app + puerto USB para cargar teléfono</span>
                  </li>
                </ul>
              </div>

              {/* Comida */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#84d1c1] to-[#0b6b5c] flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🥗
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Los Kits: Sabor + Salud</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Pre-preparados:</strong> Listos para comer, portátiles en empaques térmicos reutilizables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Sabores locales y saludables:</strong> Shuco wraps integrales, pupusas veggie, bowls balanceados con arroz integral y vegetales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Personalización:</strong> Alta proteína, sin gluten, bajo sodio según tu perfil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Frescura:</strong> Preparados cada mañana en cocina uni (Planta Alimentos UVG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b6b5c] font-bold">✓</span>
                    <span><strong>Porción Completa:</strong> 300-500 calorías balanceadas por kit</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

            {/* Combined: Flujo Completo en Acción + Tan fácil como 1-2-3 */}
            <section id="how" className="py-10 sm:py-12">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">🔄 Flujo Completo en Acción</h2>
                  <p className="text-white/80 text-lg">Tan fácil como 1-2-3 — desde elegir hasta comer en menos de 1 minuto</p>
                </div>

                <div className="grid gap-6">
                  {[{
                    n: "1",
                    t: "Elige tus kits",
                    d: "Planifica tu semana o revisa 'Disponibles del Día' con fotos. La IA sugiere según tus gustos y puedes personalizar." ,
                    i: "/Image4.jpg"
                  },{
                    n: "2",
                    t: "Paga seguro con QR",
                    d: "Usa tarjeta, Qrenta o transferencia en la app; para compras in-situ escanea el QR del locker y paga al instante.",
                    i: "/Image2.jpg"
                  },{
                    n: "3",
                    t: "Escanea y abre",
                    d: "Escanea el QR único con tu cámara — el sistema verifica y abre la puerta en 2 segundos. Sin contacto.",
                    i: "/Image3.jpg"
                  },{
                    n: "4",
                    t: "Recoge y disfruta",
                    d: "Tu kit llega a la temperatura perfecta; empaques portátiles listos para clase o estudio.",
                    i: "/Image1.jpg"
                  }].map((s) => (
                    <div key={s.n} className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#84d1c1] to-[#0b6b5c] text-white grid place-content-center font-bold text-2xl shadow-lg">{s.n}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{s.t}</h3>
                        <p className="text-gray-600 leading-relaxed">{s.d}</p>
                      </div>
                      <div className="w-40 h-28 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                        <Image src={s.i} alt={s.t} width={200} height={140} className="object-cover w-full h-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          {/* MENUS */}
          <section id="menus" className="py-10 sm:py-12 bg-white/5 backdrop-blur-sm rounded-3xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Kits</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Cada kit preparado fresco cada mañana con ingredientes locales
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Shuco Wrap Grilled",
                  desc: "Tortilla integral, pollo bajo grasa, veggies frescos, salsa casera",
                  cals: "380 kcal",
                  protein: "32g proteína",
                  badge: "🔥 Popular",
                  temp: "Caliente"
                },
                {
                  name: "Pupusa Veggie",
                  desc: "Masa sin gluten, queso bajo sodio, loroco, frijoles molidos saludables",
                  cals: "320 kcal",
                  protein: "18g proteína",
                  badge: "🌱 Sin gluten",
                  temp: "Caliente"
                },
                {
                  name: "Bowl Power Saludable",
                  desc: "Arroz integral, frijoles negros, pollo grilled, ensalada, aguacate",
                  cals: "450 kcal",
                  protein: "38g proteína",
                  badge: "💪 Alta proteína",
                  temp: "Caliente"
                },
                {
                  name: "Ensalada Tropical",
                  desc: "Mix verde, piña, mango, pechuga, aderezo de limón y miel",
                  cals: "280 kcal",
                  protein: "25g proteína",
                  badge: "❄️ Refrescante",
                  temp: "Frío"
                },
                {
                  name: "Tostadas Fit",
                  desc: "Tostadas horneadas, guacamol casero, pico de gallo, cebolla morada",
                  cals: "310 kcal",
                  protein: "12g proteína",
                  badge: "🥑 Veggie",
                  temp: "Frío"
                },
                {
                  name: "Snack Box Energía",
                  desc: "Fruta cortada fresca, yogurt griego, granola artesanal, miel",
                  cals: "220 kcal",
                  protein: "15g proteína",
                  badge: "⚡ Snack",
                  temp: "Frío"
                }
              ].map((kit, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#e6f7f2] text-[#0b6b5c] text-xs font-bold">
                      {kit.badge}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      {kit.temp === "Caliente" ? "🔥" : "❄️"} {kit.temp}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{kit.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{kit.desc}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-[#0b6b5c]">{kit.cals}</span>
                    <span className="text-gray-500">•</span>
                    <span className="font-semibold text-[#f56914]">{kit.protein}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm">
                ✨ Todos los kits incluyen opción de personalización según tus restricciones dietéticas
              </p>
            </div>
          </section>

          {/* PRICING - Mejorado significativamente */}
          <section id="pricing" className="py-12 sm:py-14">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Planes que se adaptan a ti
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Más económico que Campero, más rápido que cafetería, más sano que ambulantes
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Plan Individual */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-[#e6f7f2] text-[#0b6b5c] text-sm font-bold mb-4">
                    Para ti
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Semanal Individual</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-[#0b6b5c]">Q150</span>
                    <span className="text-gray-500">/semana</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Q30 por kit</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#e6f7f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#0b6b5c] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">5 kits saludables/semana</div>
                      <div className="text-sm text-gray-600">Elige cualquier combinación de nuestro menú</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#e6f7f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#0b6b5c] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Personalización con IA</div>
                      <div className="text-sm text-gray-600">Recomendaciones según tus gustos y metas</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#e6f7f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#0b6b5c] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Control de temperatura</div>
                      <div className="text-sm text-gray-600">Caliente o frío, perfecto a tu hora</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#e6f7f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#0b6b5c] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Cambios ilimitados</div>
                      <div className="text-sm text-gray-600">Edita tu menú cuando quieras</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#e6f7f2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#0b6b5c] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sin filas</div>
                      <div className="text-sm text-gray-600">Recoge en menos de 1 minuto</div>
                    </div>
                  </li>
                </ul>

                <button className="w-full h-12 rounded-full bg-[#0b6b5c] text-white font-semibold hover:bg-[#094d42] transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Comenzar ahora
                </button>
              </div>

              {/* Plan Grupal - POPULAR */}
              <div className="relative bg-gradient-to-br from-[#0b6b5c] to-[#84d1c1] rounded-3xl p-8 shadow-2xl transform scale-105 hover:scale-110 transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#f56914] text-white text-sm font-bold shadow-lg">
                  🔥 MÁS POPULAR
                </div>
                
                <div className="text-center mb-6 mt-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-4">
                    Para grupos
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Semanal Grupal</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-white">Q120</span>
                    <span className="text-white/80">/semana</span>
                  </div>
                  <div className="text-sm text-white/80 mt-1">Q24 por kit • Por persona</div>
                  <div className="mt-2 inline-block px-3 py-1 rounded-full bg-[#f56914] text-white text-xs font-bold">
                    ¡Ahorra 20% vs individual!
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Todo lo del plan individual</div>
                      <div className="text-sm text-white/80">5 kits, IA, temperatura, sin filas</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Descuento 20% automático</div>
                      <div className="text-sm text-white/80">Con 3 o más amigos registrados</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Dashboard compartido</div>
                      <div className="text-sm text-white/80">Coordina con tu grupo de estudio</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Lockers agrupados</div>
                      <div className="text-sm text-white/80">Recogen juntos, perfectos para breaks</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Invita y gana</div>
                      <div className="text-sm text-white/80">1 kit gratis por cada 5 amigos</div>
                    </div>
                  </li>
                </ul>

                <button className="w-full h-12 rounded-full bg-white text-[#0b6b5c] font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Crear grupo ahora
                </button>
              </div>

              {/* Plan Flexible */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-[#f56914]/10 text-[#f56914] text-sm font-bold mb-4">
                    Pago único
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kit Individual</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-[#f56914]">Q35</span>
                    <span className="text-gray-500">/kit</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Sin compromiso</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f56914]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#f56914] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Compra cuando quieras</div>
                      <div className="text-sm text-gray-600">Perfecto para probar o uso ocasional</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f56914]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#f56914] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Disponibles del día</div>
                      <div className="text-sm text-gray-600">Ve opciones en app y compra in-situ</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f56914]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#f56914] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Pago con QR al instante</div>
                      <div className="text-sm text-gray-600">Escanea, paga y abre en 10 segundos</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f56914]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#f56914] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Mismo control temperatura</div>
                      <div className="text-sm text-gray-600">Caliente o frío según el kit</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f56914]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#f56914] font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Ideal para probar</div>
                      <div className="text-sm text-gray-600">Sin suscripción, 100% flexible</div>
                    </div>
                  </li>
                </ul>

                <button className="w-full h-12 rounded-full bg-[#f56914] text-white font-semibold hover:bg-[#d35410] transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  Ver disponibles
                </button>
              </div>
            </div>

            {/* Comparación de ahorro */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mt-20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
                💰 Comparativa de Ahorro Real
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 px-4 font-semibold text-gray-700">Opción</th>
                      <th className="py-3 px-4 font-semibold text-gray-700 text-center">Costo/Comida</th>
                      <th className="py-3 px-4 font-semibold text-gray-700 text-center">Tiempo</th>
                      <th className="py-3 px-4 font-semibold text-gray-700 text-center">Salud</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 bg-[#e6f7f2]">
                      <td className="py-4 px-4 font-bold text-[#0b6b5c]">✨ Nutrify Grupal</td>
                      <td className="py-4 px-4 text-center font-bold text-[#0b6b5c]">Q24</td>
                      <td className="py-4 px-4 text-center text-sm">{"<1 min"}</td>
                      <td className="py-4 px-4 text-center text-green-600 font-bold">★★★★★</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Nutrify Individual</td>
                      <td className="py-4 px-4 text-center font-semibold">Q30</td>
                      <td className="py-4 px-4 text-center text-sm">{"<1 min"}</td>
                      <td className="py-4 px-4 text-center text-green-600 font-bold">★★★★★</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Cafetería UVG</td>
                      <td className="py-4 px-4 text-center text-gray-600">Q35-45</td>
                      <td className="py-4 px-4 text-center text-sm text-red-600">15-20 min fila</td>
                      <td className="py-4 px-4 text-center text-yellow-600">★★★☆☆</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Pollo Campero</td>
                      <td className="py-4 px-4 text-center text-gray-600">Q40-50</td>
                      <td className="py-4 px-4 text-center text-sm text-red-600">10-15 min</td>
                      <td className="py-4 px-4 text-center text-orange-500">★★☆☆☆</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Vendedores ambulantes</td>
                      <td className="py-4 px-4 text-center text-gray-600">Q30-40</td>
                      <td className="py-4 px-4 text-center text-sm">5-10 min</td>
                      <td className="py-4 px-4 text-center text-red-600">★☆☆☆☆</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-[#e6f7f2] rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Ahorro semanal con plan grupal:</strong> Hasta Q100/semana vs. Campero + tiempo recuperado para estudiar
                </p>
              </div>
            </div>
          </section>

          {/* BENEFITS adicionales */}
          <section className="py-8 sm:py-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Por qué los estudiantes nos prefieren?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Personalización Real",
                  desc: "IA que aprende tus gustos. Si eres team alta proteína o sin gluten, te sugerimos kits perfectos para ti."
                },
                {
                  icon: "🌡️",
                  title: "Temperatura Perfecta",
                  desc: "Sensores IoT mantienen tu comida a 60°C (caliente) o 4-8°C (frío). Se ajusta automáticamente antes de tu hora."
                },
                {
                  icon: "⚡",
                  title: "Sin Fricción",
                  desc: "Escanea QR con tu cámara – el locker verifica tu identidad y abre en 2 segundos. Cero contacto."
                },
                {
                  icon: "🌽",
                  title: "Sabor local y saludable",
                  desc: "Wraps shuco, pupusas veggie, arroz con frijoles. Comida local que conoces, versión balanceada."
                },
                {
                  icon: "💚",
                  title: "Cocina en Campus",
                  desc: "Preparado cada mañana en Planta de Alimentos UVG. Máxima frescura, cero delivery."
                },
                {
                  icon: "👥",
                  title: "Perfecto para Grupos",
                  desc: "Dashboard compartido, descuento 20%, lockers agrupados. Ideal para study groups."
                }
              ].map((benefit, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-10 sm:py-14">
            <div className="relative bg-gradient-to-br from-[#0b6b5c] to-[#84d1c1] rounded-3xl p-12 shadow-2xl text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-6 shadow-lg">
                  <span className="h-3 w-3 rounded-full bg-white animate-pulse"></span>
                  <span>¡Expandiéndonos a más campus!</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  ¿Lo quieres en tu universidad o empresa?
                </h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                  Escríbenos y coordinamos un piloto. Llevamos Nutrify Smart Lockers donde estudias o trabajas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a
                    href="mailto:hola@nutrify.gt"
                    className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-[#0b6b5c] font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Contactar a Nutrify
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-transparent border-2 border-white text-white font-bold shadow-lg hover:bg-white hover:text-[#0b6b5c] transform hover:scale-105 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Guatemala City
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Lun - Vie: 7am - 7pm
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-12 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                <span className="text-[#0b6b5c] font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-white">Nutrify</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-white/80">
              <button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors">
                Contacto
              </button>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
            </div>
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Nutrify. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}