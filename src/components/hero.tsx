"use client";

import { ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="container relative mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span className="inline-flex items-center gap-2 text-secondary">
              <ShieldCheck className="h-3.5 w-3.5" /> Mobilne atelier ReFormacja
            </span>
            <span>Skóra · Soft-touch · Drewno · PVC</span>
          </div>
          
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl xl:text-[4.2rem] font-semibold leading-tight whitespace-pre-line">
              Przywracamy blask{`\n`}każdemu detalowi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Skóra, soft-touch, drewno, ceramika i PVC – wchodzimy z mobilnym laboratorium kolorów, dokumentujemy każdy etap i oddajemy wnętrza gotowe do użycia.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 text-sm text-muted-foreground/90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-secondary" /> Certyfikowane systemy
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" /> Realizacje 24–72h
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" /> Gdynia · Sopot · Gdańsk
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 inline-flex items-center gap-2" href="#contact">
              Rezerwuj termin <ArrowRight className="h-4 w-4" />
            </a>
            <a className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-6" href="#gallery">
              Zobacz realizacje
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border/50 bg-card/50 px-5 py-4">
              <p className="text-3xl font-semibold text-primary">1200+</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">elementów przywróconych</p>
              <p className="text-sm text-muted-foreground/80 mt-1">skóry, drewno, soft-touch</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/50 px-5 py-4">
              <p className="text-3xl font-semibold text-primary">24h</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">średni czas wyceny</p>
              <p className="text-sm text-muted-foreground/80 mt-1">analiza foto + plan</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/50 px-5 py-4">
              <p className="text-3xl font-semibold text-primary">3</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">miasta mobilnej obsługi</p>
              <p className="text-sm text-muted-foreground/80 mt-1">Gdynia / Sopot / Gdańsk</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/50 px-5 py-4">
              <p className="text-3xl font-semibold text-primary">15 lat</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">praktyki w renowacji</p>
              <p className="text-sm text-muted-foreground/80 mt-1">projekty PL & UA</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[28px] border border-border/60 overflow-hidden">
            <img 
              src="/images/portfolio/skora-auto-kierownica-przed-po.jpg" 
              alt="Renowacja kierownicy" 
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}