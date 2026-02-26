"use client";

import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span>ReFormacja</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="transition-colors hover:text-primary" href="#services">Usługi</a>
          <a className="transition-colors hover:text-primary" href="#projects">Realizacje</a>
          <a className="transition-colors hover:text-primary" href="#materials">Technologie</a>
          <a className="transition-colors hover:text-primary" href="#faq">FAQ</a>
          <a className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 text-sm" href="#contact">Kontakt</a>
        </nav>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col gap-4 p-6">
            <a className="transition-colors hover:text-primary" href="#services" onClick={() => setIsOpen(false)}>Usługi</a>
            <a className="transition-colors hover:text-primary" href="#projects" onClick={() => setIsOpen(false)}>Realizacje</a>
            <a className="transition-colors hover:text-primary" href="#materials" onClick={() => setIsOpen(false)}>Technologie</a>
            <a className="transition-colors hover:text-primary" href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
            <a className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-4 text-center" href="#contact" onClick={() => setIsOpen(false)}>Kontakt</a>
          </nav>
        </div>
      )}
    </header>
  );
}