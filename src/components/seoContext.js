import { createContext } from 'react';

// No pré-render (scripts/prerender.mjs) o useEffect do <SEO> não roda: o
// servidor fornece um coletor por aqui e grava as tags direto no HTML estático.
export const SEOContext = createContext(null);
