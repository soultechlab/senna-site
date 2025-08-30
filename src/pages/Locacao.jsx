import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Home, FileText, Handshake, DollarSign, Search, FileCheck, Building2, MapPin, Store, TreePine, Bed, Bath, Square, Eye } from "lucide-react";
import { locacoes } from "../data/locacoes";
import { Link } from "react-router-dom";

export default function Locacao() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
            alt="Apartamentos para locação no Brasil"
            className="w-full h-[60vh] object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-[60vh] flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Locação de{" "}
              <span className="text-yellow-500">Imóveis</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Encontre o imóvel ideal ou coloque o seu para alugar com segurança e agilidade
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#contato">
                Quero Alugar
              </Button>
              <Button variant="secondary" href="#proprietarios">
                Sou Proprietário
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
              title="Locação Completa de Imóveis"
            />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços completos de locação, desde a captação até a gestão do contrato, 
              garantindo segurança para proprietários e inquilinos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Para <span className="text-[var(--brand-accent)]">Inquilinos</span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Portfólio Diversificado</h4>
                    <p className="text-gray-600">
                      Casas, apartamentos, salas comerciais e terrenos em diversas localidades
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[var(--brand-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Processo Simplificado</h4>
                    <p className="text-gray-600">
                      Documentação ágil e processo de aprovação rápido e transparente
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Suporte Personalizado</h4>
                    <p className="text-gray-600">
                      Atendimento dedicado desde a visita até a assinatura do contrato
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Para <span className="text-[var(--brand-secondary)]">Proprietários</span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[var(--brand-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Análise de Mercado</h4>
                    <p className="text-gray-600">
                      Avaliação profissional para definir o melhor valor de locação
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Seleção de Inquilinos</h4>
                    <p className="text-gray-600">
                      Análise criteriosa de perfil e documentação dos candidatos
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-[var(--brand-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Gestão Completa</h4>
                    <p className="text-gray-600">
                      Contratos, vistorias, cobrança e manutenção do relacionamento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Casas</h3>
              <p className="text-gray-600 text-sm">
                Residenciais em bairros nobres e populares
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Apartamentos</h3>
              <p className="text-gray-600 text-sm">
                Diversos tamanhos e localizações estratégicas
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Comerciais</h3>
              <p className="text-gray-600 text-sm">
                Salas, lojas e pontos comerciais
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold mb-2">Terrenos</h3>
              <p className="text-gray-600 text-sm">
                Para construção ou investimento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proprietarios" className="section-padding bg-brand-offWhite">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              badge="Como Funciona"
              title="Processo de Locação"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[var(--brand-accent)] text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Avaliação</h3>
              <p className="text-gray-600">
                Visitamos o imóvel e fazemos uma análise completa do mercado para definir o melhor valor
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[var(--brand-secondary)] text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Divulgação</h3>
              <p className="text-gray-600">
                Anunciamos em múltiplas plataformas e fazemos a prospecção ativa de interessados
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[var(--brand-accent)] text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Fechamento</h3>
              <p className="text-gray-600">
                Análise dos candidatos, negociação e assinatura do contrato com total segurança jurídica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imóveis Disponíveis */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Disponíveis"
            title="Imóveis para Locação"
            subtitle="Confira nossa seleção de imóveis disponíveis para aluguel com as melhores condições"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {locacoes.map((locacao) => (
              <div key={locacao.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={locacao.imagemPrincipal}
                    alt={locacao.titulo}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    R$ {locacao.preco.toLocaleString('pt-BR')}/mês
                  </div>
                  {locacao.mobiliado && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Mobiliado
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    {locacao.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {locacao.endereco}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{locacao.quartos} quarto{locacao.quartos > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{locacao.banheiros} banheiro{locacao.banheiros > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{locacao.area}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {locacao.descricao.length > 100 ? locacao.descricao.substring(0, 100) + "..." : locacao.descricao}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">IPTU:</span>
                      <span className="font-semibold">{locacao.observacoes.iptu}</span>
                    </div>
                    {locacao.observacoes.condominio !== "Não há" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Condomínio:</span>
                        <span className="font-semibold">{locacao.observacoes.condominio}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-900 font-bold text-lg">
                      {locacao.tipo}
                    </span>
                    <div className="flex items-center gap-2 text-yellow-600 font-semibold text-sm">
                      <Eye className="w-4 h-4" />
                      Ver Detalhes
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Encontre seu próximo{" "}
            <span className="text-yellow-500">lar</span> ou{" "}
            <span className="text-yellow-500">invista</span> conosco
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Entre em contato e descubra as melhores oportunidades de locação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5521997627530"
              className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
            >
              Falar com Especialista
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-bold rounded-full transition-colors inline-flex items-center justify-center"
            >
              Solicitar Visita
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}