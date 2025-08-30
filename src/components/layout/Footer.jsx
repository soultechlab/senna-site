import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="logo.svg"
              alt="Logotipo Sena"
              className="h-8 w-auto object-contain"
            />
            <span className="font-semibold text-white">Senna Condomínios e Imóveis</span>
          </div>
          <p className="mt-3 text-white/70">
            Administração de condomínios, locação, compra e venda de imóveis com
            atendimento personalizado.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://wa.me/5521997627530"
              target="_blank"
              rel="noreferrer"
              className="pill px-4 py-2 bg-[var(--brand-accent)] text-black hover:bg-[#c9a332] font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="mailto:comercial@sennacondominioseimoveis.com.br"
              className="pill px-4 py-2 border border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              E-mail
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Atalhos</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="/#servicos" className="hover:text-white">
                Serviços
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:text-white">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-white">
                Contato
              </a>
            </li>
            <li>
              <a
                href="https://senaadm.superlogica.net/clients/areadocondomino"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Acesso Exclusivo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-[var(--brand-accent)]">
            Contato Direto
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-white/60 text-sm mb-1">Telefone</p>
              <a
                href="tel:+5521997627530"
                className="text-white hover:text-[var(--brand-accent)] transition font-medium"
              >
                (21) 99762-7530
              </a>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">E-mail</p>
              <a
                href="mailto:comercial@sennacondominioseimoveis.com.br"
                className="text-white hover:text-[var(--brand-accent)] transition font-medium break-all"
              >
                comercial@sennacondominioseimoveis.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-3 text-center">
        <p className="text-white/60">
          © {new Date().getFullYear()} Senna Condomínios e Imóveis. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
