import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Início", end: true },
  { to: "/condominio", label: "Condomínio" },
  { to: "/locacao", label: "Locação" },
  { to: "/venda", label: "Venda" },
  { to: "/about", label: "Quem Somos" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[var(--brand-accent)]"
      : "text-white hover:text-[var(--brand-accent)] transition-colors";

  return (
    <header className="on-dark sticky top-0 z-40 surface-graphite backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Capital Administradora — página inicial"
          className="flex items-center min-h-[44px] lg:min-h-0"
        >
          <img
            src="/logo-horizontal.png"
            alt="Capital Administradora"
            width="2368"
            height="600"
            className="h-9 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition text-white"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
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

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base font-medium">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 pb-4 flex flex-col">
          {navItems
            .filter((item) => item.to !== "/")
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkClass({ isActive })} flex items-center min-h-[48px] border-b border-white/5`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          {/* No celular a barra superior fica oculta, então o portal precisa estar aqui */}
          <a
            href="https://senaadm.superlogica.net/clients/areadocondomino"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 pill min-h-[48px] flex items-center justify-center bg-[var(--brand-accent)] text-black font-bold"
          >
            Portal do Condômino
          </a>
        </nav>
      )}
    </header>
  );
}
