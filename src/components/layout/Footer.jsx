import { Mail, Globe } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const atalhos = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Condomínio", href: "/condominio" },
  { label: "Locação", href: "/locacao" },
  { label: "Venda", href: "/venda" },
  { label: "Quem Somos", href: "/about" },
  { label: "Contato", href: "/#contato" },
  {
    label: "Portal do Condômino",
    href: "https://senaadm.superlogica.net/clients/areadocondomino",
    externo: true,
  },
];

// No toque, o alvo precisa de 44px de altura; no desktop volta ao tamanho do texto.
const tapTarget =
  "inline-flex items-center gap-2 min-h-[44px] lg:min-h-0 transition";

export default function Footer() {
  return (
    <footer className="on-dark surface-graphite text-white">
      <div className="h-px w-full rule-metal" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <img
            src="/logo-horizontal.png"
            alt="Capital Administradora"
            className="h-10 w-auto object-contain"
            width="2368"
            height="600"
          />
          <p className="mt-4 text-white/70">
            Administração de condomínios, locação, compra e venda de imóveis no
            Rio de Janeiro, com atendimento personalizado e prestação de contas
            transparente.
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <a
              href="https://wa.me/5521997627530"
              target="_blank"
              rel="noreferrer"
              className="pill px-5 min-h-[44px] bg-[var(--brand-accent)] text-black hover:bg-[var(--brand-accent-deep)] font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="mailto:contato@administradoracapital.com.br"
              className="pill px-5 min-h-[44px] border border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              E-mail
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Atalhos</h4>
          <ul className="text-white/80 lg:space-y-2">
            {atalhos.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.externo
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className={`${tapTarget} hover:text-white`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-[var(--brand-accent)]">
            Contato Direto
          </h4>
          <div className="space-y-3 lg:space-y-4">
            <div>
              <p className="text-white/60 text-sm mb-1">WhatsApp / Telefone</p>
              <a
                href="tel:+5521997627530"
                className={`${tapTarget} text-white hover:text-[var(--brand-accent)] font-medium`}
              >
                (21) 99762-7530
              </a>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">E-mail</p>
              <a
                href="mailto:contato@administradoracapital.com.br"
                className={`${tapTarget} text-white hover:text-[var(--brand-accent)] font-medium break-all`}
              >
                contato@administradoracapital.com.br
              </a>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Instagram</p>
              <a
                href="https://www.instagram.com/capitalsuaadministradora/"
                target="_blank"
                rel="noreferrer"
                className={`${tapTarget} text-white hover:text-[var(--brand-accent)] font-medium`}
              >
                <FaInstagram className="w-4 h-4 shrink-0" />
                @capitalsuaadministradora
              </a>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Site</p>
              <a
                href="https://administradoracapital.com.br"
                className={`${tapTarget} text-white hover:text-[var(--brand-accent)] font-medium break-all`}
              >
                <Globe className="w-4 h-4 shrink-0" />
                administradoracapital.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-white/55 text-xs">
          © {new Date().getFullYear()} Capital Administradora. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
