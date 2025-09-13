import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import SEO from "../components/SEO";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Criar o mailto com todos os dados
    const subject = `Contato do site - ${name}`;
    const body = `Nome: ${name}
Email: ${email}
Telefone: ${phone}

Mensagem:
${message}

---
Esta mensagem foi enviada através do formulário de contato do site.`;
    
    const mailtoLink = `mailto:comercial@sennacondominioseimoveis.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir cliente de email
    window.location.href = mailtoLink;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Senna Administradora",
    "description": "Empresa especializada em administração de condomínios, locação e venda de imóveis no Rio de Janeiro",
    "url": "https://sennacondominioseimoveis.com.br",
    "telephone": "+55-21-99762-7530",
    "email": "comercial@sennacondominioseimoveis.com.br",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.9068",
      "longitude": "-43.1729"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-22.9068",
        "longitude": "-43.1729"
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Imobiliários",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Administração de Condomínios",
            "description": "Gestão completa de condomínios com transparência e eficiência"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Locação de Imóveis",
            "description": "Intermediação completa para locação de imóveis residenciais e comerciais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Venda de Imóveis",
            "description": "Consultoria especializada para compra e venda de imóveis"
          }
        }
      ]
    },
    "sameAs": [
      "https://wa.me/5521997627530"
    ]
  };

  return (
    <>
      <SEO
        title="Senna Administradora - Gestão de Condomínios, Locação e Venda de Imóveis RJ"
        description="Administração de condomínios, locação e venda de imóveis no Rio de Janeiro. Atendimento personalizado, transparência e suporte próximo. Entre em contato!"
        keywords="administração de condomínios Rio de Janeiro, locação de imóveis RJ, venda de imóveis Rio de Janeiro, administradora predial, gestão de condomínios, imobiliária RJ"
        canonicalUrl="https://sennacondominioseimoveis.com.br"
        structuredData={structuredData}
      />
      <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg"
            alt="Prédios residenciais e comerciais na cidade do Rio de Janeiro - Administração de condomínios Senna"
            className="w-full h-[60vh] sm:h-[70vh] object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-[60vh] sm:h-[70vh] flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Gestão de Condomínios com{" "}
              <span className="text-[var(--brand-accent)]">Transparência</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Administração, locação, compra e venda de imóveis com atendimento
              personalizado e suporte próximo.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#contato">
                Solicitar Proposta
              </Button>
              <Button
                variant="secondary"
                href="https://senaadm.superlogica.net/clients/areadocondomino"
              >
                Acesso Exclusivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="section-padding bg-gradient-to-b from-white to-[var(--brand-muted)]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Serviços"
            title={
              <>
                Soluções{" "}
                <span className="text-[var(--brand-accent)]">completas</span>{" "}
                para o seu condomínio
              </>
            }
            subtitle="Oferecemos um atendimento personalizado com tecnologia de ponta para garantir a melhor gestão do seu patrimônio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
            <Card
              img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              title="Administração de Condomínios"
              description="Gestão financeira, assembleias, boletos e comunicação integrada."
            />
            <Card
              img="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
              title="Locação"
              description="Intermediação completa com análise, vistoria e contratos."
            />
            <Card
              img="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
              title="Compra e Venda"
              description="Avaliação, divulgação e negociação segura do seu imóvel."
            />
            <Card
              img="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              title="Suporte ao Condômino"
              description="App do condômino com 2ª via, comunicados e serviços."
            />
          </div>
        </div>
      </section>

      <section id="quem-somos" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1200&auto=format&fit=crop"
              alt="Escritório moderno da Senna Administradora com profissionais especializados em gestão de condomínios"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--brand-accent)] to-[#c9a332] rounded-3xl opacity-20"></div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-semibold uppercase mb-6">
              Sobre Nós
            </div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Quem <span className="text-[var(--brand-accent)]">Somos</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Senna Administradora é uma empresa com experiência no
              mercado imobiliário, realizando administração de condomínios,
              locações, compra e venda de imóveis. Nosso diferencial é o
              atendimento personalizado direcionado à necessidade de cada
              cliente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#contato">
                Solicitar Proposta
              </Button>
              <Button
                variant="dark"
                href="https://senaadm.superlogica.net/clients/areadocondomino"
              >
                Acesso Exclusivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="section-padding bg-gradient-to-br from-[var(--brand-muted)] to-[var(--brand-off-white)]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Contato"
            title={
              <>
                Vamos{" "}
                <span className="text-[var(--brand-accent)]">conversar</span>?
              </>
            }
            subtitle="Entre em contato conosco e descubra como podemos ajudar na gestão do seu condomínio."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contato Lateral */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h4 className="text-xl font-bold mb-4 text-gray-900">
                  Informações de Contato
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefone</p>
                      <a
                        href="tel:+5521997627530"
                        className="text-gray-600 hover:text-[var(--brand-accent)] transition"
                      >
                        (21) 99762-7530
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">E-mail</p>
                      <a
                        href="mailto:comercial@sennacondominioseimoveis.com.br"
                        className="text-gray-600 hover:text-[var(--brand-accent)] transition break-all"
                      >
                        comercial@sennacondominioseimoveis.com.br
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4 flex-wrap">
                  <a
                    href="https://wa.me/5521997627530"
                    target="_blank"
                    rel="noreferrer"
                    className="pill px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:comercial@sennacondominioseimoveis.com.br"
                    className="pill px-6 py-3 bg-brand-secondary text-white hover:bg-brand-secondaryDark font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    E-mail
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  required
                  placeholder="Seu nome*"
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Seu e-mail*"
                  className="rounded-xl border border-gray-200 px-4 py-3 focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition"
                />
              </div>
              <input
                name="phone"
                required
                type="tel"
                placeholder="Telefone*"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition"
              />
              <textarea
                name="message"
                required
                placeholder="Sua mensagem*"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 min-h-[120px] focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent)]/20 transition resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full rounded-xl px-6 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[#c9a332] text-black font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Entre em Contato
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
