"use client";

import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Ajuste para header fijo
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Cerrar menú móvil después de navegar
  };

  const menuItems = [
    { name: "Inicio", id: "hero" },
    { name: "Sobre Nosotros", id: "about" },
    { name: "Características", id: "features" },
    { name: "Cómo Funciona", id: "how-it-works" },
    { name: "Precios", id: "pricing" }
  ];
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-700/20 bg-white/80 backdrop-blur px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Logo (omitimos SVG) */}
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-emerald-600" />
            <h2 className="text-lg sm:text-xl font-bold">Nutrify</h2>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="px-3 xl:px-4 py-2 rounded-md text-sm xl:text-base text-gray-600 hover:text-emerald-700 hover:bg-emerald-600/10 transition-colors"
              >
                {item.name}
              </button>
            ))}

            <button className="ml-4 h-10 px-4 xl:px-5 text-sm xl:text-base rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition">
              Descarga la App
            </button>
          </nav>

          {/* Navegación móvil */}
          <div className="lg:hidden flex items-center gap-2">
            <button className="h-9 px-3 sm:h-10 sm:px-4 text-xs sm:text-sm rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition">
              App
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9 sm:h-10 sm:w-10 flex flex-col justify-center items-center hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className={`block h-0.5 w-5 sm:w-6 bg-gray-600 mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-5 sm:w-6 bg-gray-600 mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-5 sm:w-6 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
        
        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-emerald-700/20 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:text-emerald-700 hover:bg-emerald-600/10 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full mt-4 h-10 px-4 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition">
                Descarga la App
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <section id="hero" className="relative mt-6 sm:mt-10 mx-2 sm:mx-0 rounded-xl p-6 sm:p-8 lg:p-12 text-center overflow-hidden bg-gradient-to-br from-emerald-700">
            <div className="absolute inset-0 opacity-10 bg-center bg-cover" />
            <div className="relative space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Nutrify: Comida Sana Lista en Tu Uni
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xs sm:max-w-2xl mx-auto px-2 sm:px-0">
                Planifica, recoge y come saludable sin filas. La revolución de la comida universitaria en Guatemala.
              </p>
            </div>
          </section>

          {/* Sobre Nosotros */}
          <section id="about" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-0">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqTLEQ2JYLwJEOEd-R1Qr8t8TaLcWhFAlyUQOipcbEuL6ofyJT9Oyj7RRVu9EfhHM_MzaOcvxbefNqv5a5cYWQ3eAyzqWE-QVnxazN322m6OpeP6qCsCsCvw9E9xCLHOePAiBnQqQMS4-xcQ4oOTQITt1YbkLcseqk4z6Qy-UHZXYcIumurSms09SqOtnTMqIyJPnMrbpYI34e_WxqOjnqsjp3mInsSK4UTgJLueAf4oZDcb98nc7DBf9B5ZSSSAuN3Lj5atf49RD5"
                  alt="Students enjoying healthy meals"
                  className="relative z-10 rounded-xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 inset-0 -z-0 rounded-xl bg-emerald-600/10 rotate-3" />
              </div>

              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Sobre Nosotros</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Nutrify ofrece kits de comida saludables en lockers inteligentes con control de temperatura,
                  accesibles desde una app. Pensado para el ritmo universitario: nutritivo, conveniente y delicioso.
                </p>
              </div>
            </div>
          </section>

          {/* Características (sin íconos) */}
          <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50 rounded-xl mx-2 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Características Únicas</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre cómo transformamos tu experiencia alimentaria en la universidad.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-4 sm:px-6 lg:px-8">
              {[
                {
                  title: "Lockers con Control de Temperatura",
                  desc: "Mantén tus comidas frescas y seguras hasta que las recojas.",
                },
                {
                  title: "Recomendaciones de IA",
                  desc: "Sugerencias personalizadas según tus preferencias y metas nutricionales.",
                },
                {
                  title: "Planificación Semanal/Diaria",
                  desc: "Organiza tus comidas con anticipación y evita filas.",
                },
                { title: "Pagos con QR", desc: "Paga rápido y seguro con un simple escaneo." },
                { title: "Descuentos Grupales", desc: "Mejores precios al suscribirte con amigos." },
                { title: "Soporte 24/7", desc: "Siempre estamos para ayudarte." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{f.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cómo Funciona */}
          <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-0">
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Cómo Funciona</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Cuatro pasos para disfrutar comidas saludables y listas.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 px-4 sm:px-0">
              {[
                {
                  n: "1",
                  title: "Descarga la App",
                  desc: "Disponible en tu tienda favorita.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzaSE9wPsbAPrrVcl1GCktpRK9SRU0sOsjEwP2x6y1B3boa3pT0We1FqDS8kEW3c_yre0_GMlSSn-Ib8k3ye9CV9Ovs4hU-Rh0Kd3LZfd0cMYV1uuZ7XPO1tInDoF6PdX7C5cM_7XMIttOwhi9owP8MX7OqUdFm0cL3_K14QW4iqwTaC_DlVU7_KGh5YW7XdzLBWggOMoH1K-k3joY5x57QM-for_NRukG7BfE9Ovux4ccc8Zo2kg9-qAcDOZbGFIS-UR_MAw1mxSz",
                },
                {
                  n: "2",
                  title: "Pre-ordena o Verifica",
                  desc: "Elige tu comida y confirma disponibilidad.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT34eSBTpnIhDHzeZqhjRTMPmER4pt8rXyQhDXQwm0eryi3siOqK4XsiULDCTIjkTVCW_JlBlj4Mf1JKzztIlOGBPdYez04VeY4RoiYAZJ4uOliiejuiuKEOvUNmoSM-HmQzrABxNqdpn2rYqWtPs3emZllW6RgrDpp6SXhVBgYx3u6-oMu7vwdtFqiQSSWNW0_xk_Y2XD2gnZ_jrUrYoz1QBCEnWSg79Kvx8OzZRdrGpaZVoO9k4vXqXQn-koz3Lb5vfnP1_PWmtK",
                },
                {
                  n: "3",
                  title: "Escanea el QR",
                  desc: "Abre tu locker asignado con el código.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrGqCExdTemIb7zbnL2CdUrxL_Iku6BVKjv8hxRhdpoGhunADyikqAZEsOK_oLarpMld71MpH7oxrcCAluI8jVN8xvfFabe6bRix-Pfe01nOInLxYzAD2hhz3vQK3mL3wZKzLmhiOqNEjIkkYna1Wq8Ph2nZPOQMjvDwRvPBDDafQSdVk_oDzw7PPgCx1kiugWdqBWlqKccT5kQkFSHWpJ7wt3rS7wD4qoH4HORNia2LL2R39XRPT6_psBsYsA2Hl0K5SF7xZHNBbX",
                },
                {
                  n: "4",
                  title: "Recoge tu Kit",
                  desc: "Disfruta comida fresca al instante.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_3Hcm8pWP0nalVw1rqe_ITxcVrVvp_HEw_Wlnc4CLWAnmGwij_jgcFq1Z375LE0e4AJbIma9tSzon-tcYdiT3u0C4QQZNNVhtU8sZCSkekpUjlyxo4zhfN9P8uU6n1xM-v7S5YyHSrmUxcToEpPu2-nb66Jp0i7C-YLx6oGdWPnDxNcmVMHae0jvxa2HsQbBwjz7O6_xI8eMcuAJqiqc_hyDIApct10r-yeN2_vByaYVKjxWbDv1rdqE9XBl3H9RaVgOne5CPrW7-",
                },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full grid place-content-center bg-gray-100 text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-700">
                    {step.n}
                  </div>
                  <div className="mt-3 sm:mt-4 aspect-video w-full bg-center bg-cover rounded-lg shadow-md"
                       style={{ backgroundImage: `url(${step.img})` }} />
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Planes */}
          <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-blue-600/10 rounded-xl mx-2 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Planes Flexibles para Ti</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Elige el plan que mejor se adapte a tus necesidades.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-8">
              {/* Individual */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-bold">Plan Semanal Individual</h3>
                <p className="mt-2 flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">Q 150</span>
                  <span className="text-base sm:text-lg text-gray-600">/ semana</span>
                </p>
                <button className="mt-4 sm:mt-6 w-full rounded-lg bg-orange-500/20 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-orange-700 hover:bg-orange-500/30 transition-colors">
                  Suscríbete
                </button>
                <ul className="mt-4 sm:mt-6 space-y-2 text-xs sm:text-sm">
                  <li>• 5 comidas saludables por semana</li>
                  <li>• Acceso a todas las opciones del menú</li>
                  <li>• Flexibilidad para cambiar elecciones</li>
                </ul>
              </div>

              {/* Grupal */}
              <div className="relative rounded-xl border-2 border-emerald-700 bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 rounded-bl-lg bg-purple-600 px-2 sm:px-3 py-1 text-xs font-bold text-white">
                  POPULAR
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Plan Semanal Grupal</h3>
                <p className="mt-2 flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-700">Q 120</span>
                  <span className="text-base sm:text-lg text-gray-600">/ persona / semana</span>
                </p>
                <button className="mt-4 sm:mt-6 w-full rounded-lg bg-emerald-700 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-emerald-800 transition-colors">
                  Suscríbete
                </button>
                <ul className="mt-4 sm:mt-6 space-y-2 text-xs sm:text-sm">
                  <li>• 5 comidas saludables por semana</li>
                  <li>• Acceso a todas las opciones del menú</li>
                  <li>• Descuento especial por grupo</li>
                  <li>• Ideal para grupos de estudio o amigos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 sm:py-16 lg:py-20 text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">Empieza a comer saludable hoy mismo</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Únete a la comunidad que ya disfruta comidas deliciosas y nutritivas sin estrés.
            </p>
            <button className="inline-flex h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl items-center gap-2">
              Regístrate
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-700/20 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-emerald-700 transition-colors">Contacto</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Preguntas Frecuentes</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Términos y Condiciones</a>
          </div>
          {/* Socials (omitimos íconos) */}
          <div className="flex gap-3 sm:gap-4">
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer" />
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer" />
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer" />
          </div>
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            2024 Nutrify. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
