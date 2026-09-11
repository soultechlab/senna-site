import { useEffect } from 'react';

export const SITE_URL = 'https://administradoracapital.com.br';
export const SITE_NAME = 'Capital Administradora';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({
  title = 'Capital Administradora | Administração de Condomínios, Locação e Venda de Imóveis no Rio de Janeiro',
  description = 'Capital Administradora: administração de condomínios, locação e venda de imóveis no Rio de Janeiro. Gestão financeira transparente, portal do condômino e atendimento personalizado.',
  keywords = 'Capital Administradora, administradora de condomínios Rio de Janeiro, administração de condomínios RJ, gestão de condomínios, portal do condômino, locação de imóveis RJ, venda de imóveis Rio de Janeiro, administradora predial, imobiliária RJ',
  ogTitle,
  ogDescription,
  ogImage = OG_IMAGE,
  ogImageAlt = 'Capital Administradora — administração de condomínios e imóveis no Rio de Janeiro',
  canonicalUrl = `${SITE_URL}/`,
  structuredData,
}) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = 'pt-BR';

    // Cria ou atualiza uma meta tag identificada por name ou property
    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const absolute = (url) =>
      url?.startsWith('http') ? url : `${SITE_URL}${url?.startsWith('/') ? '' : '/'}${url}`;

    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', SITE_NAME);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1');

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'pt_BR');
    setMeta('property', 'og:title', ogTitle || title);
    setMeta('property', 'og:description', ogDescription || description);
    setMeta('property', 'og:image', absolute(ogImage));
    setMeta('property', 'og:image:alt', ogImageAlt);
    setMeta('property', 'og:url', canonicalUrl);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', ogTitle || title);
    setMeta('name', 'twitter:description', ogDescription || description);
    setMeta('name', 'twitter:image', absolute(ogImage));

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Dados estruturados da página (o JSON-LD da organização vive no index.html)
    if (!structuredData) return undefined;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoPage = 'true';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => script.remove();
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogImageAlt, canonicalUrl, structuredData]);

  return null;
};

export default SEO;
