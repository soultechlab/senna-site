import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import { SEOContext } from "./components/seoContext";

// Rotas pré-renderizadas no build (e listadas no sitemap.xml).
// /venda/:id fica de fora enquanto a vitrine de imóveis (src/data/imoveis.js)
// estiver comentada em Venda.jsx: são dados de exemplo, sem link no site.
export const routes = [
  { path: "/", priority: "1.00", changefreq: "weekly" },
  { path: "/condominio", priority: "0.90", changefreq: "monthly" },
  { path: "/locacao", priority: "0.90", changefreq: "weekly" },
  { path: "/venda", priority: "0.90", changefreq: "weekly" },
  { path: "/about", priority: "0.70", changefreq: "monthly" },
];

export function render(url) {
  let seo = null;
  const html = renderToString(
    <SEOContext.Provider value={(props) => { seo = props; }}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </SEOContext.Provider>
  );
  return { html, seo };
}
