export function Partners() {
  const partners = [
    "Remontowa Ship Repair Yard",
    "Nauta",
    "Sunreef Yachts",
    "Hotel Sopot",
    "Volvo Drywa",
    "Aros Marine"
  ];

  return (
    <section className="py-10 border-y border-border/40 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          <span className="text-secondary w-full lg:w-auto text-center lg:text-left">Zaufali nam</span>
          {partners.map((partner, i) => (
            <span key={i} className="text-muted-foreground/80">{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}