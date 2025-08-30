import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Home, MapPin, Car, Bath, Bed, Square, Eye } from "lucide-react";
import { imoveis } from "../data/imoveis";
import { Link } from "react-router-dom";

export default function Venda() {
  console.log("Imoveis data:", imoveis);
  console.log("Imoveis length:", imoveis.length);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop"
            alt="Imóveis à venda no Brasil"
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

      {/* Properties Listing Section */}
      <section id="imoveis" className="section-padding bg-brand-offWhite">
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
                      <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
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
                        <div className="flex items-center gap-2 text-yellow-600 font-semibold">
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
      </section>
    </main>
  );
}