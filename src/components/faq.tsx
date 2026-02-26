"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Czy muszę demontować element?",
    a: "Nie. Większość prac wykonujemy in situ, bez demontażu. Oszczędza to czas i eliminuje ryzyko uszkodzenia sąsiednich elementów.",
  },
  {
    q: "Jak przygotować zdjęcia do wyceny?",
    a: "Najlepiej 2 zdjęcia z dystansu (cały element) + 2-3 detale uszkodzenia w dobrym świetle. Wystarczy wysłać na WhatsApp.",
  },
  {
    q: "Jak długo utrzymuje się efekt?",
    a: "Zależy od materiału i ekspozycji. Przy standardowym użytkowaniu gwarantujemy 12-24 miesiące. Na elementy narażone na UV zalecamy dodatkową ochronę.",
  },
  {
    q: "Czy pracujecie poza Trójmiastem?",
    a: "Tak, ale z dopłatą za dojazd. Skontaktuj się z nami – ustalimy warunki indywidualnie.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 space-y-4">
          <p className="uppercase text-xs tracking-[0.4em] text-muted-foreground">FAQ</p>
          <h2 className="text-4xl font-semibold">Najczęstsze pytania przed wyceną</h2>
          <p className="text-muted-foreground">Nie widzisz odpowiedzi? Napisz na WhatsApp – odpowiadamy tego samego dnia.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-border rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-medium">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}