import Image from "next/image";

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
      {/* Header */}
      <header className="bg-neutral-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">ReFormacja</h1>
          <p className="text-neutral-400">Mobilne atelier renowacji</p>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-100 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Przywracamy blask każdemu detalowi</h2>
          <p className="text-xl text-neutral-600 mb-8">Skóra, soft-touch, drewno, ceramika i PVC</p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-neutral-900">1200+</div>
              <div className="text-neutral-500">elementów przywróconych</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neutral-900">15</div>
              <div className="text-neutral-500">lat praktyki</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neutral-900">3</div>
              <div className="text-neutral-500">miasta obsługi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nasze usługi</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="p-6 bg-neutral-50 rounded-lg text-center">
              <div className="text-3xl mb-2">🚗</div>
              <h3 className="font-bold mb-2">Skóra premium</h3>
              <p className="text-sm text-neutral-600">Matowe i półmatowe wykończenia Colourlock</p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg text-center">
              <div className="text-3xl mb-2">🔲</div>
              <h3 className="font-bold mb-2">Plastiki & soft-touch</h3>
              <p className="text-sm text-neutral-600">Przyciski, klamki, elementy mostków</p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg text-center">
              <div className="text-3xl mb-2">🪵</div>
              <h3 className="font-bold mb-2">Drewno & forniry</h3>
              <p className="text-sm text-neutral-600">Forniry piano, satyna, lakier marine</p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg text-center">
              <div className="text-3xl mb-2">🏺</div>
              <h3 className="font-bold mb-2">Ceramika & kamień</h3>
              <p className="text-sm text-neutral-600">Niewidoczne naprawy płytek i blatów</p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg text-center">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold mb-2">Stolarka PVC</h3>
              <p className="text-sm text-neutral-600">Kolory RAL/NCS bez demontażu ram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Galeria realizacji</h2>
          <p className="text-center text-neutral-600 mb-12">Kliknij, aby zobaczyć detale</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg aspect-square bg-neutral-200">
                <img
                  src={img.src}
                  alt={img.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <div className="text-white font-bold">{img.title}</div>
                    <div className="text-white/70 text-sm">{img.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
          <p className="text-neutral-400 mb-8">Wyślij zdjęcia, a wrócimy z planem w 24h</p>
          <a 
            href="https://wa.me/48511312870" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            📱 WhatsApp: +48 511 312 870
          </a>
          <div className="mt-8 text-neutral-400">
            <p>📍 Gdynia / Sopot / Gdańsk (Mobilny Serwis)</p>
            <p>🕐 Pon–Sob 08:00–20:00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-neutral-500 py-4 text-center text-sm">
        <p>© 2026 ReFormacja. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </main>
  );
}