# CashSum

Site de contagem de dinheiro (notas e moedas), com uma página própria por
moeda — cada uma com título e descrição reais no HTML, no idioma
correspondente, para SEO.

## Estrutura

- `app/page.js` — página inicial, redireciona para `/eur`
- `app/[currency]/page.js` — página dinâmica de cada moeda (define o
  `<title>` e a meta description reais)
- `components/CashSumApp.jsx` — a calculadora em si (interativa)
- `lib/currencies.js` — configuração de todas as moedas: denominações,
  idioma, textos traduzidos e termo de SEO-alvo
- `public/logo.png` — logotipo

## Como adicionar uma moeda nova

Abre `lib/currencies.js` e acrescenta uma nova entrada ao objeto
`CURRENCIES`, seguindo o mesmo formato das que já lá estão. A chave que
usares (ex: `"franco"`) vira automaticamente o URL: `cashsum.app/franco`.

## Correr localmente

```bash
npm install
npm run dev
```

Depois abre http://localhost:3000

## Publicar (Vercel)

1. Sobe este projeto para um repositório no GitHub.
2. Em vercel.com → "Add New Project" → seleciona o repositório.
3. O Vercel deteta automaticamente que é Next.js — não precisas de
   configurar nada, só clicar em "Deploy".
4. Depois de publicado, vai a Project Settings → Domains → adiciona
   `cashsum.app` e segue as instruções de DNS para colocares na Cloudflare.
