# Capital Administradora — site institucional

Site institucional da **Capital Administradora** (antiga Senna Administradora):
administração de condomínios, locação e venda de imóveis no Rio de Janeiro.

- Produção: https://administradoracapital.com.br
- Contato: contato@administradoracapital.com.br · (21) 99762-7530
- Instagram: [@capitalsuaadministradora](https://www.instagram.com/capitalsuaadministradora/)

## Stack

React 19 + Vite 7 + React Router 7 + Tailwind CSS 3.

```bash
npm install
npm run dev      # ambiente local
npm run build    # build de produção em dist/
npm run preview  # servir o build
npm run lint
```

## Identidade visual

A marca é grafite profundo + prata metálica (sem dourado). Os tokens vivem em
`src/index.css` e `tailwind.config.js`.

| Token | Valor | Uso |
| --- | --- | --- |
| `--brand-graphite` | `#1c1c1e` | superfícies escuras (header, rodapé, heroes) |
| `--brand-primary` | `#0e0e10` | preto da marca |
| `--brand-silver` | `#c9ced4` | prata de destaque sobre fundo escuro |
| `--brand-silver-light` | `#edeff1` | brilho do gradiente metálico |
| `--brand-silver-dark` | `#8b9299` | sombra do gradiente metálico |
| `--brand-accent` | contextual | destaque: grafite em fundo claro, prata em `.on-dark` |

`--brand-accent` **muda de valor conforme o contexto**: qualquer container com a
classe `.on-dark` (header, topbar, rodapé e as seções hero) troca o destaque
para a prata clara; fora dele o destaque é o grafite legível sobre branco. Por
isso o mesmo `text-[var(--brand-accent)]` funciona nos dois fundos.

Utilitários de marca disponíveis: `.surface-graphite`, `.text-metal`,
`.text-metal-ink`, `.chip-metal`, `.rule-metal`, `.btn-primary`, `.btn-secondary`.

## Assets da marca (`public/`)

| Arquivo | Uso |
| --- | --- |
| `logo.png` / `logo.svg` | lockup prata — fundos escuros |
| `logo-dark.png` / `logo-dark.svg` | lockup grafite — fundos claros |
| `logo-mark.png` | monograma isolado |
| `favicon.ico`, `favicon-{16,32,180,192,512}.png`, `apple-touch-icon.png` | ícones |
| `og-image.jpg` / `og-image.png` | cartão social 1200×630 |
| `site.webmanifest` | PWA / ícone de app |

Todos gerados a partir dos vetores oficiais do pacote **ARTES CAPITAL**.
