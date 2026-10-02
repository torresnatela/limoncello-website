# Ritorno alle Origini — site

Landing page do limoncello Ritorno alle Origini. Next.js (App Router) + CSS Modules, 100% estática, pronta para a Vercel.

## Rodar local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Número do WhatsApp, domínio, e-mail, Instagram, produtos e preços | `src/lib/config.ts` |
| Texto da mensagem enviada ao WhatsApp | `src/lib/order.ts` |
| Cores, fontes e espaçamentos (tokens) | `src/app/globals.css` |
| Seções da página | `src/components/*` |
| Imagens | `public/images/` · prévia de redes sociais: `src/app/opengraph-image.jpg` (1200×630) |

O número do WhatsApp também pode ser sobrescrito pela variável `NEXT_PUBLIC_WA_NUMBER` na Vercel.

## Deploy

```bash
npm i -g vercel@latest
vercel link        # vincula o projeto
vercel             # preview
vercel --prod      # produção
```

Depois adicione o domínio `origini.bhz.br` em Project → Settings → Domains e aponte o DNS conforme indicado.
