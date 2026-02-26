import Image from "next/image";

const services = [
  {
    title: "Skóra premium",
    icon: "🚗",
    desc: "Matowe i półmatowe wykończenia Colourlock",
    features: ["Mat/Półmat 8–20 GU", "Pigment ręcznie mieszany", "Test ścieralności"],
  },
  {
    title: "Plastiki & soft-touch",
    icon: "🔲",
    desc: "Przyciski, klamki, elementy mostków",
    features: ["Struktura OEM", "Odporność na pot", "Mostki Sunreef"],
  },
  {
    title: "Drewno & forniry",
    icon: "🪵",
    desc: "Forniry piano, satyna, lakier marine",
    features: ["Szlif gradacja 2000", "Poler 3-etapowy", "Serwis nocny"],
  },
  {
    title: "Ceramika & kamień",
    icon: "🏺",
    desc: "Niewidoczne naprawy płytek i blatów",
    features: ["Żywice UV", "Twardość 9H", "Zero widocznej krawędzi"],
  },
  {
    title: "Stolarka PVC",
    icon: "🏠",
    desc: "Kolory RAL/NCS bez demontażu ram",
    features: ["Primer adhezyjny", "RAL/NCS", "48h logistyk"],
  },
];

const technologies = [
  { title: "Skóra", items: ["Odtwarzanie perforacji", "Colourlock + Fenice", "Impregnaty hydro"] },
  { title: "Soft-touch", items: ["Warstwy odporne na pot", "Aplikacja aerografem", "Bez demontażu"] },
  { title: "Drewno", items: ["Naprawy mikro-ubytek", "Poler 3-etapowy", "Stabilizacja UV"] },
  { title: "Ceramika", items: ["Dobór żywic laserowy", "Prace nocne", "Gwarancja wodoodporności"] },
];

const processSteps = [
  { num: "01", title: "Wycena online", desc: "Zdjęcia + opis materiału → plan naprawy w 24h." },
  { num: "02", title: "Mobilny setup", desc: "Filtracja, oświetlenie i lab kolorów przyjeżdżają do Ciebie." },
  { num: "03", title: "Renowacja", desc: "Rekonstrukcja struktury, kolor + zabezpieczenie." },
  { num: "04", title: "Kontrola & gwarancja", desc: "Protokół z prac, zalecenia i gwarancja do 24 mies." },
];

const testimonials = [
  {
    text: "Renowacja mostka w Marinie Gdynia odbyła się bez blokowania jednostki – prace nocne i zero pyłu na elektronice.",
    author: "Marek W.",
    role: "Kapitan jachtu motorowego",
  },
  {
    text: "Fotele w Astonie znów pachną i wyglądają jak w salonie. Kolor identyczny, a prace wykonane w moim garażu.",
    author: "Paweł K.",
    role: "Kolekcjoner klasyków",
  },
];

const partners = ["Remontowa Ship Repair Yard", "Nauta", "Sunreef Yachts", "Hotel Sopot", "Volvo Drywa", "Aros Marine"];

