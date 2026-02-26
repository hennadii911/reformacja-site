import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Partners } from "@/components/partners";
import { Projects } from "@/components/projects";
import { Gallery } from "@/components/gallery";
import { Technologies } from "@/components/technologies";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Projects />
      <Gallery />
      <Technologies />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}