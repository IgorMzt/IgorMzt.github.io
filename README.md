# Portfólio de Igor Mazeti

Portfólio pessoal em Next.js com foco em análise e visualização de dados. Inclui os estudos de caso DataVision e Gym OS, temas claro e escuro e navegação responsiva.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

## Publicação

O projeto gera uma exportação estática em `out/` com `npm run build`. O workflow em `.github/workflows/pages.yml` publica essa pasta no GitHub Pages quando há um push para `main`. Configure **Settings → Pages → Source: GitHub Actions** no repositório `IgorMzt.github.io`.

O workflow define `NEXT_PUBLIC_SITE_URL=https://igormzt.github.io` para os metadados sociais e o sitemap. Se usar um domínio próprio, altere essa variável no workflow e configure o domínio em **Settings → Pages** antes de publicar novamente.

## Atualizar conteúdo

- Página inicial, formação, cursos e contato: `src/app/page.tsx`. Novos cursos entram na lista `courses` no início do arquivo.
- Projetos em destaque: `src/components/project-card.tsx`.
- Estudos de caso: `src/components/datavision-case-study.tsx` e `src/components/gym-os-case-study.tsx`.
- Imagens do DataVision: `public/images/datavision/`.