const portfolioImages = [
  { src: "/images/portfolio/skora-auto-kierownica-przed-po.jpg", title: "Renowacja kierownicy", category: "Skóra" },
  { src: "/images/portfolio/skora-auto-siedzenie-przed-po.jpg", title: "Renowacja fotela", category: "Skóra" },
  { src: "/images/portfolio/skora-auto-fotel-2-przed-po.jpg", title: "Fotel skórzany", category: "Skóra" },
  { src: "/images/portfolio/skora-auto-fotel-3-przed-po.jpg", title: "Renowacja siedzenia", category: "Skóra" },
  { src: "/images/portfolio/skora-auto-podlokotnik-przed-po.jpg", title: "Podłokietnik", category: "Skóra" },
  { src: "/images/portfolio/skora-auto-drzwiczki-przed-po.jpg", title: "Drzwi skórzane", category: "Skóra" },
  { src: "/images/portfolio/plastik-auto-deska-przed-po.jpg", title: "Deska rozdzielcza", category: "Plastik" },
  { src: "/images/portfolio/plastik-auto-deska-2-przed-po.jpg", title: "Torpeda", category: "Plastik" },
  { src: "/images/portfolio/plastik-auto-drzwi-przed-po.jpg", title: "Elementy drzwi", category: "Plastik" },
  { src: "/images/portfolio/soft-touch-przyciski-auto-przed-po.jpg", title: "Przyciski soft-touch", category: "Soft-touch" },
  { src: "/images/portfolio/drewno-drzwi-przed-po.jpg", title: "Drzwi drewniane", category: "Drewno" },
  { src: "/images/portfolio/drewno-przed-po-1.jpg", title: "Renowacja drewna", category: "Drewno" },
  { src: "/images/portfolio/keramika-drewno-ugol-przed-po.jpg", title: "Naprawa ceramiki", category: "Ceramika" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">ReFormacja</h1>
            <p className="text-xs text-neutral-500">Mobilne atelier</p>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-neutral-600">
            <a href="#uslugi" className="hover:text-neutral-900">Usługi</a>
            <a href="#portfolio" className="hover:text-neutral-900">Portfolio</a>
            <a href="#proces" className="hover:text-neutral-900">Proces</a>
            <a href="#kontakt" className="hover:text-neutral-900">Kontakt</a>
          </div>
          <a href="https://wa.me/48511312870" className="bg-neutral-900 text-white px-4 py-2 rounded-full text-sm hover:bg-neutral-800 transition-colors">
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-neutral-50 via-neutral-100/50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Skóra · Soft-touch · Drewno · PVC</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Przywracamy blask<br />
            <span className="text-neutral-400">każdemu detalowi</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
            Skóra, soft-touch, drewno, ceramika i PVC – wchodzimy z mobilnym laboratorium kolorów, 
            dokumentujemy każdy etap i oddajemy wnętrza gotowe do użycia.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <span className="bg-white px-4 py-2 rounded-full text-sm border border-neutral-200">✓ Certyfikowane systemy</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm border border-neutral-200">✓ Realizacje 24–72h</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm border border-neutral-200">✓ Gdynia · Sopot · Gdańsk</span>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900">1200+</div>
              <div className="text-sm text-neutral-500 mt-1">elementów przywróconych</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900">24h</div>
              <div className="text-sm text-neutral-500 mt-1">średni czas wyceny</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900">3</div>
              <div className="text-sm text-neutral-500 mt-1">miasta obsługi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900">15</div>
              <div className="text-sm text-neutral-500 mt-1">lat praktyki</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-neutral-500 mb-8">Zaufali nam</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-neutral-400 text-sm font-medium">
            {partners.map((partner, i) => (
              <span key={i} className="hover:text-neutral-600 transition-colors">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="uslugi" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Modułowe pakiety ReFormacja</h2>
          <p className="text-neutral-500 text-center mb-16">Kompleksowe rozwiązania dla każdego materiału</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8 hover:bg-neutral-100 transition-colors group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-neutral-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className="inline-block mt-6 text-sm font-medium text-neutral-900 hover:underline">
                  Zamów pakiet →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-4 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Galeria realizacji</h2>
          <p className="text-neutral-400 text-center mb-16">Kliknij, aby zobaczyć detale</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {portfolioImages.map((img, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl aspect-square bg-neutral-800 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">{img.category}</span>
                  <span className="font-medium">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#kontakt" className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors">
              Wyślij zdjęcia do wyceny
            </a>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technologie</h2>
          <p className="text-neutral-500 text-center mb-16">Systemy i chemia, na których pracujemy</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold mb-4 pb-4 border-b border-neutral-200">{tech.title}</h3>
                <ul className="space-y-3 text-sm text-neutral-600">
                  {tech.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="py-24 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proces</h2>
          <p className="text-neutral-500 text-center mb-16">Transparentna ścieżka współpracy</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-neutral-200 mb-4">{step.num}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Co mówią klienci</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8">
                <p className="text-neutral-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-neutral-400 mb-12">Wyślij zdjęcia, a wrócimy z planem w 24h</p>
          
          <div className="bg-neutral-800 rounded-2xl p-8 md:p-12">
            <p className="text-neutral-300 mb-8">Najlepiej 2 zdjęcia z dystansu + detal. W odpowiedzi dostaniesz zakres prac, czas i koszt.</p>
            
            <a 
              href="https://wa.me/48511312870?text=Dzień%20dobry,%20chcę%20wysłać%20zdjęcia%20do%20wyceny" 
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
            >
              <span className="text-2xl">📱</span>
              WhatsApp: +48 511 312 870
            </a>
            
            <div className="mt-12 pt-8 border-t border-neutral-700 grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold mb-2">Obszar</h4>
                <p className="text-neutral-400">Gdynia / Sopot / Gdańsk<br/>(Mobilny Serwis)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Godziny</h4>
                <p className="text-neutral-400">Pon–Sob 08:00–20:00<br/>Realizacje nocne możliwe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-neutral-500 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-white">ReFormacja</span>
            <span className="text-sm ml-2">© 2026 Wszystkie prawa zastrzeżone</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="https://wa.me/48511312870" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="mailto:domrest7@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}