const projects = [
  {
    title: "Mostek kapitański Sunreef 80",
    category: "Jacht prywatny",
    client: "Sunreef Yachts",
    desc: "Regeneracja paneli soft-touch i kierownicy po ekspozycji UV.",
    result: "24h pracy na postoju, zero demontażu, fabryczna struktura.",
    image: "/images/portfolio/skora-auto-kierownica-przed-po.jpg",
  },
  {
    title: "Aston Martin Vantage '05",
    category: "Samochód klasyczny",
    client: "Kolekcjoner prywatny",
    desc: "Fotele Ivory i boczki drzwi zrekonstruowane pigmentem custom.",
    result: "5 elementów malowanych systemem Colourlock, gwarancja 12 m-cy.",
    image: "/images/portfolio/skora-auto-fotel-3-przed-po.jpg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Case study</p>
            <h2 className="text-4xl font-semibold">Realizacje, które definiują standard</h2>
          </div>
          <p className="text-muted-foreground max-w-xl">
            Dokumentujemy każdy etap: pomiar połysku, raport materiałów i zdjęcia makro przed/po.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <div key={i} className="rounded-[32px] overflow-hidden border border-border/60 grid md:grid-cols-[0.6fr_0.4fr]">
              <div className="relative min-h-[320px]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="bg-card p-8 space-y-4 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary">{project.category}</p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <div className="w-12 h-0.5 bg-border my-2"></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-1">Klient</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
                <p className="text-sm font-medium text-primary">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}