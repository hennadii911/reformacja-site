import { Quote } from "lucide-react";

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

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto space-y-10">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Opinie</p>
          <h2 className="text-4xl font-semibold">Co mówią klienci</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-border/60 bg-card/70 p-6">
              <Quote className="w-8 h-8 text-secondary mb-4" />
              <p className="text-lg leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}