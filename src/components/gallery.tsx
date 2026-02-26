"use client";

import { useState } from "react";

const allImages = [
  { src: "/images/portfolio/skora-auto-kierownica-przed-po.jpg", category: "Skóra", title: "Renowacja kierownicy BMW" },
  { src: "/images/portfolio/skora-auto-fotel-2-przed-po.jpg", category: "Skóra", title: "Fotel Porsche" },
  { src: "/images/portfolio/skora-auto-fotel-3-przed-po.jpg", category: "Skóra", title: "Fotel skórzany" },
  { src: "/images/portfolio/skora-auto-fotel-4-przed-po.jpg", category: "Skóra", title: "Siedzenie" },
  { src: "/images/portfolio/skora-auto-podlokotnik-przed-po.jpg", category: "Skóra", title: "Podłokietnik" },
  { src: "/images/portfolio/skora-auto-siedzenie-przed-po.jpg", category: "Skóra", title: "Boczek fotela" },
  { src: "/images/portfolio/soft-touch-przyciski-auto-przed-po.jpg", category: "Soft-touch", title: "Przyciski soft-touch" },
  { src: "/images/portfolio/plastik-auto-deska-przed-po.jpg", category: "Soft-touch", title: "Deska rozdzielcza" },
  { src: "/images/portfolio/plastik-auto-deska-2-przed-po.jpg", category: "Soft-touch", title: "Torpeda" },
  { src: "/images/portfolio/drewno-drzwi-przed-po.jpg", category: "Drewno", title: "Drzwi drewniane" },
  { src: "/images/portfolio/drewno-przed-po-1.jpg", category: "Drewno", title: "Fornir piano" },
  { src: "/images/portfolio/keramika-drewno-ugol-przed-po.jpg", category: "Ceramika", title: "Naprawa ceramiki" },
];

const categories = ["Wszystko", "Skóra", "Soft-touch", "Drewno", "Ceramika"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Wszystko");
  
  const filteredImages = activeCategory === "Wszystko" 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Galeria</p>
            <h2 className="text-4xl font-semibold">Kliknij, aby zobaczyć detale</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`h-8 rounded-md px-3 text-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border bg-background shadow-xs hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredImages.map((img, i) => (
            <div 
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/60 bg-muted cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs uppercase tracking-wider text-white/70">{img.category}</p>
                <p className="text-white font-medium">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}