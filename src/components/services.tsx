import { Check } from "lucide-react";

const services = [
  {
    title: "Skóra",
    badge: "Colourlock Pro",
    desc: "Rekonstrukcja struktur, wypełnianie pęknięć i pigmenty custom.",
    image: "/images/portfolio/skora-auto-fotel-2-przed-po.jpg",
    features: ["Mat/Półmat 8–20 GU", "Pigment ręcznie mieszany", "Test ścieralności"],
  },
  {
    title: "Soft-touch",
    badge: "Marine grade",
    desc: "Nowa powłoka i nadruki ikon bez rozbierania kokpitu.",
    image: "/images/portfolio/soft-touch-przyciski-auto-przed-po.jpg",
    features: ["Struktura OEM", "Odporność na pot", "Mostki Sunreef"],
  },
  {
    title: "Drewno",
    badge: "High gloss",
    desc: "Lakier piano black, satyna lub oleje jachtowe.",
    image: "/images/portfolio/drewno-drzwi-przed-po.jpg",
    features: ["Szlif gradacja 2000", "Poler 3-etapowy", "Serwis nocny"],
  },
  {
    title: "Ceramika & kamień",
    badge: "Invisible fix",
    desc: "Maskowanie odprysków i rekonstrukcja wzoru.",
    image: "/images/portfolio/keramika-drewno-ugol-przed-po.jpg",
    features: ["Żywice UV", "Twardość 9H", "Zero widocznej krawędzi"],
  },
  {
    title: "PVC | Aluminium",
    badge: "PVC lab",
    desc: "Kolorowanie ram w satynie lub deep matt.",
    image: "/images/portfolio/plastik-auto-deska-przed-po.jpg",
    features: ["Primer adhezyjny", "RAL/NCS", "48h logistyk"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Usługi</p>
            <h2 className="text-4xl font-semibold">Modułowe pakiety ReFormacja</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="rounded-xl border border-border/60 bg-card/70 flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-flex w-max bg-secondary/20 text-secondary-foreground uppercase tracking-[0.35em] text-[10px] rounded-full px-2 py-0.5 mb-2">
                  {service.badge}
                </span>
                <h3 className="font-semibold text-2xl">{service.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{service.desc}</p>
                
                <ul className="space-y-2 text-sm text-muted-foreground mt-4 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-4 text-center text-sm mt-auto" href="#contact">
                  Zamów pakiet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}