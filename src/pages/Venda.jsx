import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";
import { Home, MapPin, Car, Bath, Bed, Square, Eye, FileText, Handshake, DollarSign, Search, FileCheck, Building2, Store, TreePine } from "lucide-react";
import { imoveis } from "../data/imoveis";
import { Link } from "react-router-dom";

export default function Venda() {
  console.log("Imoveis data:", imoveis);
  console.log("Imoveis length:", imoveis.length);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Venda de Imóveis - Senna Administradora",
    "description": "Compra e venda de imóveis no Rio de Janeiro. Casas, apartamentos, terrenos e imóveis comerciais com avaliação profissional e suporte completo.",
    "url": "https://sennacondominioseimoveis.com.br/venda",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sennacondominioseimoveis.com.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Venda",
          "item": "https://sennacondominioseimoveis.com.br/venda"
        }
      ]
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Compra e Venda de Imóveis",
      "description": "Intermediação completa para compra e venda de imóveis no Rio de Janeiro com avaliação profissional e suporte jurídico",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Senna Administradora"
      },
      "areaServed": "Rio de Janeiro, RJ",
      "serviceType": [
        "Venda de Casas",
        "Venda de Apartamentos",
        "Venda de Imóveis Comerciais",
        "Venda de Terrenos",
        "Avaliação de Imóveis",
        "Consultoria Imobiliária"
      ]
    }
  };
  
  return (
    <>
      <SEO
        title="Venda de Imóveis no Rio de Janeiro | Senna Administradora"
        description="Compra e venda de casas, apartamentos e terrenos no RJ. Avaliação profissional, marketing estratégico e suporte completo até a escritura."
        keywords="venda de imóveis Rio de Janeiro, comprar casa RJ, comprar apartamento Rio de Janeiro, venda comercial RJ, imóveis à venda"
        canonicalUrl="https://sennacondominioseimoveis.com.br/venda"
        structuredData={structuredData}
      />
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop"
            alt="Casas e apartamentos à venda no Rio de Janeiro - Senna Administradora"
            className="w-full h-[60vh] object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-[60vh] flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Imóveis à{" "}
              <span className="text-[var(--brand-accent)]">Venda</span>
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-6">
              Encontre o imóvel dos seus sonhos com as melhores oportunidades do mercado
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#imoveis">
                Ver Imóveis
              </Button>
              <Button variant="secondary" href="tel:+5521997627530">
                Falar com Corretor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-brand-offWhite">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              badge="Nossos Serviços"
              title="Compra e Venda Completa de Imóveis"
            />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços completos de intermediação, desde a avaliação até a escritura, 
              garantindo segurança para compradores e vendedores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Para <span className="text-[var(--brand-accent)]">Compradores</span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Portfólio Exclusivo</h4>
                    <p className="text-gray-600">
                      Imóveis selecionados com preços competitivos e localização privilegiada
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[var(--brand-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Documentação Segura</h4>
                    <p className="text-gray-600">
                      Verificação completa da documentação e regularidade do imóvel
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Acompanhamento Total</h4>
                    <p className="text-gray-600">
                      Suporte desde a visita até a assinatura da escritura
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Para <span className="text-[var(--brand-secondary)]">Vendedores</span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[var(--brand-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Avaliação Precisa</h4>
                    <p className="text-gray-600">
                      Análise de mercado profissional para precificar corretamente seu imóvel
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Divulgação Estratégica</h4>
                    <p className="text-gray-600">
                      Marketing digital e captação ativa de compradores qualificados
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-[var(--brand-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Negociação Especializada</h4>
                    <p className="text-gray-600">
                      Intermediação completa e suporte jurídico até o fechamento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Listing Section */}
      {/*<section id="imoveis" className="section-padding bg-brand-offWhite">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Imóveis Disponíveis"
            title="Encontre o imóvel dos seus sonhos"
            subtitle="Temos as melhores oportunidades do mercado com atendimento personalizado"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {imoveis && imoveis.length > 0 ? (
              imoveis.map((imovel) => (
                <Link key={imovel.id} to={`/venda/${imovel.id}`} className="block">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="relative">
                      <img
                        src={imovel.imagemPrincipal}
                        alt={imovel.titulo}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[var(--brand-accent)] text-black px-3 py-1 rounded-full text-sm font-bold">
                        R$ {imovel.preco.toLocaleString('pt-BR')}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-gray-900">
                        {imovel.titulo}
                      </h3>
                      <p className="text-gray-600 mb-4 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {imovel.endereco}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          <span>{imovel.quartos} quartos</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          <span>{imovel.banheiros} banheiros</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="w-4 h-4" />
                          <span>{imovel.area}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {imovel.descricao.length > 100 ? imovel.descricao.substring(0, 100) + "..." : imovel.descricao}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-blue-900 font-bold text-lg">
                          {imovel.tipo}
                        </span>
                        <div className="flex items-center gap-2 text-[var(--brand-accent)] font-semibold">
                          <Eye className="w-4 h-4" />
                          Ver Detalhes
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">Carregando imóveis...</p>
                <p className="text-sm text-gray-400 mt-2">Debug: {imoveis ? `${imoveis.length} imóveis encontrados` : 'imoveis é undefined'}</p>
              </div>
            )}
          </div>
        </div>
      </section>*/}

      {/* Types Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--brand-muted)] to-[var(--brand-off-white)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              badge="Tipos de Imóveis"
              title="Encontre o que você procura"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-[var(--brand-accent)]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Casas</h3>
              <p className="text-gray-600 text-sm">
                Residenciais em bairros nobres e em crescimento
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Apartamentos</h3>
              <p className="text-gray-600 text-sm">
                Studios, 2 e 3 quartos em localizações estratégicas
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-[var(--brand-accent)]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Comerciais</h3>
              <p className="text-gray-600 text-sm">
                Salas, lojas e pontos comerciais para investimento
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Terrenos</h3>
              <p className="text-gray-600 text-sm">
                Lotes para construção e investimento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="vendedores" className="section-padding bg-brand-offWhite">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              badge="Como Funciona"
              title="Processo de Venda"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[var(--brand-accent)] text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Avaliação</h3>
              <p className="text-gray-600">
                Visitamos e avaliamos seu imóvel com base no mercado atual para definir o melhor preço
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[var(--brand-secondary)] text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Marketing</h3>
              <p className="text-gray-600">
                Criamos um plano de marketing digital e captamos compradores qualificados
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[var(--brand-accent)] text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Fechamento</h3>
              <p className="text-gray-600">
                Conduzimos toda a negociação e documentação até a assinatura da escritura
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-secondary">
        <div className="border-t border-white/20 mb-16"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Venda seu{" "}
            <span className="text-[var(--brand-accent)]">imóvel</span> ou{" "}
            <span className="text-[var(--brand-accent)]">compre</span> conosco
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Entre em contato e descubra as melhores oportunidades do mercado imobiliário
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5521997627530"
              className="px-8 py-4 bg-[var(--brand-accent)] text-black font-bold rounded-full hover:bg-[#c9a332] transition-colors inline-flex items-center justify-center"
            >
              Falar com Especialista
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-bold rounded-full transition-colors inline-flex items-center justify-center"
            >
              Avaliar Meu Imóvel
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}