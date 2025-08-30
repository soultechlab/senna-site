import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-secondary backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src="logo.svg"
            alt="Logotipo Senna"
            className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/20 transition text-white"
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

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base font-medium text-white">
           <Link to="/" className="hover:text-white/70">
            Inicio
          </Link>
          <Link to="/condominio" className="hover:text-white/70">
            Condomínio
          </Link>
          <Link to="/locacao" className="hover:text-white/70">
            Locação
          </Link>
          <Link to="/venda" className="hover:text-white/70">
            Venda
          </Link>
          <Link to="/about" className="hover:text-white/70">
            Quem Somos
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-white/20 px-4 pb-4 flex flex-col gap-4 text-white">
          <Link to="/condominio" onClick={() => setMobileOpen(false)}>
            Condomínio
          </Link>
          <Link to="/locacao" onClick={() => setMobileOpen(false)}>
            Locação
          </Link>
          <Link to="/venda" onClick={() => setMobileOpen(false)}>
            Venda
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>
            Quem Somos
          </Link>
        </nav>
      )}
    </header>
  );
}