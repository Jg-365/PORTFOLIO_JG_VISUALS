-- Enable extensions
create extension if not exists "pgcrypto";

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  subtitle text not null,
  cover_image text,
  gallery_images text[] not null default '{}',
  short_description text not null,
  full_description text not null,
  challenge text,
  solution text,
  creative_process text,
  tools text[] not null default '{}',
  category text not null,
  tags text[] not null default '{}',
  featured boolean not null default false,
  published boolean not null default true,
  year int not null,
  client text,
  external_url text,
  order_index int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id int primary key default 1,
  hero_headline text not null,
  hero_subtitle text not null,
  brand_manifesto text not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  order_index int not null default 0,
  active boolean not null default true
);

create table if not exists public.social_links (
  id uuid primary key default gen_random_uuid(),
  platform text not null,
  url text not null,
  order_index int not null default 0,
  active boolean not null default true
);

alter table public.projects enable row level security;
alter table public.site_settings enable row level security;
alter table public.services enable row level security;
alter table public.social_links enable row level security;

create policy "Public can read published projects" on public.projects
for select using (published = true);

create policy "Admin full access projects" on public.projects
for all using (auth.jwt()->>'email' = current_setting('app.settings.admin_email', true))
with check (auth.jwt()->>'email' = current_setting('app.settings.admin_email', true));

create policy "Public read services" on public.services for select using (active = true);
create policy "Public read socials" on public.social_links for select using (active = true);
create policy "Public read settings" on public.site_settings for select using (true);

create policy "Admin manage settings" on public.site_settings for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admin manage services" on public.services for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Admin manage socials" on public.social_links for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

insert into public.site_settings (id, hero_headline, hero_subtitle, brand_manifesto)
values (1, 'Design autoral com impacto internacional', 'JGVisuals une estética, tecnologia e narrativa.', 'Acreditamos em luxo visual com precisão estratégica.')
on conflict (id) do nothing;
