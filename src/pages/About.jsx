import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { Handshake, Zap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
            alt="Edifícios corporativos"
            className="w-full h-[50vh] object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-[50vh] flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Quem <span className="text-[var(--brand-accent)]">Somos</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Conheça nossa história e nossos valores
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-brand-offWhite">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              badge="Nossa História"
              title="Senna Administradora"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                A <strong>Senna Administradora</strong> é uma empresa com experiência no mercado imobiliário, realizando administração de condomínios, locações, compra e venda de imóveis.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Nosso diferencial é o <span className="text-[var(--brand-accent)] font-semibold">atendimento personalizado</span> direcionado à necessidade de cada cliente.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                É importante ressaltar que nosso trabalho pauta-se por desenvolver e prestar um serviço ainda mais eficaz, levando em consideração as peculiaridades de cada caso, esclarecendo e orientando, servindo como verdadeiro suporte aos seus interesses.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Equipe trabalhando"
                className="rounded-2xl shadow-medium w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[var(--brand-accent)] to-[#c9a332] rounded-3xl opacity-20"></div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-[var(--brand-accent)]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cada cliente recebe atenção dedicada e soluções adequadas às suas necessidades específicas.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Eficiência
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Processos otimizados e soluções ágeis para resultados consistentes e de qualidade.
              </p>
            </div>

            <div className="bg-white text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[var(--brand-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-[var(--brand-accent)]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Experiência
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Anos de atuação no mercado imobiliário com conhecimento sólido e comprovado.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Na certeza de que podemos desenvolver bons trabalhos em{" "}
                <span className="text-[var(--brand-accent)]">parceria</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Colocamo-nos à sua inteira disposição para quaisquer esclarecimentos adicionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+5521997627530"
                  className="px-8 py-4 bg-[var(--brand-accent)] text-black font-bold rounded-full hover:bg-[#c9a332] transition-colors inline-flex items-center justify-center"
                >
                  Entre em Contato
                </a>
                <a
                  href="/"
                  className="px-8 py-4 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
                >
                  Nossos Serviços
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}