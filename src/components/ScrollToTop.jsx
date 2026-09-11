import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sem isso, o React Router mantém a posição de rolagem ao trocar de rota:
 * quem toca em "Quem Somos" no meio da página de Locação cai no meio da
 * página de destino. Leva ao topo em cada navegação e respeita âncoras
 * como /#contato.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const alvo = document.querySelector(hash);
      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // "instant" sobrepõe o scroll-behavior: smooth global — numa troca de
    // página o salto deve ser imediato, não uma animação de página inteira.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
