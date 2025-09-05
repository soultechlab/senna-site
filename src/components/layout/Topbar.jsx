import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="w-full text-xs bg-brand-secondary text-white/90 py-2 px-4 border-b border-white/20 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a 
            className="flex items-center gap-2 hover:text-[var(--brand-accent)] transition-all duration-300 group" 
            href="tel:+5521997627530"
          >
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--brand-accent)]/20 transition-all duration-300">
              <Phone className="w-3 h-3" />
            </div>
            <span className="font-medium text-xs">(21) 99762-7530</span>
          </a>
          
          <div className="w-px h-4 bg-white/20"></div>
          
          <a
            className="flex items-center gap-2 hover:text-[var(--brand-accent)] transition-all duration-300 group"
            href="mailto:comercial@sennacondominioseimoveis.com.br"
          >
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--brand-accent)]/20 transition-all duration-300">
              <Mail className="w-3 h-3" />
            </div>
            <span className="font-medium text-xs">comercial@sennacondominioseimoveis.com.br</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-xs font-medium uppercase tracking-wide">Siga-nos:</span>
          
          <div className="flex items-center gap-3">
            <a
              className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--brand-accent)] hover:text-black transition-all duration-300 group"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FaFacebookF className="w-3 h-3" />
            </a>
            <a
              className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--brand-accent)] hover:text-black transition-all duration-300 group"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <FaInstagram className="w-3 h-3" />
            </a>
          </div>
          
          <div className="w-px h-4 bg-white/20 ml-2"></div>
          
          <a
            href="https://senaadm.superlogica.net/clients/areadocondomino"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-1 bg-[var(--brand-accent)] text-black text-xs font-bold rounded-full hover:bg-[#c9a332] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          >
            Portal do Condômino
          </a>
        </div>
      </div>
    </div>
  );
}
