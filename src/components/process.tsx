const steps = [
  { num: "01", title: "Wycena online", desc: "Zdjęcia + opis materiału → plan naprawy w 24h." },
  { num: "02", title: "Mobilny setup", desc: "Filtracja, oświetlenie i lab kolorów przyjeżdżają do Ciebie." },
  { num: "03", title: "Renowacja", desc: "Rekonstrukcja struktury, kolor + zabezpieczenie." },
  { num: "04", title: "Kontrola & gwarancja", desc: "Protokół z prac, zalecenia i gwarancja do 24 mies." },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="container mx-auto space-y-10">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Proces</p>
          <h2 className="text-4xl font-semibold">Transparentna ścieżka współpracy</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative rounded-3xl border border-border/60 bg-card/60 p-6">
              <span className="text-5xl font-bold text-border absolute top-4 right-6 opacity-50">{step.num}</span>
              <h3 className="text-xl font-semibold mb-2 mt-8">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}