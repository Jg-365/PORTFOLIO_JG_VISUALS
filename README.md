# JGVisuals — Portfolio Premium

Website premium para a marca JGVisuals com landing page imersiva, galeria de projetos, páginas editoriais e painel admin privado.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion + GSAP
- Supabase (Auth, Postgres, Storage)
- Deploy: Vercel

## Arquitetura
- `app/(public)`: páginas públicas (home, projetos, sobre, contato)
- `app/admin`: painel privado, login e CRUD
- `app/api`: endpoints para projetos/upload
- `components`: seções visuais, layout e admin
- `lib`: schemas Zod, dados mockados, clientes Supabase
- `supabase`: SQL de schema, políticas RLS e seed

## Rodando localmente
1. Copie `.env.example` para `.env.local`
2. Preencha variáveis do Supabase
3. Instale dependências:
   ```bash
   npm install
   ```
4. Rode o projeto:
   ```bash
   npm run dev
   ```

## Variáveis de ambiente
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAIL`

## Supabase setup
1. Criar projeto no Supabase.
2. Executar `supabase/schema.sql` no SQL Editor.
3. Executar `supabase/seed.sql` para dados iniciais.
4. Criar bucket `project-assets` (público para leitura de capas e galeria).
5. Criar usuário admin no Auth com email = `ADMIN_EMAIL`.

## Deploy na Vercel
1. Conectar repositório à Vercel.
2. Definir as variáveis de ambiente da `.env.example`.
3. Deploy automático via branch principal.
4. Validar rotas `/`, `/projetos`, `/admin/login`.

## Roadmap recomendado
- Integrar CRUD com Supabase realtime.
- Upload múltiplo com preview, reorder e compressão.
- Intro 3D com React Three Fiber/drei no hero.
- Gestão de textos dinâmicos via `site_settings`.
