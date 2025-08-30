import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { DollarSign, Wrench, BarChart3, Users, Smartphone, Scale, Check, Handshake, Zap, Briefcase, MapPin, Building, Calendar } from "lucide-react";
import { condominios } from "../data/condominios";
import { Link } from "react-router-dom";

export default function Condominio() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
            alt="Condomínio brasileiro moderno"
            className="w-full h-[60vh] object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-[60vh] flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Administração de{" "}
              <span className="text-yellow-500">Condomínios</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Gestão completa e transparente para seu condomínio com tecnologia e atendimento personalizado
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#contato">
                Solicitar Orçamento
              </Button>
              <Button
                variant="secondary"
                href="https://senaadm.superlogica.net/clients/areadocondomino"
              >
                Portal do Condômino
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
              title="Administração Completa de Condomínios"
            />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para administração condominial, 
              desde a gestão financeira até a manutenção predial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gestão Financeira</h3>
              <p className="text-gray-600 leading-relaxed">
                Controle total das finanças do condomínio com relatórios detalhados, 
                cobrança eficiente e transparência nas contas.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Manutenção Predial</h3>
              <p className="text-gray-600 leading-relaxed">
                Coordenação de serviços de manutenção preventiva e corretiva, 
                garantindo o bom funcionamento de todas as instalações.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Relatórios Detalhados</h3>
              <p className="text-gray-600 leading-relaxed">
                Demonstrativos financeiros mensais, atas de reuniões e 
                relatórios de gastos com total transparência.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Suporte ao Síndico</h3>
              <p className="text-gray-600 leading-relaxed">
                Apoio completo ao síndico com orientações jurídicas, 
                administrativas e suporte técnico especializado.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Portal Online</h3>
              <p className="text-gray-600 leading-relaxed">
                Acesso digital para condôminos consultarem boletos, 
                extratos, avisos e se comunicarem com a administração.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Suporte Jurídico</h3>
              <p className="text-gray-600 leading-relaxed">
                Assessoria jurídica especializada em direito condominial 
                para resolver questões legais e conflitos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--brand-muted)] to-[var(--brand-off-white)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              badge="Vantagens"
              title="Por que escolher a Senna?"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-[var(--brand-accent)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Transparência Total</h3>
                  <p className="text-gray-600">
                    Prestação de contas clara com acesso a todos os documentos e relatórios
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-[var(--brand-secondary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Tecnologia Avançada</h3>
                  <p className="text-gray-600">
                    Sistema digital moderno para gestão eficiente e comunicação ágil
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-[var(--brand-accent)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Experiência Comprovada</h3>
                  <p className="text-gray-600">
                    Anos de atuação no mercado com gestão de diversos tipos de condomínios
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-[var(--brand-secondary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Atendimento Personalizado</h3>
                  <p className="text-gray-600">
                    Cada condomínio recebe atenção dedicada com soluções customizadas
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
                alt="Prédio moderno"
                className="rounded-2xl shadow-medium w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-secondary-light)] rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Condomínios Administrados */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Nossos Condomínios"
            title="Condomínios que Administramos"
            subtitle="Conheça alguns dos condomínios que confiam na nossa gestão especializada"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {condominios.map((condominio) => (
              <div key={condominio.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={condominio.imagemPrincipal}
                    alt={condominio.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {condominio.totalUnidades} unidades
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    {condominio.nome}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {condominio.endereco}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{condominio.tipo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{condominio.anoConstucao}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {condominio.descricao.length > 100 ? condominio.descricao.substring(0, 100) + "..." : condominio.descricao}
                  </p>

                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold">Taxa Admin:</span> {condominio.taxas.administracao}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Condomínio médio:</span> {condominio.taxas.condominio}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para uma gestão{" "}
            <span className="text-yellow-500">profissional</span>?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato conosco e descubra como podemos otimizar a administração do seu condomínio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5521997627530"
              className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
            >
              Ligar Agora
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}