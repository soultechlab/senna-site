import { useParams, Navigate } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { MapPin, Bed, Bath, Square, Car } from "lucide-react";
import { imoveis } from "../data/imoveis";

export default function ImovelDetalhes() {
  const { id } = useParams();
  const imovel = imoveis.find(item => item.id === parseInt(id));

  if (!imovel) {
    return <Navigate to="/venda" replace />;
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imovel.imagemPrincipal}
            alt={imovel.titulo}
            className="w-full h-[60vh] object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-[60vh] flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {imovel.titulo}
            </h1>
            <p className="text-lg md:text-xl mt-4 mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {imovel.endereco}
            </p>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span>{imovel.quartos} quartos</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span>{imovel.banheiros} banheiros</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="w-5 h-5" />
                <span>{imovel.area}</span>
              </div>
              {imovel.vagas > 0 && (
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>{imovel.vagas} vaga{imovel.vagas > 1 ? 's' : ''}</span>
                </div>
              )}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              R$ {imovel.preco.toLocaleString('pt-BR')}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+5521997627530"
                className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
              >
                Ligar Agora
              </a>
              <a
                href={`https://wa.me/5521997627530?text=Olá! Tenho interesse no imóvel: ${imovel.titulo} - ${imovel.endereco}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-bold rounded-full transition-colors inline-flex items-center justify-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="section-padding bg-brand-offWhite">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Detalhes do Imóvel</h2>
            
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-8">
                {imovel.descricao}
              </p>
              
              {/* Características */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">Características</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {imovel.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span>{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detalhes específicos baseados no tipo de imóvel */}
              {imovel.detalhes && (
                <div className="mb-8">
                  {imovel.detalhes.primeiroAndar && (
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-900">Primeiro andar</h3>
                        <ul className="space-y-2">
                          {imovel.detalhes.primeiroAndar.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {imovel.detalhes.segundoAndar && (
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-blue-900">Segundo andar</h3>
                          <ul className="space-y-2">
                            {imovel.detalhes.segundoAndar.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {imovel.detalhes.ambiente && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-blue-900">Ambientes</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {imovel.detalhes.ambiente.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {imovel.detalhes.anexo && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-blue-900">Casa Anexo</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {imovel.detalhes.anexo.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Observações financeiras */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">Informações Importantes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p><strong>Financiamento:</strong> {imovel.observacoes.financiamento ? 'Aceito' : 'Não aceito'}</p>
                    <p><strong>Permuta:</strong> {imovel.observacoes.permuta ? 'Aceito' : 'Não aceito'}</p>
                  </div>
                  <div>
                    {imovel.observacoes.iptu && <p><strong>IPTU:</strong> {imovel.observacoes.iptu}</p>}
                    {imovel.observacoes.iptu1 && <p><strong>IPTU Casa 101:</strong> {imovel.observacoes.iptu1}</p>}
                    {imovel.observacoes.iptu2 && <p><strong>IPTU Casa 201:</strong> {imovel.observacoes.iptu2}</p>}
                    {imovel.observacoes.condominio && <p><strong>Condomínio:</strong> {imovel.observacoes.condominio}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria de fotos */}
          {imovel.galeria && imovel.galeria.length > 0 && (
            <>
              <div className="text-center mb-16">
                <SectionTitle
                  badge="Galeria de Fotos"
                  title="Conheça todos os ambientes"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {imovel.galeria.map((foto, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={foto.url}
                      alt={foto.descricao}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h4 className="font-bold">{foto.descricao}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-secondary-light)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Interessado neste{" "}
            <span className="text-yellow-500">imóvel</span>?
          </h3>
          <p className="text-lg text-white/90 mb-2">
            <strong>R$ {imovel.preco.toLocaleString('pt-BR')}</strong>
          </p>
          <p className="text-lg text-white/90 mb-8">
            Entre em contato conosco e agende sua visita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5521997627530"
              className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
            >
              Ligar Agora
            </a>
            <a
              href={`https://wa.me/5521997627530?text=Olá! Tenho interesse no imóvel: ${imovel.titulo} - ${imovel.endereco} por R$ ${imovel.preco.toLocaleString('pt-BR')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-bold rounded-full transition-colors inline-flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}