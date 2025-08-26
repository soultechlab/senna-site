import Button from "../components/ui/Button";

export default function Services() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop"
            alt="Cidade"
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
                variant="dark"
                href="https://senaadm.superlogica.net/clients/areadocondomino"
              >
                Acesso Exclusivo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
