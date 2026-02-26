export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card rounded-[32px] p-8 lg:p-16 border border-border/60 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <p className="uppercase text-xs tracking-[0.4em] text-muted-foreground">Kontakt</p>
              <h2 className="text-4xl font-semibold">Wyślij zdjęcia, a wrócimy z planem w 24h</h2>
              <p className="text-muted-foreground text-lg">
                Najlepiej 2 zdjęcia z dystansu + detal. W odpowiedzi dostaniesz zakres prac, czas i koszt.
              </p>

              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-1">Telefon</p>
                  <a href="tel:+48511312870" className="text-xl font-semibold hover:text-primary transition-colors">
                    +48 511 312 870
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-1">Email</p>
                  <a href="mailto:domrest7@gmail.com" className="text-xl font-semibold hover:text-primary transition-colors break-words">
                    domrest7@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-1">Obszar</p>
                  <p className="text-xl font-semibold">Gdynia / Sopot / Gdańsk</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 inline-flex items-center justify-center gap-2"
                  href="https://wa.me/48511312870?text=Dzień%20dobry,%20chcę%20wysłać%20zdjęcia%20do%20wyceny"
                >
                  📱 Wyślij zdjęcia na WhatsApp
                </a>
                <a 
                  className="border bg-background shadow-xs hover:bg-accent h-10 rounded-md px-6 inline-flex items-center justify-center"
                  href="mailto:domrest7@gmail.com?subject=Wycena%20ReFormacja"
                >
                  Dołącz zdjęcia do maila
                </a>
              </div>
            </div>

            <div className="lg:w-72 space-y-6">
              <div className="border border-dashed border-border rounded-3xl p-6 bg-muted/30">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Godziny</p>
                <p className="text-2xl font-semibold mt-1">Pon–Sob<br/>08:00–20:00</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Realizacje nocne i nagłe możliwe po wcześniejszym uzgodnieniu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}