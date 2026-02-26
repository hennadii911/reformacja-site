import { Sparkles, Trees, Gem } from "lucide-react";

const technologies = [
  {
    icon: Sparkles,
    title: "Skóry & Alcantara",
    desc: "Pigment custom, top-coat mat/półmat, ochrona hydro.",
    items: ["Odtwarzanie perforacji", "Colourlock + Fenice", "Impregnaty hydro"],
  },
  {
    icon: Sparkles,
    title: "Soft-touch & OEM",
    desc: "Mieszanki strukturalne + nadruki farbami UV.",
    items: ["Warstwy odporne na pot", "Aplikacja aerografem", "Bez demontażu"],
  },
  {
    icon: Trees,
    title: "Drewno i forniry",
    desc: "Lakierowanie piano, satyna i oleje marine.",
    items: ["Naprawy mikro-ubytek", "Poler 3-etapowy", "Stabilizacja UV"],
  },
  {
    icon: Gem,
    title: "Kamień & ceramika",
    desc: "Żywice UV, odtwarzanie wzoru i faktury.",
    items: ["Dobór żywic laserowy", "Prace nocne", "Gwarancja wodoodporności"],
  },
];

export function Technologies() {
  return (
    <section id="materials" className="py-24 px-6 bg-card/20">
      <div className="container mx-auto space-y-10">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Technologie</p>
          <h2 className="text-4xl font-semibold">Systemy i chemia, na których pracujemy</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="rounded-xl border border-border/60 bg-card/70 p-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary/30 text-secondary flex items-center justify-center mb-4">
                <tech.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{tech.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tech.desc}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tech.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}