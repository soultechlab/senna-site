import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src="logo.png"
            alt="Logotipo Senna"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          <Link to="/services" className="hover:text-black/70">
            Serviços
          </Link>
          <Link to="/about" className="hover:text-black/70">
            Quem Somos
          </Link>
          <Link to="/contact" className="hover:text-black/70">
            Contato
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-gray-200 px-4 pb-4 flex flex-col gap-4">
          <Link to="/#servicos" onClick={() => setMobileOpen(false)}>
            Serviços
          </Link>
          <Link to="/sobre" onClick={() => setMobileOpen(false)}>
            Quem Somos
          </Link>
          <Link to="/contato" onClick={() => setMobileOpen(false)}>
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}