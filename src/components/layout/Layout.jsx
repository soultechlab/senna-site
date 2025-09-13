import Topbar from "./Topbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="text-neutral-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[var(--brand-accent)] text-black px-4 py-2 z-50">
        Pular para o conteúdo principal
      </a>
      <Topbar />
      <Header />
      <main id="main-content" role="main">{children}</main>
      <Footer />
    </div>
  );
}
